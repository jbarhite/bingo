TIME_PER_QUESTION = [15, 20, 25, 30, 35]; // time (in seconds) per question, for the five columns (B, I, N, G, O)
TIME_STEP = 10;

timer = null;
timeRemaining = 0; // in milliseconds
totalTime = 0; // in milliseconds

question = 14;
questionHistory = [];


function startQuestion(column, number) {
	// display the question and record it
	katex.render(questions[column][number], document.querySelector('.current_question'), {
		displayMode: true,
	    throwOnError: false
	});
	document.querySelector('.current_column').innerHTML = "BINGO"[column]
	questionHistory.push([column, number]);

	// start timer
	totalTime = TIME_PER_QUESTION[column] * 1000;
	timeRemaining = totalTime;
	if (timer != null) clearInterval(timer);
	timer = setInterval(updateTimer, TIME_STEP);
}

function updateTimer() {
	timeRemaining = Math.max(0, timeRemaining - TIME_STEP);
	progressBar = document.querySelector('.progress');
	progressBar.style.width = (timeRemaining / totalTime) * 100 + '%';

	if (timeRemaining <= 0) next();
}

function next() {
	if (questionHistory.length > 0) {
		const previousNumbersDiv = document.querySelector('.previous-numbers');
		const newSpan = document.createElement('span');
		const prevQuestion = questionHistory[questionHistory.length - 1];
		katex.render(questions[prevQuestion[0]][prevQuestion[1]], newSpan, {
			throwOnError: false
		});
		previousNumbersDiv.insertBefore(newSpan, previousNumbersDiv.firstChild);
	}

	question++;
	if (question >= 15) question = 0;
	startQuestion(0, question);
}

function pause() {
	if (timer != null) {
		clearInterval(timer);
		timer = null;
	}
}

function resume() {
	if (timer == null) {
		timer = setInterval(updateTimer, TIME_STEP);
	}
}

function openCardCheckModal() {
	pause();
	clearCardCheck();
	document.getElementById('bingoCardNumber').value = '';
	const modal = document.getElementById('card-check');
	modal.style.display = 'block';
}

function closeCardCheckModal() {
	const modal = document.getElementById('card-check');
	modal.style.display = 'none';
}

function onClickSquare(event) {
	if (event.target.classList.contains('selected')) {
		event.target.classList.remove('selected');
	} else if (event.target.classList.contains('verified')) {
		event.target.classList.remove('verified');
	} else {
		event.target.classList.add('selected');
	}
}

function clearCardCheck() {
	document.querySelectorAll('.bingo-square').forEach((square) => {
		square.classList.remove('selected');
		square.classList.remove('verified');
	});
}

function checkCard() {
	cardID = parseInt(document.getElementById('bingoCardNumber').value);
	if (isNaN(cardID) || cardID < 0 || cardID >= cards.length) {
		alert("Invalid card number.");
		return
	}

	document.querySelectorAll('.bingo-square.selected, .bingo-square.verified').forEach((square) => {
		c = parseInt(square.id.substring(7, 8));
		r = parseInt(square.id.substring(9, 10));
		if ((c == 2 && r == 2) || questionHasBeenShown(c, cards[cardID][c][r])) {
			square.classList.remove('selected');
			square.classList.add('verified');
		} else {
			square.classList.remove('verified');
			square.classList.add('selected');
		}
	});
}

function questionHasBeenShown(c, r) {
	for (let q of questionHistory) {
		if (q[0] == c && q[1] == r) return true
	}
	return false
}

function initialize() {
	// Create squares in card check modal
	const grid = document.querySelector('.bingo-grid');
	for (let c=0; c<5; c++) {
		for (let r=0; r<5; r++) {
			const square = document.createElement('div');
			square.className = 'bingo-square';
			square.id = 'square-' + c + '-' + r;
			square.style.order = 5 * r + c;
			grid.appendChild(square);
			square.addEventListener('click', onClickSquare);
		}
	}
}

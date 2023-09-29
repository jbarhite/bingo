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
	const modal = document.getElementById('card-check');
	modal.style.display = 'block';
}

function closeCardCheckModal() {
	const modal = document.getElementById('card-check');
	modal.style.display = 'none';
}

function clearCardCheck() {
	document.querySelectorAll('.bingo-square').forEach((square) => {
		square.classList.remove('selected');
		square.classList.remove('verified');
	});
}

function checkCard() {
	document.querySelectorAll('.bingo-square.selected').forEach((square) => {
		square.classList.remove('selected');
		square.classList.add('verified');
	});
}

function initialize() {
	// Create squares in card check modal
	const grid = document.querySelector('.bingo-grid');
	for (let i=0; i<25; i++) {
		const square = document.createElement('div');
		square.className = 'bingo-square';
		grid.appendChild(square);

		square.addEventListener('click', function(event) {
			if (event.target.classList.contains('selected')) {
				event.target.classList.remove('selected');
			} else if (event.target.classList.contains('verified')) {
				event.target.classList.remove('verified');
			} else {
				event.target.classList.add('selected');
			}
		});
	}
}

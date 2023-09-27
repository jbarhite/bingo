TIME_PER_QUESTION = [15, 20, 25, 30, 35]; // time (in seconds) per question, for the five columns (B, I, N, G, O)
TIME_STEP = 10;

timer = null;
timeRemaining = 0; // in milliseconds
question = 14;


function startQuestion(column, number) {
	katex.render(questions[column][number], document.getElementById("current_question"), {
		displayMode: true,
	    throwOnError: false
	});

	timeRemaining = TIME_PER_QUESTION[column] * 1000
	if (timer != null) clearInterval(timer);
	timer = setInterval(updateTimer, TIME_STEP, timeRemaining)
}

function updateTimer(totalTime) {
	timeRemaining = Math.max(0, timeRemaining - TIME_STEP);
	progressBar = document.querySelector('.progress');
	progressBar.style.width = (timeRemaining / totalTime) * 100 + '%';

	if (timeRemaining <= 0) next();
}

function next() {
	question++;
	if (question >= 15) question = 0;
	startQuestion(0, question);
	
}

function initialize() {
	next();
}

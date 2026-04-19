import { mcqs } from './data.js';

let currentIndex = 0;
let selectedOption = null;
let showsolution = false;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShowSolution = document.getElementById('btn-show-solution');
const solutionContainer = document.getElementById('solution-container');
const solutionText = document.getElementById('solution-text');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const badge = document.querySelector('.badge');
const mainContainer = document.querySelector('main');

function loadQuestion(index) {
  // Reset state
  selectedOption = null;
  showsolution = false;
  solutionContainer.classList.add('hidden');
  btnShowSolution.classList.add('hidden');
  
  // Animation
  mainContainer.classList.remove('fade-in');
  void mainContainer.offsetWidth; // trigger reflow
  mainContainer.classList.add('fade-in');

  const q = mcqs[index];
  
  questionText.textContent = q.question;
  badge.textContent = `Question ${index + 1} / ${mcqs.length}`;
  
  // Update progress
  progressText.textContent = `Question ${index + 1} of ${mcqs.length}`;
  progressFill.style.width = `${((index + 1) / mcqs.length) * 100}%`;

  // Render options
  optionsContainer.innerHTML = '';
  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.textContent = opt;
    div.addEventListener('click', () => selectOption(div, opt, q));
    optionsContainer.appendChild(div);
  });

  // Buttons state
  btnPrev.disabled = index === 0;
  if(index === mcqs.length - 1) {
    btnNext.textContent = 'Finish';
  } else {
    btnNext.textContent = 'Next Question';
  }
}

function selectOption(element, optText, q) {
  if (showsolution) return; // prevent changing after solution is shown

  // Deselect others
  const allOptions = optionsContainer.querySelectorAll('.option');
  allOptions.forEach(opt => opt.classList.remove('selected'));
  
  element.classList.add('selected');
  selectedOption = optText;
  
  btnShowSolution.classList.remove('hidden');
}

function revealSolution() {
  if (!selectedOption) return;
  showsolution = true;

  const q = mcqs[currentIndex];
  btnShowSolution.classList.add('hidden');
  solutionContainer.classList.remove('hidden');
  solutionText.textContent = q.solution || q.answer;

  // Highlight correct and wrong logic based on correct answer string
  // It uses a simple include check because multiple options might be correct
  const allOptions = optionsContainer.querySelectorAll('.option');
  allOptions.forEach(optElem => {
    // extract option letter, e.g. "(a)"
    const optMatch = optElem.textContent.match(/^\([a-z]\)/);
    if (optMatch && q.answer.includes(optMatch[0])) {
      optElem.classList.add('correct');
      optElem.classList.remove('wrong', 'selected');
    } else if (optElem.classList.contains('selected')) {
      optElem.classList.add('wrong');
    }
    optElem.style.cursor = 'default';
  });
}

btnShowSolution.addEventListener('click', revealSolution);

btnNext.addEventListener('click', () => {
  if (currentIndex < mcqs.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  } else {
    questionText.textContent = "You've completely finished the prep!";
    optionsContainer.innerHTML = "";
    solutionContainer.classList.add("hidden");
    btnNext.classList.add('hidden');
    btnPrev.classList.add('hidden');
    btnShowSolution.classList.add('hidden');
    badge.textContent = "Done 🥳";
  }
});

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion(currentIndex);
  }
});

// Initialize
if (mcqs && mcqs.length > 0) {
  loadQuestion(currentIndex);
} else {
  questionText.textContent = "No questions found. Please check data.js";
}

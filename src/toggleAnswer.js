export default function toggleAnswer(button) {
  button.addEventListener('click', () => {
    const quizCard = button.parentNode;
    const answer = quizCard.querySelector('.card__answer');
    answer.classList.toggle('hidden');

    answer.classList.contains('hidden')
      ? (button.innerText = 'SHOW')
      : (button.innerText = 'HIDE');

    button.innerText += ' ANSWER';
  });
}

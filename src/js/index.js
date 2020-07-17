import { callMyName } from './callMyName';
import { hello } from './sayHello';

console.log('started')
hello();
callMyName('Ken');

const start = () => {
  const stepButtons = document.querySelectorAll('.steps-list span');

  stepButtons.forEach((i, index) => {
    i.addEventListener('click', () => {
      stepButtons.forEach(step => step.classList.remove('active'))

      i.classList.add('active')
      showStep(index)
    })
  })
}

const showStep = (index) => {
  const steps = document.querySelectorAll('.detail .step')

  for (let i of steps) {
    if (i.classList.contains('active-step')) {
      i.classList.remove('active-step')
    }
  }

  steps[index].classList.add('active-step')
}

start();
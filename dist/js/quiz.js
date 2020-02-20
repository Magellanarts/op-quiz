Vue.component('quiz-item', {
  props: ['question', 'answers'],
  template:
    '<div class="quiz--item"><quiz-item-question :question="question"></quiz-item-question><quiz-item-answers :answers="answers"></quiz-item-answers></div>',
});

Vue.component('quiz-item-question', {
  props: ['question'],
  template: '<h2>{{ question }}</h2>',
});

Vue.component('quiz-item-answers', {
  props: ['answers'],
  template:
    '<div class="quiz--options"><quiz-item-answers-option v-for="answer in answers" :key="answer" :answer="answer"></quiz-item-answers-option></div>',
});

Vue.component('quiz-item-answers-option', {
  props: ['answer'],
  template:
    '<button :class="{isActive : answer.active}" @click="optionClicked" class="quiz--option">{{ answer.label }}</button>',
  methods: {
    optionClicked() {},
  },
});

var app = new Vue({
  el: '#quiz-app',
  data: {
    questions: [
      {
        question: 'Pick a color:',
        answers: [
          {
            label: 'Red',
            value: 0,
            active: false,
          },
          {
            label: 'Yellow',
            value: 0,
            active: false,
          },
          {
            label: 'Green',
            value: 0,
            active: false,
          },
          {
            label: 'Black',
            value: 0,
            active: false,
          },
        ],
      },
      {
        question: 'How do you spend your Sundays',
        answers: [
          {
            label: 'Yoga',
            value: 0,
            active: false,
          },
          {
            label: 'Watching sports & eating wings',
            value: 0,
            active: false,
          },
          {
            label: 'Nursing that hangover',
            value: 0,
            active: false,
          },
          {
            label: 'Brunch with friends or family',
            value: 0,
            active: false,
          },
        ],
      },
      {
        question: 'How would your friends describe you?',
        answers: [
          {
            label: 'Dependable / Loyal',
            value: 0,
            active: false,
          },
          {
            label: 'The good time',
            value: 0,
            active: false,
          },
          {
            label: 'Feisty',
            value: 0,
            active: false,
          },
          {
            label: 'Athletic',
            value: 0,
            active: false,
          },
        ],
      },
    ],
  },
});

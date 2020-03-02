// Vuex
const store = new Vuex.Store({
  state: {
    totals: {
      classic: 0,
      buff: 0,
      wiz: 0,
      hoagie: 0,
    },
    results: [
      {
        title: 'Classic Cheesesteak',
        description: 'Lorem Ipsum 1',
        image: 'cheesesteak.jpg',
      },
      {
        title: 'Buffalo Cheesesteak',
        description: 'Lorem Ipsum 2',
        image: 'cheesesteak.jpg',
      },
      {
        title: 'Extra Whiz Cheesesteak',
        description:
          'Why even try and hold back being yourself? You don’t have to pretend you like cauliflower pizza crust or that skinny margarita tastes the same as a real margarita (it doesn’t). You like your ‘steak smothered in wiz and why not? it’s delicious. YOU DO YOU.',
        image: 'cheesesteak.jpg',
      },
      {
        title: 'Hoagie',
        description: 'Lorem Ipsum 3',
        image: 'cheesesteak.jpg',
      },
    ],
    questions: [
      {
        id: 0,
        question: 'Pick a color:',
        answers: [
          {
            label: 'Red',
            value: 'buff',
            active: false,
          },
          {
            label: 'Yellow',
            value: 'wiz',
            active: false,
          },
          {
            label: 'Green',
            value: 'hoagie',
            active: false,
          },
          {
            label: 'Black',
            value: 'classic',
            active: false,
          },
        ],
      },
      {
        id: 1,
        question: 'How do you spend your Sundays',
        answers: [
          {
            label: 'Yoga',
            value: 'hoagie',
            active: false,
          },
          {
            label: 'Watching sports & eating wings',
            value: 'buff',
            active: false,
          },
          {
            label: 'Nursing that hangover',
            value: 'wiz',
            active: false,
          },
          {
            label: 'Brunch with friends or family',
            value: 'classic',
            active: false,
          },
        ],
      },
      {
        id: 2,
        question: 'How would your friends describe you?',
        answers: [
          {
            label: 'Dependable / Loyal',
            value: 'classic',
            active: false,
          },
          {
            label: 'The good time',
            value: 'wiz',
            active: false,
          },
          {
            label: 'Feisty',
            value: 'buff',
            active: false,
          },
          {
            label: 'Athletic',
            value: 'hoagie',
            active: false,
          },
        ],
      },
      {
        id: 3,
        question: 'Pick a Scent:',
        answers: [
          {
            label: 'Lavendar',
            value: 'hoagie',
            active: false,
          },
          {
            label: 'Campfire',
            value: 'classic',
            active: false,
          },
          {
            label: 'Cinnamon',
            value: 'buff',
            active: false,
          },
          {
            label: 'Fresh Donuts',
            value: 'wiz',
            active: false,
          },
        ],
      },
      {
        id: 4,
        question: 'Pick a favorite show:',
        answers: [
          {
            label: 'Breaking Bad',
            value: 'buff',
            active: false,
          },
          {
            label: 'Seinfeld',
            value: 'classic',
            active: false,
          },
          {
            label: 'Game of Thrones',
            value: 'wiz',
            active: false,
          },
          {
            label: 'The Real Housewives',
            value: 'hoagie',
            active: false,
          },
        ],
      },
      {
        id: 5,
        question: 'What pet would you own?',
        answers: [
          {
            label: 'Dog',
            value: 'classic',
            active: false,
          },
          {
            label: 'Pygmy goat',
            value: 'hoagie',
            active: false,
          },
          {
            label: 'Hedgehog',
            value: 'wiz',
            active: false,
          },
          {
            label: 'Scorpion',
            value: 'buff',
            active: false,
          },
        ],
      },
    ],
  },
  actions: {
    checkOtherAnswers(context, payload) {
      // check to see if there is already an answer marked true
      // if so, set to false
      context.state.questions[payload.questionId].answers.forEach(function(
        answer,
        index,
      ) {
        if (answer.active == true) {
          // mark inactive by passing in question id and label
          context.commit('markInactive', {
            questionId: payload.questionId,
            label: answer.label,
          });
          // also decrement this hoagie's total
          context.commit('decrement', answer.value);
        }
      });
    },
    deactivateAnswer(context, payload) {
      // mark this answer as active
      context.commit('markInactive', {
        questionId: payload.questionId,
        label: payload.label,
      });

      // increase this hoagie's total
      context.commit('decrement', payload.value);
    },
    activateAnswer(context, payload) {
      // mark this answer as active
      context.commit('markActive', payload);

      // increase this hoagie's total
      context.commit('increment', payload.value);
    },
    resetQuiz(context) {
      context.commit('reset');
    },
  },
  mutations: {
    increment(state, payload) {
      state.totals[payload]++;
    },
    decrement(state, payload) {
      state.totals[payload]--;
    },
    markActive(state, payload) {
      state.questions[payload.questionId].answers.find(
        x => x.label === payload.label,
      ).active = true;
    },
    markInactive(state, payload) {
      state.questions[payload.questionId].answers.find(
        x => x.label === payload.label,
      ).active = false;
    },
    reset(state) {
      // reset totals
      state.totals.classic = 0;
      state.totals.buff = 0;
      state.totals.wiz = 0;
      state.totals.hoagie = 0;

      // reset active answers
      state.questions.forEach(question => {
        question.answers.forEach(answer => {
          answer.active = false;
        });
      });
    },
  },
});

Vue.component('quiz-item', {
  props: ['question', 'answers', 'id'],
  template:
    '<div :data-question-id="id" class="quiz--item"><quiz-item-question :question="question"></quiz-item-question><quiz-item-answers :questionId="id"  :answers="answers"></quiz-item-answers></div>',
});

Vue.component('quiz-item-question', {
  props: ['question'],
  template: '<h2>{{ question }}</h2>',
});

Vue.component('quiz-item-answers', {
  props: ['answers', 'questionId'],
  template:
    '<div class="quiz--options"><quiz-item-answers-option v-for="answer in answers" :answer="answer"  :questionId="questionId"></quiz-item-answers-option></div>',
});

Vue.component('quiz-item-answers-option', {
  props: ['answer', 'questionId'],
  template:
    '<button :class="{isActive : answer.active}" @click="optionClicked" class="quiz--option">{{ answer.label }}</button>',
  methods: {
    optionClicked() {
      if (this.answer.active) {
        // if this answer is already active, make it inactive
        store.dispatch('deactivateAnswer', {
          label: this.answer.label,
          value: this.answer.value,
          questionId: this.questionId,
        });
      } else {
        // the answer is not active, we need to check if there
        // is already an active answer in this group
        store.dispatch('checkOtherAnswers', {
          value: this.answer.value,
          questionId: this.questionId,
        });
        store.dispatch('activateAnswer', {
          label: this.answer.label,
          value: this.answer.value,
          questionId: this.questionId,
        });
        // scroll to next question

        // check if there is another question
        if (
          document.querySelector(
            '[data-question-id="' + (this.questionId + 1) + '"]',
          )
        ) {
          scrollTo(
            document.documentElement,
            document.querySelector(
              '[data-question-id="' + (this.questionId + 1) + '"]',
            ).offsetTop,
            600,
          );
        } else {
          // else scroll to results

          setTimeout(function() {
            scrollTo(
              document.documentElement,
              document.querySelector('#result').offsetTop,
              600,
            );
          }, 200);
        }
      }
    },
  },
});

Vue.component('quiz-reset', {
  template: '<div class="quiz-reset" @click="reset">Retake Quiz</div>',
  methods: {
    reset() {
      store.dispatch('resetQuiz');
      scrollTo(
        document.documentElement,
        document.querySelector('#beginning').offsetTop,
        400,
      );
    },
  },
});

var app = new Vue({
  el: '#quiz-app',
  store,
  computed: {
    questions() {
      return this.$store.state.questions;
    },
    totals() {
      return this.$store.state.totals;
    },
    results() {
      return this.$store.state.results;
    },
    questionsAnswered() {
      var answered =
        this.totals.classic +
        this.totals.buff +
        this.totals.hoagie +
        this.totals.wiz;

      return answered == this.questions.length;
    },
    findTotal() {
      var localTotals = this.totals;
      // convert totals object to array
      var arr = Object.keys(localTotals).map(function(key) {
        return localTotals[key];
      });

      // find the index of the highest total
      var indexOfMaxValue = arr.reduce(
        (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
        0,
      );

      return indexOfMaxValue;
    },
  },
});

function scrollAnchors(e) {
  var respond =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var distanceToTop = function distanceToTop(el) {
    return Math.floor(el.getBoundingClientRect().top);
  };

  e.preventDefault();
  var targetID = respond
    ? respond.getAttribute('href')
    : this.getAttribute('href');
  var targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  var originalTop = distanceToTop(targetAnchor);
  window.scrollBy({
    top: originalTop,
    left: 0,
    behavior: 'smooth',
  });
  var checkIfDone = setInterval(function() {
    var atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = (difference / duration) * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

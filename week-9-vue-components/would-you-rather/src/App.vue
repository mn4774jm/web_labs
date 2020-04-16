
<template>

  <div id="app">
<!--    loop through data for each question -->
    <WouldYouRather v-for="question in questions" v-bind:key="question.id"
      v-bind:id="id"
      v-bind:question="question"
      v-bind:answer1="answer1"
      v-bind:answer2="answer2"
      v-on:answer-changed="answerChanged"
    ></WouldYouRather>
<!--    header and list for user answers-->
    <h1>Would you Rather...</h1>
<ul id="answerList"></ul>
  </div>

</template>

<script>
  // import component file(s)
import WouldYouRather from './components/WouldYouRather.vue'

export default {
  name: 'app',
  // data function and new list to hold user answer selections
  data() {
    return {
      answers: [],
      questions: [{
        id:0,
        question: '...be a master at drawing or be an amazing singer?',
        answer1: "Drawing",
        answer2: "Singing",
      },
        {
          id:1,
          question: '...be a wizard or a superhero?',
          answer1: 'Be a wizard',
          answer2: 'Be a superhero'
        },
        {
          id:2,
          question: '... work alone on a school project or work with others on a school project?',
          answer1: 'Alone',
          answer2: 'Group project'
        }
      ]
    }
  },
  // props to pass information child
  props: {
    id: String,
    question: String,
    answer1: String,
    answer2: String
  },
  // call for component
  components: {
    WouldYouRather
  },
  methods: {
    // pass user id, and user choice as answer
    // get list item using id as key
    answerChanged(id, answer) {
      this.answers[id] = answer
      this.buildList()
    },
    buildList() {
      // find element
      let list = document.getElementById('answerList');
      list.innerHTML = '';
      // loop through answers and update list after each change
      this.answers.forEach(function(answer) {
        let listItem = document.createElement('li');
        listItem.innerHTML = answer;
        list.appendChild(listItem)
      })
    }
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>

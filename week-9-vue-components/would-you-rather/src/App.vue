
<template>

  <div id="app">
<!--    loop through data for each question -->
    <WouldYouRather v-for="question in questions" v-bind:key="question.id"
      v-bind:id="id"
      v-bind:question="question"
      v-on:answer-changed="answerChanged"
    ></WouldYouRather>
<!--    header and list for user answers-->
    <h1>Would you Rather...</h1>
<ul id="answerList"></ul>
<!--      loop through each user answer to display in list.-->
<!--      v-show is used with conditional logic to make sure that only user selections are shown -->
    <li v-for="answer in answers"
        v-show="answer && answer.length >0">
      {{ answer }}
    </li>
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
  // props to pass information to child
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
      // call for the answer changed method in wouldyourather.vue. passing id and the users choice
    answerChanged(id, answer) {
        // when entering JS into data in vue getters and setters are automatically generated meaning that they are
        // not automatically reactive. reactive properties are added by using $set
        this.$set(this.answers, id, answer)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

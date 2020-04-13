<template>
  <div id="app">
    <WouldYouRather></WouldYouRather>
  </div>

</template>

<script>
import WouldYouRather from './components/WouldYouRather.vue'

export default {
  name: 'app',
  data() {
    return {
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
  components: {
    WouldYouRather
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

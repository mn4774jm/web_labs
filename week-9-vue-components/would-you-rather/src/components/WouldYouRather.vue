<template>
    <div class="question">
<!--        write template here-->
        <h1>Would you Rather...</h1>
<!--        create buttons for each questions answer options. When button it clicked answerCHanged is called passing the question id and choice selected-->
        <h2>{{ question.question }}</h2>
        <input type="radio" v-model="choice" v-bind:value="question.answer1" v-on:change="answerChanged(question.id, choice)">
        <label>{{ question.answer1 }}</label>
        <input type="radio" v-model="choice" v-bind:value="question.answer2" v-on:change="answerChanged(question.id, choice)">
        <label>{{ question.answer2 }}</label>
    </div>
</template>

<script>
    // create and export component here
    export default {
        name: "WouldYouRather",

    data() {
      return {
          // default answer for question
          choice: ''
      }
    },
        // comes from the parent (App.vue). If changed in parent, will be reflected here
        props: {
        question: Object,
        },
    methods: {
            // emits the evnt to the parent, to trigger the v-on in the App.vue template
        answerChanged(id, choice) {
        this.$emit('answer-changed', id, choice)
        }
    }
    }

</script>

<style>
    .question{
        background-color: cyan;
    }
</style>
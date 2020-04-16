<template>
    <div class="question">
<!--        write template here-->
        <h3>Would you Rather...</h3>

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
          choice: ''
      }
    },
        props: {
        question: Object,
        },
    methods: {
        answerChanged(id, choice) {
        this.$emit('answer-changed', id, choice)
        }
    }
    }

</script>

<style>

</style>
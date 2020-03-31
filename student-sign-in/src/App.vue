<template>
  <div id="app">

    <NewStudentForm></NewStudentForm>
    <StudentTable></StudentTable>
    <StudentMessage></StudentMessage>
  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from "./components/StudentTable.vue";
import StudentMessage from "./components/StudentMessage.vue";

export default {
  name: 'App',
  components: {
    NewStudentForm,
    StudentTable,
    StudentMessage
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

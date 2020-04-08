<template>
  <div id="app">

    <NewStudentForm v-on:student-added="newStudentAdded"></NewStudentForm>
    <StudentTable v-bind:students="students" v-on:student-present="studentArrivedOrLeft"></StudentTable>
    <StudentMessage v-bind:message="message" v-bind:name="name"></StudentMessage>
  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from "./components/StudentTable.vue";
import StudentMessage from "./components/StudentMessage.vue";

export default {
  name: 'App',
  data()  {
    return  {
      students:  [],
      message: '',
      name: ''
    }
  },
  components: {
    NewStudentForm,
    StudentTable,
    StudentMessage
  },
  methods:  {
    newStudentAdded(student)  {
      this.students.push(student)
      this.students.sort(function(s1, s2) {
        return s1.name.toLowerCase() > s2.name.toLowerCase() ? -1 : 1
      })
    },
    studentArrivedOrLeft(student) {
      this.message = student.present ? 'Welcome, ' : 'Goodbye, '
      this.name = student.name
    }
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*!*text-align: center;*!*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>

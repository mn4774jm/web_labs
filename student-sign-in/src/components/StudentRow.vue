<template>
    <tr v-bind:class="'present-' + student.present">
        <td>{{ student.name }}</td>
        <td>{{ student.starID }}</td>
        <td><input type="checkbox" v-model="student.present" v-on:change="checked(student)"></td>
    </tr>
</template>

<script>
    export default {
        name: "StudentRow",
        props: {
            student: Object
        },
        methods: {
            checked(student) {
                this.$emit('student-present', student)
            }
        }
    }
</script>

<style>
    /*TODO*/
    /*  */
    .present-true {
        color: gray;
        font-style: italic;
    }
    .present-false {
        font-weight: bold;
    }

</style>
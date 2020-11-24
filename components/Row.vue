<template>
    <tr>
        <td>{{ course.id }}</td>
        <td>{{ course.name }}</td>
        <td>{{ course.description }}</td>
        <td>{{ course.price }}</td>
        <td>{{ course.date }}</td>
        <td>
            <i 
                class="material-icons delete clickable"
                :title="`Удалить курс '${course.name}'`"
                @click="toDelete"
            >
                delete
            </i>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'Row',
        props: {
            course: Object
        },
        methods: {
            toDelete () {
                this.$store.commit('SET_DELETING_COURSE', this.course)
            }
        }
    }
</script>

<style>
.delete {
    color: #FF1744;
}
.clickable {
    cursor: pointer;
    opacity: .7;
}
.clickable:HOVER {
    opacity: 1;
}

</style>
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
        }
    }
</script>

<style scoped>
.delete {
    color: #B71C1C;
}
.clickable {
    cursor: pointer;
    opacity: .7;
}
.clickable:HOVER {
    opacity: 1;
}

</style>
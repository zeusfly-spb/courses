<template>
    <tr>
        <td>{{ course.id }}</td>
        <td>{{ course.name }}</td>
        <td>{{ course.description }}</td>
        <td>{{ course.price }}</td>
        <td>{{ course.date }}</td>
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

</style>
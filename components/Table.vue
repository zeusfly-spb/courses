<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Дата начала</th>
                </tr>
            </thead>
            <tbody>
                <Row 
                    v-for="item in courses"
                    :key="item.id"
                    :course=item
                />
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Table',
        computed: {
            courses () {
                return this.$store.state.courses
            }
        },
        created () {
            this.$store.commit('SET_COURSES')
        }      
    }
</script>

<style>
    table {
        border-collapse: collapse;
        width: 1200px;
        border: 1px solid grey;
    } 
    th {
        border: 1px solid grey;
    }
    td {
        border: 1px solid grey;
    }
</style>
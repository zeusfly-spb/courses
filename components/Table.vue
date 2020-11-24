<template>
    <div>
        <div
            class="activator"
        >
            <button
                title="Добавить курс"
                @click=showPanel
            >
                Добавить
            </button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Дата начала</th>
                    <th>Действия</th>
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
        <Dialog
            v-show="panel"
            @close="hidePanel"
        />
        <Confirm
            v-show="confirm"
        />
    </div>
</template>

<script>
    export default {
        name: 'Table',
        data: () => ({
            panel: false
        }),
        computed: {
            confirm () {
                return !!this.deletingCourse
            },
            deletingCourse () {
                return this.$store.state.deletingCourse
            },
            courses () {
                return this.$store.state.courses
            }
        },
        methods: {
            showPanel () {
                this.panel = true
            },
            hidePanel () {
                this.panel = false
            }
        },
        created () {
            this.$store.commit('SET_COURSES')
        }      
    }
</script>

<style>
    .activator {
        display: flex;
        width: 100%;
        margin-bottom: 1em;
    }
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
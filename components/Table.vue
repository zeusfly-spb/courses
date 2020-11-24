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
            <div>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Цена <SortIcon field="price"/></th>
                    <th>Дата начала <SortIcon field="date"/></th>
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
        computed: {
            panel () {
                return this.$store.state.panel
            },
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
                this.$store.commit('SET_PANEL_VALUE', true)
                // this.panel = true
            },
            hidePanel () {
                this.$store.commit('SET_PANEL_VALUE', false)
                // this.panel = false
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
        justify-content: space-between;
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
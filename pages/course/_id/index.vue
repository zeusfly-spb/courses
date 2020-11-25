<template>
    <div class="container">
        <div
            class="info"
        >
            <div
                class="data"
            >
                Название: 
                <span
                    class="field clickable"
                    @click="toggleEdit('name')"
                >
                    {{ course && course.name || ''}} 
                </span>
            </div>
            <div
                class="data"
            >
                Описание:
                <span
                    class="field clickable"
                    @click="toggleEdit('description')"
                >
                    {{ course && course.description || ''}}
                </span>
            </div>
            <div
                class="data"
            >
                Цена:
                <span
                    class="field clickable"
                    @click="toggleEdit('price')"
                >
                    {{ course && course.price || ''}}
                </span> 
            </div>
            <div
                class="data"
            >
                Дата начала:
                <span
                    class="field clickable"
                    @click="toggleEdit('date')"
                >
                    {{ course && course.date || ''}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Course',
        data: () => ({
            edit: {
                name: false,
                description: false,
                price: false,
                date: false
            }
        }),
        computed: {
            id () {
                return this.$route.params.id
            },
            course () {
                return this.$store.state.courses.find(item => +item.id === +this.id)
            },
            courses () {
                return this.$store.state.courses
            }
        },
        methods: {
            cancelEdit () {
                for (let key in this.edit) {
                    this.edit[key] = false
                }
            },
            toggleEdit (field) {
                this.edit[field] = !this.edit[field]
                console.log(field)
                console.dir(this.edit)
                if (this.edit[field]) {
                    for (let key in this.edit) {
                        key !== field ? this.edit[key] = false : null
                    }
                }
            }
        },
        watch: {
            courses (val) {
                if (!val) {
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style>
    .field {
        color: #2962FF;        
    }
    .data {
        margin: .5em;        
    }
    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #E3F2FD;
        width: 60em;
        height: 30em;
    }
    .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
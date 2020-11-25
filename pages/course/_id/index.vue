<template>
    <div class="container">
        <div
            class="back"
        >
            <i 
                class="material-icons clickable"
                title="В общий список"
                @click="$router.push('/')"
            >
                keyboard_backspace
            </i>
        </div>
        <div
            class="info"
        >
            <div
                class="data"
            >
                Название: 
                <span
                    class="field"
                >
                    {{ course && course.name || ''}} 
                </span>
            </div>
            <div
                class="data"
            >
                Описание:
                <span
                    class="field"
                >
                    {{ course && course.description || ''}}
                </span>
            </div>
            <div
                class="data"
            >
                Цена:
                <span
                    class="field"
                >
                    {{ course && course.price || ''}}
                </span> 
            </div>
            <div
                class="data"
            >
                Дата начала:
                <span
                    class="field"
                >
                    {{ course && course.date || ''}}
                </span>
            </div>
            <div>
                <button
                    @click="showDialog"
                >
                    Редактировать
                </button>
            </div>
        </div>
        <Dialog
            :course="course"
            v-show="dialog"
            @close="hideDialog"
        />

    </div>
</template>

<script>
    export default {
        name: 'Course',
        data: () => ({
            dialog: false,
            
        }),
        computed: {
            id () {
                return this.$route.params.id
            },
            courses () {
                return this.$store.state.courses
            },
            course () {
                return this.$store.state.courses.find(item => +item.id === +this.id)
            }
        },
        methods: {
            showDialog () {
                this.dialog = true
            },
            hideDialog () {
                this.dialog = false
            }
        },
        created () {
            if (!this.courses.length) {
                this.$store.commit('SET_COURSES')
            }
        }
    }
</script>

<style>
    .back {
        border-radius: .3em;
        color: white;
        position: fixed;
        top: 1em;
        left: 1em;
        background-color: #4AAE9B;
    }
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
        width: 90em;
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
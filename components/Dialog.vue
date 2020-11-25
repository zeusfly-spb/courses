<template>
 <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          :class="{'update-header' : course, 'modal-header': !course}"
        >
            {{ course ? 'Редактирование курса' : 'Добавление курса' }}
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          Название <input type="text" v-model="name"> 
          Описание <input type="text" v-model="description">
          Цена <input type="number" v-model="price">
          Дата начала <input type="date" v-model="date">
        </section>
        <footer class="modal-footer">
            <div>
                <button
                    type="button"
                    class="btn-white"
                    @click="close"
                >
                    Отмена
                </button>
                <button
                    v-if="!course"
                    type="button"
                    class="btn-green"
                    :disabled="!valid"
                    @click="addCourse"
                >
                    Добавить
                </button>
                <button
                    v-if="course"
                    type="button"
                    class="btn-blue"
                    :disabled="!valid"
                    @click="updateCourse"
                >
                    Сохранить
                </button>
            </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'Dialog',
        props: {
          course: Object
        },
        data: () => ({
            name: '',
            description: '',
            price: 0,
            date: ''
        }),
        computed: {
          panel () {
            return this.$store.state.panel
          },
          filedsValid () {
            return {
              name: this.name.length > 0,
              description: this.description.length > 0,
              price: this.price > 0,
              date: !!this.date
            }
          },
          valid () {
            return Object.values(this.filedsValid).every(item => !!item)
          }
        },
        methods: {
            updateCourse () {
              const updated = {
                name: this.name,
                description: this.description,
                price: this.price,
                date: this.date,
                id: this.course.id
              }
              this.$store.commit('UPDATE_COURSE', updated)
              this.close()
            },
            resetInputs () {
              [this.name, this.description, this.price, this.date] = ['', '', 0, this.$moment(new Date()).format('YYYY-MM-DD')]
            },
            nextId () {
                const exists = this.$store.state.courses.map(course => +course.id)
                return exists.length && exists[exists.length - 1] && exists[exists.length - 1] + 1 || 1
            },
            close () {
                this.$emit('close')
            },
            addCourse () {
                this.$store.commit('ADD_COURSE', {
                    id: this.nextId(),
                    name: this.name,
                    description: this.description,
                    price: this.price,
                    date: this.date
                })
                this.close()
            }
        },
        created () {
            this.date = this.$moment(new Date()).format('YYYY-MM-DD')
        },
        mounted () {
          if (this.course) {
            this.name = this.course.name
            this.description = this.course.description
            this.price = this.course.price
            this.date = this.course.date
          }
        },
        watch: {
          panel (val) {
            !val ? this.resetInputs() : null
          }
        }
    }
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    border-radius: .3em;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .update-header {
      background-color:  blue;
      border-bottom: 1px solid #eeeeee;
      color: white;
      justify-content: space-between;
  }

  .modal-header {
    background-color:  #4AAE9B;
    border-bottom: 1px solid #eeeeee;
    color: white;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  .btn-blue {
      color: white;
      background: blue;
      border: 1px solid #4AAE9B;
      border-radius: 2px;
   }

  .btn-white {
    color: black;
    background: white;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
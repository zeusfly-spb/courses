<template>
 <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
        >
            Удаление курса
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          Удалить курс '{{ deletingCourse && deletingCourse.name || ''}}'?         
        </section>
        <footer class="modal-footer">
            <div>
                <button
                    type="button"
                    class="btn-white"
                    @click="cancel"
                >
                    Отмена
                </button>
                <button
                    type="button"
                    class="btn-red"
                    @click="deleteCourse"
                >
                    Удалить
                </button>
            </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'Confirm',
        computed: {
          deletingCourse () {
            return this.$store.state.deletingCourse
          }
        },
        methods: {
          deleteCourse () {
            this.$store.commit('DELETE_COURSE')
          },
          cancel () {
            this.$store.commit('SET_DELETING_COURSE', null)
          }
        },
        created () {
            this.date = this.$moment(new Date()).format('YYYY-MM-DD')
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

  .modal-header {
    background-color:  #FF1744;
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

  .btn-red {
    color: white;
    background: #FF1744;
    border: 1px solid #FF1744;
    border-radius: 2px;
  }

  .btn-white {
    color: black;
    background: white;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
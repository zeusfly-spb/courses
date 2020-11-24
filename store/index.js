const courses = require('../courses.json')

export const state = () => {
    courses: []
}

export const mutations = {
    DELETE_COURSE (state, id) {
        state.courses = state.courses.filter(course => +course.id !== +id)
    },
    ADD_COURSE (state, course) {
        state.courses.push(course)
    },
    SET_COURSES (state) {
        state.courses = courses
    }
}
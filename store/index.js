const courses = require('../courses.json')

export const state = () => {
    courses: []
}

export const mutations = {
    ADD_COURSE (state, course) {
        state.courses.push(course)
    },
    SET_COURSES (state) {
        state.courses = courses
    }
}
const courses = require('../courses.json')

export const state = () => {
    courses: []
}

export const mutations = {
    SET_COURSES (state) {
        state.courses = courses
    }
}
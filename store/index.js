const courses = require('../courses.json')

export const state = {
    courses: [],
    deletingCourse: null
}

export const mutations = {
    SET_DELETING_COURSE (state, course) {
        state.deletingCourse = course
    },
    DELETE_COURSE (state) {
        if (!state.deletingCourse) {
            return
        }
        state.courses = state.courses.filter(course => +course.id !== +state.deletingCourse.id)
        state.deletingCourse = null
    },
    ADD_COURSE (state, course) {
        state.courses.push(course)
    },
    SET_COURSES (state) {
        state.courses = courses
    }
}
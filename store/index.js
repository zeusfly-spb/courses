const courses = require('../courses.json')

export const state = {
    courses: [],
    deletingCourse: null
}

export const mutations = {
    SORT_BY_PRICE_DOWN (state) {
        const priceReduce = (a, b) => a.price - b.price
        state.courses.sort(priceReduce)
    },
    SORT_BY_PRICE_UP (state) {
        const priceIncrease = (a, b) => b.price - a.price
        state.courses.sort(priceIncrease)
    },
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
import Vue from 'vue'
import Vuex from 'vuex'
import TextNote from '../models/TextNote'
import userState from './UserState'

Vue.use(Vuex)

const initialState = new TextNote({
    id: 'first_id',
    title: 'First note'
})
console.log(initialState)
export default new Vuex.Store({
    modules: {
        userState
    },
    state: {
        notes: [initialState],
        isLoading: false,
        errorMessage: '',
        darkTheme: false
    },
    getters: {
        notes(state) { return state.notes },
        isLoading(state) { return state.isLoading },
        errorMessage(state) { return state.errorMessage },
        darkTheme(state) { return state.darkTheme }
    },
    mutations: {
        addNote(state, note) { state.notes.push(note) },
        setLoading(state, isLoading) { state.isLoading = isLoading },
        setErrorMessage(state, message) { state.errorMessage = message },
        setDarkTheme(state, val) { state.darkTheme = val }
    },
    actions: {
        addNote({commit}, note) {
            console.log("Vuex-Action addNote", note)
            commit('addNote', note)
        },
        setLoading({commit}, isLoading) {
            commit('setLoading', isLoading)
        },
        setErrorMessage({commit}, message) {
            commit('setErrorMessage', message)
        }
    }
});
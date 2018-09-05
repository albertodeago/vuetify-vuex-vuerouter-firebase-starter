<template>
  <v-container fluid>

      <v-layout column>

        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              
              <v-list>
                <template v-for="(note, index) in notes">

                  <v-list-tile :key="note.id" @click="openNote(note)">
                    <v-list-tile-action @click.stop="toggleFavorite(note)">
                      <v-icon v-if="note.favorite" color="amber darken-1">star</v-icon>
                      <v-icon v-else>star</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-text="note.title"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-icon>{{ note.iconType }}</v-icon>
                    </v-list-tile-action>

                  </v-list-tile>
                  
                  <v-divider v-if="index + 1 < notes.length" :key="index"></v-divider>

                </template>
              </v-list>
              
            </v-card>
          </v-flex>
        </v-layout>

        <router-link to="/signIn">sign in</router-link>
        <router-link to="/signUp">sign up</router-link>

        <v-speed-dial v-model="fab" bottom right fixed direction='top' transition='slide-y-reverse-transition'>
          
          <v-btn slot="activator" v-model="fab" fab>
            <v-icon>add</v-icon>
            <v-icon>close</v-icon>
          </v-btn>

          <v-btn fab @click="onAddClick(NOTE_TYPES.TODO)">
            <v-icon>list_alt</v-icon>
          </v-btn>

          <v-btn fab @click="onAddClick(NOTE_TYPES.TEXT)">
            <v-icon>note</v-icon>
          </v-btn>

        </v-speed-dial>

      </v-layout>
  </v-container>
</template>

<script>
import { NOTE_TYPES, TodoNote, TextNote } from '../models/'
import Utils from '../Utils'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NotesList',
  data() {
    return {
      fab: false,
      NOTE_TYPES: NOTE_TYPES
    }
  },
  computed: {
    ...mapGetters({
      notes: 'notes'
    })
  },
  methods: {
    ...mapActions({
      addNote: 'addNote'
    }),

    openNote(note) {
      this.$router.push('/note/' + note.id); //{ name: 'noteDetail', params: { id: note.id }})
      console.log("OPEN NOTE", note.id)
    },

    onAddClick(type) {

      if(type === NOTE_TYPES.TODO) 
        this.addNote(new TodoNote({ id: Utils.getRandomString() }))
      if(type === NOTE_TYPES.TEXT)
        this.addNote(new TextNote({ id: Utils.getRandomString() }))
      
    },

    toggleFavorite(note) {
      console.log("TOGGLE FAVORITE")
      note.favorite = !note.favorite;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

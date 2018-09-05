<template>
  <v-container fluid>

    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card> 
                <!-- <v-card-title>
                    {{ note.title }}
                </v-card-title>
                <v-card-text>
                    {{ note.body }}
                </v-card-text>
                <v-card-actions>
                    <v-btn flat>Delete</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat>Share</v-btn>
                    <v-btn flat>Edit</v-btn>
                </v-card-actions> -->
            </v-card>
        </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { NOTE_TYPES, TodoNote, TextNote } from '../models/'
import Utils from '../Utils'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'NoteDetail',
    data() {
        return {
        }
    },
    mounted() {
        console.log(this, this.$route.params);
    },
    computed: {

    },
    methods: {
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

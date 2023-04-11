<template>
  <v-app-bar :color=azulPredeter height="70" app width="100vw" style="padding: 0">
    <v-container style="margin: 0; padding: 0; max-width: 100%">
      <v-row class="align-center" style="width: 100%">
        <v-col :cols="$vuetify.breakpoint.mdAndUp === true ? '2' : '3'"
          :class="$vuetify.breakpoint.mdAndUp === true ? '' : ''">
          <router-link to="/" v-if="!loggedIn">
            <v-btn
              text style="box-shadow: none !important">
              <img :src="require('@/assets/logoTec.png')" style="max-width: 200px" class="shrink hidden-xs-only">
              <img :src="require('@/assets/logoTec.png')" style="max-width: 90px" class="shrink hidden-sm-and-up">
            </v-btn>
          </router-link>
          <router-link to="/Index" v-if="loggedIn">
            <v-btn
              text style="box-shadow: none !important">
              <img :src="require('@/assets/logoTec.png')" style="max-width: 200px" class="shrink hidden-xs-only">
              <img :src="require('@/assets/logoTec.png')" style="max-width: 90px" class="shrink hidden-sm-and-up">
            </v-btn>
          </router-link>
        </v-col>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp === true"></v-spacer>
        <v-col :cols="$vuetify.breakpoint.mdAndUp === true ? '2' : '3'"
               :class="$vuetify.breakpoint.mdAndUp === true ? 'mr-n16' : 'ml-5'">
          <router-link to="/Index">
            <v-btn text color="white"
                   :style="$vuetify.breakpoint.mdAndUp === true ? {fontSize: tamanoBtn} : {fontSize: tamanoPq} "
                   v-if="loggedIn" class="ml-16">
              INICIO</v-btn>
          </router-link>
          <router-link to="/">
            <v-btn text color="white"
                   :style="$vuetify.breakpoint.mdAndUp === true ? {fontSize: tamanoBtn} : {fontSize: tamanoPq} "
                   v-if="!loggedIn">
              INICIAR SESION</v-btn>
          </router-link>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.mdAndUp === true ? '2' : '4'"
               :class="$vuetify.breakpoint.mdAndUp === true ? 'mr-n16' : ''">
          <router-link to="/IndexMaterias">
            <v-btn text color="white"
                   :style="$vuetify.breakpoint.mdAndUp === true ? { fontSize: tamanoBtn } : {fontSize: tamanoPq}"
                   v-if="loggedIn" class="ml-n5">
              LISTA DE MATERIAS</v-btn>
          </router-link>
          <router-link to="/Register">
            <v-btn text color="white"
                   :style="$vuetify.breakpoint.mdAndUp === true ? { fontSize: tamanoBtn } : {fontSize: tamanoPq}"
                   v-if="!loggedIn">
              REGISTRARSE</v-btn>
          </router-link>
        </v-col>
        <v-col cols="1"
               :class="$vuetify.breakpoint.mdAndUp === true ? 'mr-n16 ml-n1' : 'ml-n5'" v-if="loggedIn">
          <v-btn text color="white" @click="signOut">
            <v-icon>
              mdi-arrow-left
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { eventBus } from '@/views/eventBus'
import firebase from 'firebase/compat'
export default {
  name: 'NavBar',
  data () {
    return {
      tamanoBtn: '16px',
      tamanoPq: '10px',
      paddingPredeter: '5px',
      azulPredeter: '#384FFE',
      loggedIn: false
    }
  },
  created () {
    eventBus.$on('loggedInChanged', (loggedIn) => {
      this.loggedIn = !this.loggedIn
    })
  },
  methods: {
    async signOut () {
      await firebase.auth().signOut()
        .then(() => {
          console.log('Ha cerrado sesion con exito')
          this.redirectIndex()
          this.loggedIn = !this.loggedIn
        })
        .catch((error) => {
          console.log('No se ha podido cerrar sesion: ', error)
        })
    },
    async redirectIndex () {
      await this.$router.push('/')
    }
  }
}
</script>

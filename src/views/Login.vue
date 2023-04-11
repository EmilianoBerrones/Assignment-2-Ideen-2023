<template>
  <v-container fluid>
    <v-dialog v-model="dialogUserNotFound" max-width="1000px">
      <v-card style="border-radius: 20px; padding: 30px">
        <v-card-title style="justify-content: center">
          <h1 style="font-size: xx-large">Alerta</h1>
        </v-card-title>

        <v-card-text class="texto-card" style="line-height: 55px; font-size: large">
          No se encuentra un usuario con ese correo institucional </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#384FFE"
                 style="font-size: large"
                 class="mr-9"
                 x-large
                 text @click="dialogUserNotFound = !dialogUserNotFound">REGRESAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogWrongPswd" max-width="1000px">
      <v-card style="border-radius: 20px; padding: 30px">
        <v-card-title style="justify-content: center">
          <h1 style="font-size: xx-large">Alerta</h1>
        </v-card-title>

        <v-card-text class="texto-card" style="line-height: 55px; font-size: large">
          Contraseña incorrecta. Intenta de nuevo </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#384FFE"
                 style="font-size: large"
                 class="mr-9"
                 x-large
                 text @click="dialogWrongPswd = !dialogWrongPswd">REGRESAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row>
      <v-col cols="12" style="padding: 60px">
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>INICIO DE SESION</h1>
      </v-col>
    </v-row>
    <v-row justify="center" style="margin-top: 1px;">
      <v-col cols="12" md="5">
        <v-text-field
          v-model="email"
          label="Correo institucional"
          placeholder="Ejemplo: A01234567@tec.mx"
          outlined
          color="#384FFE"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" style="margin-top: 1px;">
      <v-col cols="12" md="5">
        <v-text-field
          v-model="password"
          label="Contraseña"
          outlined
          color="#384FFE"
          type="password"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" style="margin-top: 50px">
      <v-col cols="12" md="5">
        <v-btn block color="#384FFE" style="border-radius: 10px" large @click="redirectAndSign">
          <h2 style="color:white; font-size: medium">Iniciar sesion</h2>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { eventBus } from '@/views/eventBus'
import firebase from 'firebase/compat'

export default {
  name: 'Login',
  data () {
    return {
      loggedIn: false,
      email: '',
      password: '',
      dialogWrongPswd: false,
      dialogUserNotFound: false
    }
  },
  methods: {
    toggleLoggedIn () {
      this.loggedIn = !this.loggedIn
      eventBus.$emit('loggedInChanged', this.loggedIn)
    },
    async signIn () {
      await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log('El usuario ha ingresado con exito')
          this.toggleLoggedIn()
        })
        .catch((error) => {
          console.log('El usuario no ha ingresado con exito')
          // ['code', 'customData', 'name']
          console.log(error.code)
          // auth/wrong-password
          // auth/user-not-found
          if (error.code === 'auth/user-not-found') {
            this.dialogUserNotFound = !this.dialogUserNotFound
          }
          if (error.code === 'auth/wrong-password') {
            this.dialogWrongPswd = !this.dialogWrongPswd
          }
        })
    },
    async redirectIndex () {
      if (this.loggedIn) {
        await this.$router.push('/Index')
      }
    },
    async redirectAndSign () {
      await this.signIn()
      await this.redirectIndex()
    }
  }
}
</script>

<style>
h1 {
  font-size: 45px;
  color: #384FFE;
}
</style>

<template>
<v-container dense>
  <v-dialog v-model="showDialog" max-width="1000px">
    <v-card style="border-radius: 20px; padding: 30px">
      <v-card-title style="justify-content: center">
        <h1 style="font-size: xx-large">Registro</h1>
      </v-card-title>

      <v-card-text class="texto-card" style="line-height: 55px; font-size: large">
        El usuario ha sido creado exitosamente </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <router-link to="/">
          <v-btn color="#384FFE"
                 style="font-size: large"
                 class="mr-9"
                 x-large
                 text @click="showDialog=!showDialog">INICIAR SESION
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-row class="text-center">
    <v-col cols="12">
      <h1>CREA UNA CUENTA</h1>
    </v-col>
  </v-row>
  <v-row justify="center" style="margin-top: 0;" dense>
    <v-col cols="12" md="5">
      <v-text-field
        v-model="userName"
        label="Nombre completo"
        outlined
        color="#384FFE"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row justify="center" style="margin-top: 0;" dense>
    <v-col cols="12" md="5">
      <v-text-field
        v-model="studentId"
        label="Matricula"
        outlined
        color="#384FFE"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row justify="center" style="margin-top: 0;" dense>
    <v-col cols="12" md="5">
      <v-text-field
        v-model="institutionalEmail"
        label="Correo institucional"
        placeholder="Ejemplo: a01234567@tec.mx"
        :rules="emailRule"
        outlined
        color="#384FFE"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row justify="center" style="margin-top: 0;" dense>
    <v-col cols="12" md="5">
      <v-text-field
        v-model="personalEmail"
        label="Correo personal"
        placeholder="alguien@ejemplo.com"
        :rules="emailRule"
        outlined
        color="#384FFE"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row justify="center" style="margin-top: 0;" dense>
    <v-col cols="12" md="5">
      <v-text-field
        v-model="password1"
        label="Contraseña"
        type="password"
        outlined
        color="#384FFE"
        :rules="passwordLength"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row justify="center" style="margin-top: 0;" dense>
    <v-col cols="12" md="5">
      <v-text-field
        v-model="password2"
        type="password"
        label="Confirmar contraseña"
        outlined
        color="#384FFE"
        :rules="passwordLength"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row v-if="!passwordMatch" justify="center" style="margin-top: 0" dense>
    <v-col cols="12" md="5" style="color: red">
      Las contraseñas no coinciden
    </v-col>
  </v-row>
  <v-row justify="center" dense style="margin-top: 0">
    <v-col cols="12" md="2">
      <v-checkbox v-model="acceptTerms" label="Acepto terminos y condiciones" color="#384FFE"></v-checkbox>
    </v-col>
  </v-row>
  <v-row justify="center" style="margin-top: 50px" dense>
    <v-col cols="12" md="5">
      <v-btn block color="#384FFE" style="border-radius: 10px" large @click="register" :disabled="!acceptTerms">
        <h2 style="color:white; font-size: medium">Registrarse</h2>
      </v-btn>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import firebase from 'firebase/compat'

export default {
  name: 'Register',
  data () {
    return {
      acceptTerms: '',
      showDialog: false,
      // Info personal
      userName: '',
      studentId: '',
      personalEmail: '',
      // Info para el auth
      password1: '',
      institutionalEmail: '',
      // Info adicional
      password2: '',
      // Reglas
      passwordLength: [
        value => value.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
      ],
      emailRule: [
        value => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          return pattern.test(value) || 'El correo electrónico no es válido'
        }
      ]
    }
  },
  methods: {
    async register () {
      firebase.auth().createUserWithEmailAndPassword(this.institutionalEmail, this.password1)
        .then((result) => {
          console.log('El usuario se ha creado con exito. UID de ' + result.user.uid)
          this.registerDatabase(result.user.uid)
          this.showDialog = !this.showDialog
        })
        .catch(() => {
          console.log('El usuario no se pudo crear exitosamente.')
        })
    },
    async registerDatabase (userUID) {
      await firebase.firestore().collection('users').doc(userUID).set({
        nombre: this.userName,
        matricula: this.studentId,
        correoPersonal: this.personalEmail
      })
        .then(() => {
          console.log('Informacion a la base de datos agregada correctamente')
        })
        .catch((error) => {
          console.log('Error al agregar informacion: ', error)
        })
    }
  },
  computed: {
    passwordMatch () {
      return this.password1 === this.password2
    }
  }
}
</script>

<style scoped>

</style>

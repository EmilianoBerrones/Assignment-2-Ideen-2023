<template>
  <v-container fluid>
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <h1 :style="$vuetify.breakpoint.mdAndUp === true ? 'font-size: 45px' : 'font-size: 30px'">
          INFORMACIÓN DEL ALUMNO
        </h1>
      </v-col>
      <v-col cols="12">
        <v-btn x-large text disabled height="200px">
          <v-img :src="imageURL" alt='imagen' style="border-radius: 50%; width: 200px"/>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-left" justify="center">
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto' "
             md="4">
        Nombre completo
        <p>{{userName}}</p>
      </v-col>
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto'"
             md="1">
        Matrícula
        <p>{{studentId}}</p>
      </v-col>
    </v-row>
    <v-row class="text-left" justify="center">
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto'"
             md="4">
        Correo institucional
        <p>{{institutionalEmail}}</p>
      </v-col>
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto'"
             md="1">
        Carrera
        <p>ITC</p>
      </v-col>
    </v-row>
    <v-row class="text-left" justify="center">
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto'"
             md="4">
        Correo personal
        <p>{{personalEmail}}</p>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>

import firebase from 'firebase/compat'

export default {
  name: 'Index',
  created () {
    this.getInfo()
  },
  data () {
    return {
      userName: '',
      studentId: '',
      personalEmail: '',
      institutionalEmail: '',
      imageURL: ''
    }
  },
  methods: {
    async getInfo () {
      const userUID = firebase.auth().currentUser.uid
      await firebase.firestore().collection('users').doc(userUID).get()
        .then((doc) => {
          if (doc.exists) {
            this.userName = doc.data().nombre
            this.studentId = doc.data().matricula
            this.personalEmail = doc.data().correoPersonal
            this.institutionalEmail = firebase.auth().currentUser.email
          } else {
            console.log('El documento no existe')
          }
        })
        .catch((error) => {
          console.log('Error al obtener el documento: ', error)
        })
      const imageRef = firebase.storage().ref().child('imgyo1.png')
      imageRef
        .getDownloadURL()
        .then(url => {
          this.imageURL = url
        })
        .catch(error => {
          console.log('Error al obtener la URL de descarga de la imagen:', error)
        })
    }
  }
}
</script>

<style>
.texto-contenido {
  font-size: 27px;
  color: #384FFE;
}

p {
  color: #787C9D;
}

h1 {
  font-size: 45px;
  color: #384FFE;
}

.centrar-texto {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

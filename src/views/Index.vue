<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 :style="$vuetify.breakpoint.mdAndUp === true ? 'font-size: 45px' : 'font-size: 30px'">
          INFORMACIÓN DEL ALUMNO
        </h1>
      </v-col>
      <v-col cols="12">
        <img :src="require('@/assets/juan-escutia2.jpeg')" alt="Logo" style="border-radius: 50%">
      </v-col>
    </v-row>
    <v-row class="text-left" justify="center">
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto' "
             md="4">
        Nombre completo
        <p>Juan Escutia</p>
      </v-col>
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto'"
             md="1">
        Matrícula
        <p>A01361234</p>
      </v-col>
    </v-row>
    <v-row class="text-left" justify="center">
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto'"
             md="4">
        Correo institucional
        <p>A01361234@tec.mx</p>
      </v-col>
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto'"
             md="1">
        Carrera
        <p>ISC</p>
      </v-col>
    </v-row>
    <v-row class="text-left" justify="center">
      <v-col cols="12"
             :class="$vuetify.breakpoint.mdAndUp === true ? 'texto-contenido' : 'texto-contenido centrar-texto'"
             md="4">
        Correo personal
        <p> murioporlapatria@gmail.com</p>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Index'
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

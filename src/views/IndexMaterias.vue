<template>
  <v-container fluid>
    <v-dialog v-model="showDialog" max-width="1000px">
      <v-card style="border-radius: 20px; padding: 30px">
        <v-card-title style="justify-content: center">
          <h1 style="font-size: xx-large">Titulo de la materia</h1>
        </v-card-title>

        <v-card-text class="texto-card" style="line-height: 55px">
          Profesor: Cristiano Ronaldo <br>
          Salon: La congeladora <br>
          Días: Lunes, Miercoles & Viernes <br>
          Horario: 7:00 - 9:00 <br> <br> </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#384FFE"
                 style="font-size: large"
                 class="mr-9"
                 x-large
                 text
                 @click="showDialog = !showDialog">CERRAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row class="text-center">
      <v-col cols="12">
        <h1 :style="{ color:azulPredeter, fontSize: '60px'}">MATERIAS INSCRITAS</h1>
      </v-col>
    </v-row>
    <v-row justify="center" v-for="n in 5" :key="n">
      <v-col cols="12" md="7">
        <v-card elevation="3" style="border-radius: 15px; padding: 12px">
          <v-card-title class="titulo-card">Titulo de la materia</v-card-title>
          <v-card-text class="texto-card">Profesor: Cristiano Ronaldo</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div>
              <v-btn elevation="0"
                     text
                     style="font-size: 18px; color: #384FFE"
                     @click="showDialog = !showDialog">Ver detalles
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexMaterias',
  data () {
    return {
      showDialog: false
    }
  }
}
</script>

<style>
h1 {
  color: #384FFE;
  font-size: 60px;
}

.titulo-card {
  color: #384FFE;
  font-size: 27px;
}

.texto-card {
  color: #787C9D;
  font-size: 27px;
}
</style>

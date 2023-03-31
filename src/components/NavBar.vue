<template>
  <v-app-bar :color=azulPredeter height="70" app>
    <v-container>
      <v-row>
        <v-col :cols="$vuetify.breakpoint.mdAndUp === true ? '1' : '5'"
          :class="$vuetify.breakpoint.mdAndUp === true ? 'ml-n15' : ''">
          <router-link to="/">
            <v-btn
              text style="box-shadow: none !important;">
              <img :src="require('@/assets/logoTec.png')" style="max-width: 200px" class="shrink mr-2 hidden-xs-only">
              <img :src="require('@/assets/logoTec.png')" style="max-width: 90px" class="shrink mr-2 hidden-sm-and-up">
            </v-btn>
          </router-link>
        </v-col>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp === true"></v-spacer>
        <v-col :cols="$vuetify.breakpoint.mdAndUp === true ? '1' : '2'">
          <router-link to="/">
            <v-btn text color="white"
                   :style="$vuetify.breakpoint.mdAndUp === true ? {fontSize: tamanoBtn} : {fontSize: tamanoPq} ">
              INICIO</v-btn>
          </router-link>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.mdAndUp === true ? '1' : '2'"
               class="mr-lg-15">
          <router-link to="/IndexMaterias">
            <v-btn text color="white"
                   :style="$vuetify.breakpoint.mdAndUp === true ? { fontSize: tamanoBtn } : {fontSize: tamanoPq}">
              LISTA DE MATERIAS</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      tamanoBtn: '18px',
      tamanoPq: '10px',
      azulPredeter: '#384FFE'
    }
  }
}
</script>

<style scoped>

</style>

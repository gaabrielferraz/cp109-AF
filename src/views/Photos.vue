<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 1"
        :key="n"
      >
        <template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
            <v-img
              src="../../public/photos/Foto1.png"
              height="300"
            ></v-img>
        </v-col>

        <v-col cols="6">
            <v-img
              src="../../public/photos/Foto2.png"
              height="300"
              contain
            ></v-img>
        </v-col>


      </v-row>
    </v-fade-transition>
  </v-container>
    </v-row>
  </v-container>
</template>
      </v-col>
    </v-row>
  </v-container>
</template>
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/Análise-Tenki-No-Ko.png')"
          class="my-3"
          contain
          height="200"
          position = "top"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Weathering With You
        </h1>
          <p class="subheading font-weight-regular">Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end. Amidst this seemingly eternal downpour arrives the runaway high school student Hodaka Morishima, who struggles to financially support himself—ending up with a job at a small-time publisher. At the same time, the orphaned Hina Amano also strives to find work to sustain herself and her younger brother. Both fates intertwine when Hodaka attempts to rescue Hina from shady men, deciding to run away together. Subsequently, Hodaka discovers that Hina has a strange yet astounding power: the ability to call out the sun whenever she prays for it. With Tokyo's unusual weather in mind, Hodaka sees the potential of this ability. He suggests that Hina should become a "sunshine girl"—someone who will clear the sky for people when they need it the most. Things begin looking up for them at first. However, it is common knowledge that power always comes with a hefty price...</p>
        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>


    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      
    }),
  }
</script>

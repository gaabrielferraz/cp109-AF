<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="episode in episodes"
        :key="episode.id"
        cols="12"
        sm="6"
        md="4"
      >
    <CardBar :episode="episode" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardBar from "@/components/CardBar"

export default {
  name: 'AnimeEpisodes',
  components: {
    CardBar
      }, computed: {
      episodes() {
        return this.$store.getters.getEpisodes
      }
    },created(){
    if(this.$store.getters.getEpisodes === null)
      this.$store.dispatch("fetchEpisodes");
  }
}
</script>
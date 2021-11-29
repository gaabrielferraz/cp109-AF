<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>

      <v-list-item-content>

        <v-list-item-title class="text-h5 mb-1"> {{episode.title}} </v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar size="100"> <v-img :src="episode.img"></v-img> </v-list-item-avatar>
      
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Watch
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default{
  props: ['episode']
}
</script>
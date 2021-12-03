<template>
      <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            {{animeName}}
          </v-list-item-title>
          <v-list-item-subtitle>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav> 
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Anime', icon: 'mdi-home ', route: '/home' },
          { title: 'Episodes', icon: 'mdi-view-dashboard', route: '/anime-episodes' },
          { title: 'Photos', icon: 'mdi-image',route: '/photos' },
          { title: 'Contato', icon: 'mdi-calendar-account',route: '/contato' },
        ],
        right: null,
      }
    }, computed: {
      animeName() {
        return this.$store.getters.getAnimeName
      }
    }}
</script>
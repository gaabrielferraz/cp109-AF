<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark>
      <v-toolbar-title>AnimeVue - Watch Free Animes Online</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        v-for="item in items"
        :key="item.title"
      >
        <v-btn 
          :to="item.route"
          link
          icon
        >
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-toolbar-items>

      <v-menu
        left
        bottom
      >
        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Episodes', icon: 'mdi-home ', route: '/home' },
          { title: 'Episodes', icon: 'mdi-view-dashboard', route: '/anime-episodes' },
          { title: 'Photos', icon: 'mdi-image',route: '/photos' },
          { title: 'Contato', icon: 'mdi-calendar-account',route: '/contato' },
        ]
      }
    },
  }
</script>
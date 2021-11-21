<template>
  <v-app>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >

      <v-toolbar-title>AnimeVue - Watch Free Animes Online</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

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
  
  <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Weathering With You
          </v-list-item-title>
          <v-list-item-subtitle>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
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
  <v-main>
      <router-view></router-view>
  </v-main>

  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
Here at AnimeVue you can watch any anime video for free. Feel free to browse our anime collection. You will find on our site the latest episodes in season release as well as older animes of the best quality available online. If you want to keep up to date with the newest anime releases you can watch our homepage. Under Releases you will find the latest anime episodes. We stream thousands of anime videos in HD quality. You can watch from PC, tablet and cell phone. Our site is optimized for any device.
</v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
  <v-bottom-navigation v-model="value">
    <v-btn value="recent">
      <span>Recent</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return{icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      items: [
          { title: 'Episodes', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'Description', icon: 'mdi-help-box' },
        ],
        right: null,
      }}
      
};
</script>

<template>
<div class="text-center" >
<div>
  <v-col class="mb-8">
        <h1 class="display-2 font-weight-bold mb-3">
          Contact Us
        </h1>
          <p class="subheading font-weight-regular"></p>
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
      </div>
    
    <div>
      <v-btn
        class="ma-2"
        color="primary"
        dark
      >
        Facebook
        <v-icon
          dark
          right
        >
          mdi-facebook
        </v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        color="red"
        dark
      >
        Instagram
        <v-icon
          dark
          right
        >
          mdi-instagram
        </v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        dark
      >
        <v-icon
          dark
          left
        >
          mdi-twitter
        </v-icon>Twitter
      </v-btn>
    </div>

    <div>
      <v-btn
        class="ma-2"
        color="orange darken-2"
        dark
      >
        Trabalhe conosco:
      </v-btn>

      <v-btn
        class="ma-2"
        color="purple"
        dark
      >
        <v-icon dark>
          mdi-linkedin
        </v-icon>LinkedIn
      </v-btn>     
    </div>

  
  </div>
</template>
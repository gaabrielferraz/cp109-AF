<template>
  <v-app>
    <AppBar></AppBar>
    <NavigationDrawer></NavigationDrawer>
    <Main></Main>
    <Footer></Footer>
</v-app>
</template>

<script>
import AppBar from "@/components/AppBar"
import NavigationDrawer from "@/components/NavigationDrawer"
import Footer from "@/components/Footer"
import Main from "@/components/Main"

export default {
  name: 'App',
  components: {
    AppBar,
    NavigationDrawer,
    Footer,
    Main
      },
  };
</script>

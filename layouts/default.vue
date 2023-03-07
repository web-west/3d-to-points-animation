<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn icon nuxt to="/">
        <v-icon>mdi-rocket</v-icon>
      </v-btn>
      <v-btn icon nuxt to="/about">
        <v-icon>mdi-cube</v-icon>
      </v-btn>
      <v-btn icon nuxt to="/another">
        <v-icon>mdi-sphere</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Animation/>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Animation from '~/components/Animation';
export default {
  name: "DefaultLayout",
  components: {
    Animation
  }
};
</script>

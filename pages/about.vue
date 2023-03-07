<template>
  <v-row>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AboutPage',
  computed: {
    ...mapState('routes', ['page']),
  }
}
</script>

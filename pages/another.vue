<template>
  <v-row>
    <v-col>
      <!-- {{ page }} -->
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AnotherPage',
  computed: {
    ...mapState('routes', ['page']),
  }
}
</script>

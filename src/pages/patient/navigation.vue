<template>
  <v-card>
    <v-card-title>
      <v-btn
          class="ma-2"
          tile
          color="secondary"
          :elevation="0"
          :ripple="false"
          @click="$router.push({name: 'patients'})"
      >
        <v-icon left>mdi-arrow-left</v-icon>
        Nazaj
      </v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "navigation.vue"
}
</script>

<style scoped>

</style>
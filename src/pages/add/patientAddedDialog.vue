<template>
  <v-dialog v-model="$store.state.patientAddedToggle" width="300">
    <v-card class="pa-5">
      <v-card-text class="text-center">
        <v-icon size="200" color="green" class="justify-center align-center">mdi-thumb-up</v-icon>
      </v-card-text>
      <v-card-text class="text-center">Pacient uspešno dodan!</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "patientAddedDialog"
}
</script>

<style scoped>

</style>
<template>
  <v-form>
    <v-text-field placeholder="Ime"></v-text-field>
    <v-text-field placeholder="Priimek"></v-text-field>
    <v-text-field placeholder="Datum rojstva"></v-text-field>
    <v-text-field placeholder="Tel. številka"></v-text-field>
    <v-text-field placeholder="Kraj rojstva"></v-text-field>
    <v-text-field placeholder="E-naslov"></v-text-field>
    <v-text-field placeholder="Trenutno prebivališče"></v-text-field>
    <v-select
        :items="bloodTypes"
        label="Tip krvi"
    ></v-select>

    <v-btn
        block
        color="primary"
        :ripple="false"
        @click="$store.commit('CHANGE_ADD_DIALOG')"
    >Dodaj pacienta</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "addPatient.vue",
  data() {
    return {
      bloodTypes: [
        "O+",
        "O-",
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-"
      ]
    }
  }
}
</script>

<style scoped>

</style>
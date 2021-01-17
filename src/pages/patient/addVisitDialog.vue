<template>
  <v-dialog v-model="$store.state.addVisitToggle" width="500">
    <v-card>
      <v-card-title>Dodaj nov pregled</v-card-title>

      <v-card-text>
        <v-text-field placeholder="Razlog"></v-text-field>
        <v-text-field placeholder="Najdba"></v-text-field>
        <v-text-field placeholder="Rešitev"></v-text-field>

        <v-btn block color="primary" :ripple="false" @click="addVisit">Dodaj</v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "addVisitDialog",
  methods:{
    addVisit(){
      this.$store.state.addVisitToggle = false
      this.$store.state.successAddVisit = true
    }
  }
}
</script>

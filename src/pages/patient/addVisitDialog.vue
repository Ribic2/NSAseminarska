<template>
  <v-dialog v-model="$store.state.addVisitToggle" width="500">
    <v-card>
      <v-card-title>Dodaj nov pregled</v-card-title>

      <v-card-text>
        <v-text-field placeholder="Razlog" v-model="reason"></v-text-field>
        <v-text-field placeholder="Najdba" v-model="found"></v-text-field>
        <v-text-field placeholder="Rešitev" v-model="solution"></v-text-field>

        <v-btn block color="primary" :ripple="false" @click="addVisit">Dodaj</v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "addVisitDialog",
  data(){
    return{
      reason: null,
      found: null,
      solution: null
    }
  },
  methods:{
    addVisit(){
      this.$store.state.addVisitToggle = false
      this.$store.state.successAddVisit = true

      let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

      let data = {
        "reason": this.reason,
        "found": this.found,
        "solution": this.solution,
        "time": utc
      }
      this.$store.dispatch('addVisit', data)
    }
  }
}
</script>

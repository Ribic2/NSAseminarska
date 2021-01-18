<template>
  <v-card>
    <v-card-title>Prejšni pregledi</v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">id</th>
          <th class="text-left">Zakaj</th>
          <th class="text-left">Najdba</th>
          <th class="text-left">Rešitev</th>
          <th class="text-left">Kdaj</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(visit, index) in visits" :key="index">
          <td>{{ index }}</td>
          <td>{{ visit.reason }}</td>
          <td>{{ visit.found }}</td>
          <td>{{ visit.solution }}</td>
          <td>{{ visit.time }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider></v-divider>
    <v-btn class="ma-5" color="primary" @click="$store.state.addVisitToggle = true">Dodaj</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "visits",
  computed:{
    visits(){
      return this.$store.state.visits
    }
  }
}
</script>

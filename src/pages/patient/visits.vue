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
          <td>{{ visit.why }}</td>
          <td>{{ visit.found }}</td>
          <td>{{ visit.solution }}</td>
          <td>{{ visit.when }}</td>
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
  data() {
    return {
      visits: [
        {
          why: "Bolečina v trebuhu",
          found: "rak",
          solution: "kemoterapija",
          when: "20.2.2020"
        },
      ]
    }
  }
}
</script>

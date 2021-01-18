<template>
  <v-card>
    <v-card-title>Janez Novak</v-card-title>
    <v-card-text>
      <v-card-text>Starost: 50</v-card-text>
      <v-card-text>Datum rojstva: 2.5.1970</v-card-text>
      <v-card-text>Kraj rojstva: Žužember</v-card-text>
      <v-card-text>Trenutno bivališče: Ljubljana</v-card-text>
      <v-card-title>Kontakt</v-card-title>
      <v-card-text>E-naslov: janez.novak500@gmail.com</v-card-text>
      <v-card-text>Tel. številka: 041 255 123</v-card-text>
      <v-card-text>Tip krvi: O+</v-card-text>
    </v-card-text>

    <v-card-title>Alegrije</v-card-title>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th>Alergija</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in allergies" :key="index">
            <td>{{ item }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "description",
  data() {
    return {
      allergies: ['Penicillin', 'Orehi'],
    }
  }
}
</script>

<style scoped>

</style>
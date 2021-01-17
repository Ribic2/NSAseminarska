<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <Navigation/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <description></description>
      </v-col>
      <v-col>
        <visits></visits>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Navigation from './navigation'
import Description from "@/pages/patient/description";
import Visits from "@/pages/patient/visits";

export default {
  name: "patient",
  components: {Visits, Description, Navigation},
}
</script>

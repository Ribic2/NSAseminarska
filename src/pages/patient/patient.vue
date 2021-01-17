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
    <add-visit-dialog></add-visit-dialog>
  </v-container>
</template>

<script>
import Navigation from './navigation'
import Description from "@/pages/patient/description";
import Visits from "@/pages/patient/visits";
import AddVisitDialog from "@/pages/patient/addVisitDialog";

export default {
  name: "patient",
  components: {AddVisitDialog, Visits, Description, Navigation},
}
</script>

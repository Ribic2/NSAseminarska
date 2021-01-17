<template>
    <v-container fluid>
      <patient-added-dialog></patient-added-dialog>
      <v-row>
        <v-col>
          <Navigation></Navigation>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Dodaj novega pacienta</v-card-title>
            <v-card-text>
              <add-patient></add-patient>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

</template>

<script>
import AddPatient from './addPatient'
import Navigation from '../patient/navigation'
import PatientAddedDialog from "@/pages/add/patientAddedDialog";
export default {
  name: "index.vue",
  components: {PatientAddedDialog, Navigation, AddPatient}
}
</script>

<style scoped>

</style>
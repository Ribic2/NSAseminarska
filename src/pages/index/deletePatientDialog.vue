<template>
  <v-dialog v-model="$store.state.deleteDialogToggle" width="500">
    <v-card>
      <v-card-title>Ali ste prepričani da hočete izbrisati pacienta?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="$store.commit('CHANGE_DELETE_DIALOG')">Prekini</v-btn>
        <v-btn color="error">Izbriši</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "deletePatientDialog",
}
</script>

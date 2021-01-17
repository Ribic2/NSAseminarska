<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon :ripple="false"><v-icon>mdi-hospital-building</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Zdravstveni dom Straža</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-chip
          class="ma-2"
          color="secondary"
      >
        Dobrodošel, Vid Bukovec
        <v-avatar right>
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
      </v-chip>

    </v-app-bar>


    <!-- Delete dialog -->
    <DeletePatientDialog></DeletePatientDialog>

    <v-main>
        <transition
            name="fade"
            mode="out-in"
        >
          <router-view></router-view>
        </transition>
    </v-main>

    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>

import DeletePatientDialog from "@/pages/index/deletePatientDialog";
export default {
  name: "default",
  components: {DeletePatientDialog},
}
</script>

<style scoped>
  .fade-enter, .fade-leave-to{
    opacity: 0;
    transform: translateX(2em);
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .3s ease;
  }
</style>
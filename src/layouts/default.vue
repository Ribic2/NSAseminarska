<template>
  <v-app>

    <v-navigation-drawer app temporary v-model="toggle">
      <v-list-item>
        <v-list-item-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Vid Bukovec</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-btn
            color="primary"
            :elevation="0"
            block
            :ripple="false"
            @click="$router.push({name: 'login'})"
        >
          Odjavi se
        </v-btn>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon :ripple="false">
        <v-icon>mdi-hospital-building</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Zdravstveni dom Straža</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="toggle = !toggle"><v-icon>mdi-dots-vertical</v-icon></v-btn>
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
  data() {
    return {
      toggle: false
    }
  }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
</style>
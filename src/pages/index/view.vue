<template>
  <v-row>
    <v-col cols="12">
      <pacients></pacients>
    </v-col>
  </v-row>
</template>

<script>
import pacients from "@/pages/index/patients";

export default {
  components:{
    pacients,
  },
  name: "view.vue"
}
</script>

<style scoped>

</style>
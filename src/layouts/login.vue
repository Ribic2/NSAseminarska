<template>
  <v-app id="app">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-row justify="center">
        <v-col align-self="center" cols="12" xl="4" lg="4" md="6">
          <v-card class="ma-10 pa-5">
            <v-card-title>Prijava v edoctor</v-card-title>

            <v-card-text>
              <v-form>
                <v-text-field placeholder="E-naslov" type="email"></v-text-field>
                <v-text-field
                    placeholder="Geslo"
                    @click:append="toggle = !toggle"
                    :append-icon="toggle ? 'mdi-eye-off': 'mdi-eye'"
                    :type="toggle ? 'password' : 'text'"
                >
                </v-text-field>
                <v-btn block color="secondary" @click="login">Prijavi se</v-btn>
              </v-form>
            </v-card-text>

          </v-card>
        </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "login.vue",
  data(){
    return{
      toggle: true,
      overlay: false,
    }
  },
  methods:{
    login(){
      this.overlay = true
      setTimeout(() => { this.$router.push({name: 'patients'}) }, 3000);
    }
  }
}
</script>

<style scoped>
  *{
    overflow: hidden;
  }
  #app{
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('../assets/pexels-linkedin-sales-navigator-2182976.jpg');
  }
</style>
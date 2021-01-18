<template>
  <v-form>
    <v-row>
      <v-col cols="12" xl="6" lg="6">
        <v-text-field
            placeholder="Ime"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" xl="6" lg="6">
        <v-text-field placeholder="Priimek">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xl="6" lg="6">
        <v-text-field placeholder="Datum rojstva">
        </v-text-field>
      </v-col>
      <v-col cols="12" xl="6" lg="6">
        <v-text-field placeholder="Kraj rojstva">
        </v-text-field>
      </v-col>
    </v-row>
    <v-text-field placeholder="Tel. številka">
    </v-text-field>

    <v-text-field placeholder="E-naslov">
    </v-text-field>

    <v-text-field placeholder="Trenutno prebivališče">
    </v-text-field>

    <v-select
        :items="bloodTypes"
        label="Tip krvi"
    ></v-select>

    <v-text-field placeholder="Vpiši alergijo.." v-model="allergieInput" @keyup.enter="addAllergie">
    </v-text-field>

    <v-list>
      <v-list-item v-for="(value, index) in allergies" :key="index">
        <v-list-item-icon>
          <v-icon>mdi-menu-right</v-icon>
        </v-list-item-icon>
        {{ value }}
        <v-spacer>
        </v-spacer>
        <v-btn icon color="red" @click="deleteAllergie(value)"><v-icon>mdi-delete</v-icon></v-btn>
      </v-list-item>
    </v-list>

    <v-btn
        block
        color="primary"
        :ripple="false"
        @click="$store.commit('CHANGE_ADD_DIALOG')"
    >Dodaj pacienta</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "addPatient.vue",
  data() {
    return {
      allergieInput: null,
      allergies: ['Penicillin', 'Orehi'],
      bloodTypes: [
        "O+",
        "O-",
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-"
      ]
    }
  },
  methods:{
    addAllergie(){
      this.allergies.push(this.allergieInput)
    },
    deleteAllergie(e){
      this.allergies.pop(e)
    }
  }
}
</script>

<style scoped>

</style>
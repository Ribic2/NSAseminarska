<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <v-text-field
            prepend-icon="mdi-magnify"
            placeholder="Isči paciente.."
        >
        </v-text-field>
      </v-card-text>
      <v-data-table
          :headers="headers"
          :items="patients"
          class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Pacienti</v-toolbar-title>
            <v-divider
                class="mx-4"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>

            <v-btn
                :elevation="0"
                color="secondary"
                @click="$router.push({name: 'add'})"
            >Dodaj pacienta
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.delete="{  }">
          <v-btn icon>
            <v-icon
                @click="deletePatient"
                big
            >
              mdi-delete
            </v-icon>
          </v-btn>
        </template>

        <template v-slot:item.check="{ }">
          <v-btn icon>
            <v-icon
                @click="selectPatient()"
                big
            >
              mdi-account
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "pacients.vue",
  data() {
    return {
      headers: [
        {text: 'Ime', value: 'Ime'},
        {text: 'Priimek', value: 'Priimek'},
        {text: 'Starost', value: 'Starost'},
        {text: 'Datum rojstva', value: 'DatumRojstva'},
        {text: 'Izbriši', value: 'delete', sortable: false},
        {text: 'Ogled', value: 'check', sortable: false},
      ],
      patients: [
        {
          Ime: 'Vid',
          Priimek: 'Bukovec',
          Starost: '18',
          DatumRojstva: '23.5.2002',
        },
        {
          Ime: 'Janez',
          Priimek: 'Novak',
          Starost: '50',
          DatumRojstva: '23.5.1970',
        },
        {
          Ime: 'Vid',
          Priimek: 'Bukovec',
          Starost: '18',
          DatumRojstva: '23.5.2002',
        },
      ]
    }
  },
  methods: {
    selectPatient() {
      this.$router.push({name: 'patient', params: {id: "1"}})
    },
    deletePatient() {
      this.$store.commit('CHANGE_DELETE_DIALOG')
    }
  }
}
</script>

import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'mdi'
    },
    theme:{
        themes:{
            light:{
                primary: '#16498C',
                secondary: '#2669BF',
                accent: '#F0F0F2'
            }
        }
    }
});

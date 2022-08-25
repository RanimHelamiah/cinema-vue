import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const hall ={
    namespaced: true,
    state: {
        halls:[],
        signedin:localStorage.getItem('access_token')?true:false
       },

      getters: {
        allhalls: state => state.halls,
      },

    mutations: {
          index : (state, halls) => state.halls = halls,
          store : (state, hall) => state.halls.push(hall),
      },
    actions:{
          async index(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Hall');
              // console.log(response.data.data.data);
              context.commit('index', response.data.data.data);
          },
          async store( context, hall) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/Hall', hall);
              // console.log(response.data.data);
              context.commit('store', response.data.data);
          },
    },

}

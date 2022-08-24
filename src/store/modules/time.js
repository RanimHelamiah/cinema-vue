import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const time ={
    namespaced: true,
    state: {
        time:[],
        signedin:localStorage.getItem('access_token')?true:false
      },

      getters: {
        alltimes: state => state.times
      },

    mutations: {
          index : (state, times) => state.times = times,
          store : (state, time) => state.times.push(time),
          update: (state, time) => {
              const index = state.times.findIndex(t => t.id === time.id);
              if(index !== -1) {
                  state.times.splice(index, 1, time);
              }        
          },
          deactivate:(state, time) => {
            const index = state.times.findIndex(t => t.id === time.id);
            if(index !== -1) {
                state.times.splice(index, 1, time);
            } 
          },
          activate:(state, time) => {
            const index = state.times.findIndex(t => t.id === time.id);
            if(index !== -1) {
                state.times.splice(index, 1, time);
            } 
          }
      },


    actions:{
          async index(context) {
               axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Time/index');
              // console.log(response.data.data.data);
              context.commit('index', response.data.data.data);
          },
          async store( context, time) {
              const response = await axios.post('/Time/store', time);
              // console.log(response.data.data);
              context.commit('store', response.data.data);
          },
          async update( context, time) {
              const response = await axios.put('/Time/update/'+time, time);
              // console.log(response.data.data);
              context.commit('update', response.data.data);
          },
          async activate( context, time) {
            const response = await axios.get('/Time/activate/'+time.id);
            context.commit('activate', response.data.data);
            console.log(response.data.data);
         },
          async deactivate( context, time) {
            const response = await axios.get('/Time/deactivate/'+time.id);
            context.commit('deactivate', response.data.data);
            console.log(response.data.data);
         },
         
    },

}

import axios from 'axios'


//axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const role ={
    namespaced: true,
    state: {
        signedin:localStorage.getItem('access_token')?true:false
      },

      getters: {
        allroles: state => state.roles
      },

    mutations: {
          index : (state, roles) => state.roles = roles,
          store : (state, role) => state.roles.push(role),
          update: (state, role) => {
              const index = state.roles.findIndex(t => t.id === role.id);
              if(index !== -1) {
                  state.roles.splice(index, 1, role);
              }        
          },
          delete: (state, role) => state.roles = state.roles.filter(t => role.id !== t.id),
      },


    actions:{
          async index(context) {
             axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('http://127.0.0.1:8000/api/roles');
              //console.log(response)
              // console.log(response.data.data.data);
              context.commit('index', response.data.data);
          },
          async store( context, role) {
              const response = await axios.post('/role/store', role);
              // console.log(response.data.data);
              context.commit('store', response.data.data);
          },
          async update( context, role) {
              const response = await axios.put('/role/update/'+role.id, role);
              // console.log(response.data.data);
              context.commit('update', response.data.data);
          },
        //   async deactivate( context, role) {
        //     const response = await axios.get('/role/deactivate/'+role.id);
        //     context.commit('deactivate', role);
        //     console.log(response.data.data);
        // },
        // async activate( context, role) {
        //     const response = await axios.get('/role/activate/'+role.id);
        //     context.commit('activate', role);
        //     console.log(response.data.data);
        // }
    },

}

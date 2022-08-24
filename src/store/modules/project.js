import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const project ={
    namespaced: true,
    state: {
        projects:[]
      },

      getters: {
        allprojects: state => state.projects
      },

    mutations: {
          index : (state, projects) => state.projects = projects,
          store : (state, project) => state.projects.push(project),
          update: (state, project) => {
              const index = state.projects.findIndex(t => t.id === project.id);
              if(index !== -1) {
                  state.projects.splice(index, 1, project);
              }        
          },
          delete: (state, project) => state.projects = state.projects.filter(t => project.id !== t.id),
      },


    actions:{
          async index(context) {
              // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
              const response = await axios.get('/Project/index');
              // console.log(response.data.data.data);
              context.commit('index', response.data.data.data);
          },
          async store( context, project) {
              const response = await axios.post('/Project/store', project);
              // console.log(response.data.data);
              context.commit('store', response.data.data);
          },
          async update( context, project) {
              const response = await axios.put('/Project/update/'+project.id, project);
              // console.log(response.data.data);
              context.commit('update', response.data.data);
          },
          async delete( context, project) {
              const response = await axios.delete('/Project/destroy/'+project.id);
              context.commit('delete', project);
              console.log(response.data.data);
          }
    },

}

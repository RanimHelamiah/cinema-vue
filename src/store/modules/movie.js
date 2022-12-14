import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const movie ={
    namespaced: true,
    state: {
        movies:[],
        // movie:Object,
        // genres:Object,
        // hallss:Object,
        // times:Object,
        signedin:localStorage.getItem('access_token')?true:false
       },

      getters: {
        allmovies: state => state.movies,
        allgenres:state =>state.movies.genres,
        alltimes:state=>state.movies.times,
        allhalls:state=>state.movies.halls,
        showmovie: state => state.movie
      },

    mutations: {
          index : (state, movies) => state.movies = movies,
          create : (state,movies) => state.movies = movies,
          store : (state, movie) => state.movies.push(movie),
          show: (state, movie) => {
            state.movie = movie;
          },
          update: (state, movie) => {
              const index = state.movies.findIndex(t => t.id === movie.id);
              if(index !== -1) {
                  state.movies.splice(index, 1, movie);
              }        
          },
          delete: (state, movie) => state.movies = state.movies.filter(t => movie.id !== t.id),
      },
    actions:{
          async index(context) {
            this.loading = true;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Movie');
               //console.log(response.data.data.data);
              context.commit('index', response.data.data.data);
          },
          async create(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Movie/create');
             //  console.log(response.data.data);
              context.commit('create', response.data.data);
          },
          async store( context, movie) {
            // console.log(movie);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/Movie', movie,
                {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
                }).catch(error => {
                  console.log(error.response)
                });
              console.log(response.data.data);
              context.commit('store', response.data.data);
              
          },
          async show( context, movie) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            const response = await axios.get('Movie/'+movieid);
            // console.log(response.data.data);
            context.commit('edit', response.data.data);
          },
          async update( context, movie) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.put('/Movie'+movie.id, movie);
              // console.log(response.data.data);
              context.commit('update', response.data.data);
          },
          async delete( context, movie) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.delete('/Movie'+movie.id);
              context.commit('delete', movie);
              console.log(response.data.data);
          }
    },

}

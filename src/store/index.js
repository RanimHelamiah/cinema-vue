import { createStore } from "vuex";
const axios = require('axios').default;



//export default store;

import Vue from 'vue'
import Vuex from 'vuex'
import { project } from "./modules/project"
import { auth } from "./modules/auth"
import { time } from "./modules/time"
import { movie } from "./modules/movie"
import { role } from "./modules/role"
//Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project,
    auth,
    role,
    time,
    movie,
  },
})


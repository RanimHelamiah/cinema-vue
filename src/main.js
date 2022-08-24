import { createApp } from "vue";
import store from "./store";
import Master from "./components/layouts/Master.vue";
import axios from "axios";
import router from "./router";
import { Icon } from "@iconify/vue";
import VueApexCharts from "vue3-apexcharts";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
// import "flowbite";
import "./assets/tailwind.css";
import "./assets/animate.css";
import "./assets/sass/css/windzo.css";


const app = createApp(Master);
app.use(router, Icon);
app.use(VueApexCharts);
app.use(PerfectScrollbar);
app.use(store);
app.mount("#app");

import { auth } from "@/store/modules/auth"

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!auth.state.signedin) {
        next({
          name: 'login',
        })
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
      if (auth.state.signedin) {
        next({
          name: 'Dashboard',
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
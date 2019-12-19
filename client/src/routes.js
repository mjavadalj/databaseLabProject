import Vue from "vue";
import Router from "vue-router";
import insert from "./components/insert.vue"
Vue.use(Router);

export default new Router({

    mode: "history",
    routes: [

        {
            path: "/insert",
            name: "insert",
            component: insert
        }



    ]


})
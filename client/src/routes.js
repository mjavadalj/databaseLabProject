import Vue from "vue";
import Router from "vue-router";
import insert from "./components/insert.vue"
import get from "./components/get.vue"
Vue.use(Router);

export default new Router({

    mode: "history",
    routes: [

        {
            path: "/insert",
            name: "insert",
            component: insert
        },
        {
            path: "/get",
            name: "get",
            component: get
        }



    ]


})
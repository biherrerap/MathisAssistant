import Vue    from 'vue'
import Router from 'vue-router'
import Home    from './components/Home'
import Table   from './components/Table'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/table',
            component: Table
        },
    ],
    linkActiveClass: "active",
    mode: "hash"
})
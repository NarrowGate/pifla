import Vue from 'vue'
import App from './todolist/App.vue'

import portal from 'portal-vue'

Vue.use(portal);


new Vue({
    el: '#toDoWrap',
    render(h) {
        return h(App);
    }
})
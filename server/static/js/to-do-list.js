import Vue from 'vue'
import App from './todolist/App.vue'




new Vue({
    el: '#toDoWrap',
    render(h) {
        return h(App);
    }
})
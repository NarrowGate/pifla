import Vue from 'vue';


console.log('home js')

var vm = new Vue({
    el: '#vueId',
    render: function(createElement) {
      return createElement('div', 'Hello world');
    }
  });
import Vue from 'vue';


console.log('400 home js')

var vm = new Vue({
    el: '#vueId',
    render: function(createElement) {
      return createElement('div', 'Hello world');
    }
  });
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('main-component', require('./components/MainComponent.vue').default);
Vue.component('sub-component', require('./components/SubComponent.vue').default);

Vue.component('main-header', require('./components/MainHeader.vue').default);
Vue.component('main-left-sidebar', require('./components/MainLeftSidebar.vue').default);
Vue.component('main-right-sidebar', require('./components/MainRightSidebar.vue').default);
Vue.component('main-content', require('./components/MainContent.vue').default);
//var MainHeader = require('./components/MainHeader.vue').default;
//var MainLeftSidebar = require('./components/MainLeftSidebar.vue').default;
//var MainRightSidebar = require('./components/MainRightSidebar.vue').default;
//var MainContent = require('./components/MainContent.vue').default;

Vue.component('sample-vif', require('./components/SampleVif.vue').default);
//var SampleVif = require('./components/SampleVif.vue').default;
Vue.component('sample-parent-child-communication', require('./components/SampleParentChildCommunication.vue').default);
Vue.component('sample-child-parent-communication', require('./components/SampleChildParentCommunication.vue').default);

//highlight-vue.js
Vue.use(hljsVuePlugin);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    /*
    components: {
        'sample-vif': SampleVif,
      }
    */
});

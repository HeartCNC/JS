// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
!(function() {
  function setFontSize() {
    var _document = document
    var _documentElement = _document.documentElement
    var width = _documentElement && _documentElement.clientWidth && _documentElement.clientWidth ||
      window.innerWidth && window.innerWidth ||
      _document.body.clientWidth
    _documentElement.style.fontSize = width / 10 + 'px'
  }
  setFontSize()
  window.addEventListener('resize', function() {
    setTimeout(function() {
      setFontSize()
    }, 16)
  })
})()

import Vue from 'vue'
import '@/assets/styles/intol.mobile.min.css'

import App from './App'
import router from './router'

// 添加自定义的全局方法
import fn from '@/utils/functions'
Vue.prototype.$fn = fn

// 全局http请求
import service from '@/utils/http'
Vue.prototype.$service = service

// 引入事件总线
Vue.prototype.$event = new Vue()

Vue.productTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

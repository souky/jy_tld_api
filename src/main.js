import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/apps.css'

Vue.config.productionTip = false

/* 附加插件 */
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.prototype.initCodeBlock = function(){
	var list = document.getElementsByClassName('code_block');
	for(var i = 0;i<list.length;i++){
		var obj = list[i];
		var htmls = obj.innerHTML;
		var tagName = htmls.split('#')[1].split(' ')[0];
		htmls = htmls.replace(/#/g,'<span><<span>');
		htmls = htmls.replace(/%/g,'<span>><span>');
		htmls = htmls.replace(tagName,'<font>'+tagName+'</font>');
		
		obj.innerHTML = htmls;
	}
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



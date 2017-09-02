import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Table from '@/components/Table'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Textarea from '@/components/Textarea'
import Button from '@/components/Button'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/input',
      component: Input
    },
    {
      path: '/select',
      component: Select
    },
    {
      path: '/textarea',
      component: Textarea
    },
    {
      path: '/button',
      component:Button
    }
    
    
  ]
})

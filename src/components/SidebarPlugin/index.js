import Sidebar from './SideBar.vue'
import SidebarLink from './SidebarLink.vue'

const SidebarAdmin = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/admin/overview'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarUser ={
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/User/overview'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}
const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarAdmin: SidebarAdmin,
          sidebarUser: SidebarUser
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarAdmin
        return this.$root.sidebarUser
      }
    })
    Vue.component('side-bar', Sidebar)
    Vue.component('sidebar-link', SidebarLink)
  }
}

export default SidebarPlugin

<template>
    <div>
        <h2>Test Side Menu</h2>
        <SidebarMenu />
    </div>
</template>


<script>
    import Vue from 'vue'
    import VueSideMenu from '../../src/index.js'
    Vue.use(VueSideMenu)

    // import VueSidebarMenu from 'vue-sidebar-menu'
    // import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
    // import { SidebarMenu } from 'vue-sidebar-menu'
    import { SidebarMenu } from '../../src/index.js'
    import '../../dist/vue-sidebar-menu.css'


    export default {

        name: 'app',
        components: {
            SidebarMenu,
        },

    }
</script>
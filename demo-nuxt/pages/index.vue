<template>
    <div>
        <h2>Test Side Menu</h2>
        <SidebarMenu :menu='menu' />
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
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        // component: componentName
                        // visibleOnCollapse: true
                        // class:''
                        // attributes: {}
                    },
                    { // item
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user',
                        disabled: false,
                        class:'',
                        attributes: {},
                        alias: '/path',
                        badge: {
                            text: 'new',
                             class:'',
                             attributes: {},
                        },
                    },
                    { // item with child
                        href: '/charts',
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link',
                            },
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link',
                            },
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link',
                            },
                        ]
                    },
                ],
            }
        },

    }
</script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import '../scss/app.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import './bootstrap';
import '@vueform/slider/themes/default.css';
import "leaflet/dist/leaflet.css";

import { createApp, h, App } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import BootstrapVueNext from 'bootstrap-vue-next';
import vClickOutside from 'click-outside-vue3';
import VueApexCharts from "vue3-apexcharts";
import VueFeather from 'vue-feather';
import VueTheMask from 'vue-the-mask';

import AOS from 'aos';
import 'aos/dist/aos.css';

import store from "./state/store";
import i18n from './i18n';

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

createInertiaApp({
    title: (title: string) => title ? `${title} | Velzon Inertia + Vue & Laravel Admin & Dashboard Template` : 'Velzon - Inertia + Vue & Laravel Admin & Dashboard Template',
    
    resolve: (name: string) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),

    setup({ el, App, props, plugin }: { el: Element, App: any, props: any, plugin: any }) {
        const app: App<Element> = createApp({ render: () => h(App, props) }) // explicitly assign type 'App<Element>'
            .use(plugin)
            .use(store)
            .use(i18n)
            .use(ZiggyVue)
            .use(BootstrapVueNext)
            .use(VueApexCharts)
            .use(VueTheMask)
            .use(vClickOutside)
            .component(VueFeather.type, VueFeather);

        app.mount(el);  // Mount the app to the DOM element
        return app;      // Explicitly return the 'App' instance
    },

    progress: {
        color: '#4B5563',
    },
});
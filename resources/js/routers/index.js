import { createMemoryHistory, createRouter } from "vue-router";

// Pages Import
import Home from "../pages/Home.vue";
import Settings from "../pages/Settings.vue";
import BaseLayout from "../components/layouts/BaseLayout.vue";

const routes = [
    {
        path: "/",
        component: BaseLayout,
        children: [
            { path: "", component: Home },
            {
                path: "/settings",
                component: Settings,
            },
        ],
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;

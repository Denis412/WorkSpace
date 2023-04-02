const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "group/:id",
        name: "group",
        component: () => import("pages/Group.vue"),
      },
      {
        path: "subject/:id",
        name: "subject",
        component: () => import("pages/Subject.vue"),
      },
      {
        path: "page/:id",
        name: "page",
        component: () => import("pages/Page.vue"),
      }
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthorizationLayout.vue"),
    children: [
      {
        path: "",
        name: "auth",
        component: () => import("pages/AuthorizationPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import custom css
import "./scss/custom.scss";
createApp(App).use(router).mount("#app");

import { createStore } from 'vuex'
import auth from './modules/auth';
import movies from "./modules/movies";
import notifications from "./modules/notifications";

export default createStore({
  modules: {
    auth,
    movies,
    notifications
  }
})

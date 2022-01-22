import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import modules from "./modules";

export default createStore({
  state,
  actions,
  getters,
  mutations,
  modules,
});

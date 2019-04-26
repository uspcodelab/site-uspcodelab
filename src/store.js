import { Store } from "vuex";

export default () => {
  return new Store({
    state: {
      isMobile: false
    },
    mutations: {
      increment(state) {
        state.count++;
      }
    }
  });
};

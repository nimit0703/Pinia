import {createStore} from 'vuex';

const store = createStore({
    state: {
      isOpen: false,
  
    },
    mutations: {
      // Your mutations go here
      setIsOpenFalse(state){
        state.isOpen =false;
      },
    },
    actions: {
      // Your actions go here
    },
    getters: {
      hiddenClass(state){
        return !state.isOpen ? "hidden" : "";
      }
    },
  });
  
  export default store;
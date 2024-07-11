import { createStore } from 'vuex';
import todo from './store/modules/todo';
const store = createStore({
    modules:{
        todo
    }
});
export default store;

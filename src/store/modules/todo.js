import { deleteTodoApi, getAllApi, postToDoApi } from "@/apis/todoapi"


const state = () =>{
    return{
        todolist:[]
    }
}

const getters = {
    getAllList: (state) => state.todolist
}

const mutations = {
    getAllListMutation(state,value){
        state.todolist = value;
    }
}

const actions = {
   async getAllListAction(context){
        const res = await getAllApi();
        context.commit("getAllListMutation",res);
        // console.log(res)
    },
    async addToDoAction(context,value){
        await postToDoApi(value);
        context.dispatch("getAllListAction")
    },
    async deleteToDoAction(context,value){
       
        for (const element of value) {
            try {
                await deleteTodoApi(element);
                // console.log(res);
            } catch (error) {
                console.error("Error deleting item:", error);
                // Xử lý lỗi nếu cần
            }
        }
        context.dispatch("getAllListAction")
    },


}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
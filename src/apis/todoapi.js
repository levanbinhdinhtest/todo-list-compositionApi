import axios from "axios";

export const getAllApi = async ()=>{
    const res = await axios({
        method: "GET",
        url: "https://667ed50ff2cb59c38dc72c56.mockapi.io/todolist"
    })
    return res.data;
}

export const postToDoApi = async (todo)=>{
    const res = await axios({
        method: "POST",
        url: "https://667ed50ff2cb59c38dc72c56.mockapi.io/todolist",
        data: todo
    })
    return res.data;
}

export const deleteTodoApi = async (id)=>{
    const res = await axios({
        method: "DELETE",
        url:`https://667ed50ff2cb59c38dc72c56.mockapi.io/todolist/${id}`
    })
    return res.data;
}

export const updateToDoApi = async (todo)=>{
    const res = await axios({
        method: "UPDATE",
        url: `https://667ed50ff2cb59c38dc72c56.mockapi.io/todolist/${todo.id}`,
        data: todo
    })
    return res.data;
}
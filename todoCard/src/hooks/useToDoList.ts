import { useCallback, useState } from "react";
import { ToDo } from "../ToDo";

export const useToDoList=(initList:Array<ToDo>=[]):{
    todoList:Array<ToDo>;
    addToDo:()=>void;
    deleteToDo:(id:string)=>void;
    updateToDoById:(id:string,value:string)=>void;
}=>{
    const [todoList,setToDoList]=useState<Array<ToDo>>(initList);
    const addToDo=useCallback(()=>{
        setToDoList(list=>[...list,new ToDo()]);
    },[]);
    const deleteToDo=useCallback((id:string)=>{
        setToDoList(list=>list.filter(i=>i.id!==id));
    },[]);
    const updateToDoById=useCallback(
        (id:string, value:string)=>{
            setToDoList(list=>{
                const index = list.findIndex(todo=>todo.id===id);
                const listLocal = [...list];
                const item = {...listLocal[index], text:value};
                listLocal[index]=item;
                return listLocal;
            });
        },[]);
    return {
        todoList,
        addToDo,
        updateToDoById,
        deleteToDo
    };
};
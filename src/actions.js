export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";
export const ADD_TODOS = "ADD_TODOS";
export const DELETE_TODOS = "DELETE_TODOS";

export const toggleTodo = todoIdToToggle => {
    return {
        type: TOGGLE_TODO,
        payload: todoIdToToggle
    };
};

export const addTodo = (todoTitle) => {
    const newTodo = {
        userId: 1,
        id: Math.floor(Math.random() * 100),
        title: todoTitle,
        completed: false
    };
    return {
        type: ADD_TODOS,
        payload: newTodo,
    };
};
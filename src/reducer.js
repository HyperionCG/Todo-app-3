import todosList from "./todos.json";
import { TOGGLE_TODO, CLEAR_COMPLETED_TODOS, ADD_TODOS, DELETE_TODOS } from "./actions";

const initialState= {
    todos: todosList
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TODO: {
        const newTodoList = state.todos.map(todo => {
                    if (todo.id === action.payload) {
                      const newTodo = { ...todo };
                      newTodo.completed = !newTodo.completed;
                      return newTodo;
                    }
                    return todo;
                  });
                  return {...state, todos: newTodoList };
                }
        case ADD_TODOS: {
            // const newTodoList = state.todos.slice();
            // newTodoList.push(action.payload);
            return { ...state, todos: [...state.todos, action.payload] };
          }
        case DELETE_TODOS: {
          return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        }
        case CLEAR_COMPLETED_TODOS: {
          return {...state, todos: state.todos.filter(todo => todo.completed === false)}
  
        }

        default:
            return state;
    }
};

export default reducer;
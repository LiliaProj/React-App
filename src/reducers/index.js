import { combineReducers } from 'redux';
import { v4 } from 'uuid';

const ToDo = [
    {name: "Wake up at 7:30", duration: "10", id: v4()},
    {name: "Shower", duration: "15", id: v4()},
    {name: "Teeth cleaning", duration: "5", id: v4()},
    {name: "Drinking coffee", duration: "15", id: v4()}
];

const toDoReducer = (list = ToDo, action) => {
    if(action.type === 'ADD_TASK'){
        let {index, ...task} = action.payload;
        list.splice(index - 1, 0, {...task});
        return list;

    } else if(action.type === 'EDIT_TASK'){
        return list.map(task =>{
            if(task.id === action.payload.id){
                return action.payload;
            }
            return task;
        });

    } else if(action.type === 'DELETE_TASK'){
        return list.filter(task => task.id !== action.payload);
    }

    return list;
}

const selectEditTask = (selectedTask = {name: '', duration: '', id: ''}, action) => {
    if(action.type === 'SELECT_TASK'){
        return action.payload;
    }
    return {name: '', duration: '', id: ''};
}

export default combineReducers({
    toDoReducer,
    selectEditTask
});
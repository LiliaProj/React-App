import { combineReducers } from 'redux';
import { v4 } from 'uuid';

const ToDo = [
    {name: "Wake up at 7:30", duration: "10", id: v4()},
    {name: "Shower", duration: "15", id: v4()},
    {name: "Teeth cleaning", duration: "5", id: v4()},
    {name: "Drinking coffe", duration: "15", id: v4()}
];
const toDoReducer = (list=ToDo, action)=>{
    return list;
}

export default combineReducers({
    toDoReducer
});
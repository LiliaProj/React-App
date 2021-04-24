import React from 'react';
import { connect } from 'react-redux';
import ToDoEdit from './ToDoEdit';
import ToDoAdd from './ToDoAdd';

class ToDoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main className="container p-4">
                <h2 className="display-3">To do list</h2>
                <div className="row border-bottom">
                    <ToDoAdd/>
                    <ToDoEdit/>
                </div>
                <ol className="display-6">
                    <li>
                        <div className="d-flex justify-content-between">
                            <p>Morning</p>
                            <p>10 min</p>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between">
                            <p>Morning</p>
                            <p>10 min</p>
                        </div>
                    </li>
                </ol>
            </main>
        )
    }
}

export default connect()(ToDoList);
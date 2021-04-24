import React from 'react';
import { connect } from 'react-redux';

class ToDoEdit extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-md-6 border-left-3 border-dark p-4 ">
                <div className="form-group row my-2">
                    <label htmlFor="durationNameEdit" className="col-sm-3">Number/ Duration</label>
                    <div className="col-lg-2 col-3">
                        <input type="number" min="1" defaultValue="3" onChange={()=>{}} id="namberOfTaskEdit" className="form-control mx-sm-3"/>
                    </div>
                    <div className="col-lg-7 col-sm-6 col-9">
                        <input type="number" min="0" id="durationNameEdit" className="form-control mx-sm-3" placeholder="Enter duration of task in min"/>
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label htmlFor="taskNameEdit" className="col-sm-3">Task</label>
                    <div className="col-sm-9">
                        <input type="text" id="taskNameEdit" className="form-control mx-sm-3" placeholder="Enter your task"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark">Edit task</button>
            </div>
        )
    }
}

export default connect()(ToDoEdit);
import React from 'react';
import { connect } from 'react-redux';

class ToDoAdd extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-md-6 p-4" style={{borderRight: "1px solid #dee2e6"}}>
                <div className="form-group row my-2">
                    <label htmlFor="durationName" className="col-sm-3">Number/ Duration</label>
                    <div className="col-lg-2 col-3">
                        <input type="number" min="1" defaultValue="3" onChange={()=>{}} id="namberOfTask" className="form-control mx-sm-3"/>
                    </div>
                    <div className="col-lg-7 col-sm-6 col-9">
                        <input type="number" min="0" id="durationName" className="form-control mx-sm-3" placeholder="Enter duration of task in min"/>
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label htmlFor="taskName" className="col-sm-3">Task</label>
                    <div className="col-sm-9 mr-4">
                        <input type="text" id="taskName" className="form-control mx-sm-3" placeholder="Enter your task"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark">Add task</button>
            </div>
        )
    }
}

export default connect()(ToDoAdd);
import React from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions';

class ToDoEdit extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            duration: '',
            id: ''
        };
    }
    static getDerivedStateFromProps(newProps, prevState) {
        if(newProps.selectedTask.id !== prevState.id){
            return newProps.selectedTask;
        } 
        return prevState;
    }
    render(){
        let { name, duration } = this.state;
        let { editTask } = this.props;
        return(
            <div className="col-md-6 p-4">
                <div className="form-group row my-2">
                    <label htmlFor="durationNameEdit" className="col-sm-3"> Duration</label>
                    <div className="col-sm-9">
                        <input id="durationNameEdit" type="number" min="0" className="form-control mx-sm-3" placeholder="Enter duration of task in min" 
                        value={duration} 
                        onChange={(e) => this.setState({duration: e.target.value})} 
                        disabled={!name && !duration}/>
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label htmlFor="taskNameEdit" className="col-sm-3">Task</label>
                    <div className="col-sm-9">
                        <input id="taskNameEdit" type="text" className="form-control mx-sm-3" placeholder="Enter your task" 
                        value={name} 
                        onChange={(e) => this.setState({name: e.target.value})} 
                        disabled={!name && !duration}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark"
                disabled={!name || !duration}
                onClick={() => {editTask({...this.state})}}>Edit task</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedTask: state.selectEditTask
})
const mapDispatchToProps = {
    editTask
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoEdit);
import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { removeTask, addTask } from '../actions';
import ToDoEdit from './ToDoEdit';

class ToDoAdd extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            index: this.props.list.length + 1,
            name: '',
            duration: '',
            id: ''
        }
    }
    renderForm(){
        const { addTask } = this.props;
        let { index, name, duration } = this.state;

        return(
            <div className="col-md-6 p-4" style={{borderRight: "1px solid #dee2e6"}}>
                <div className="form-group row my-2">
                    <label htmlFor="durationName" className="col-sm-3">Number/ Duration</label>
                    <div className="col-lg-2 col-3">
                        <input id="namberOfTask"  value={index} onChange={(e)=>{this.setState({index: e.target.value})}} type="number" min="1" className="form-control mx-sm-3"/>
                    </div>
                    <div className="col-lg-7 col-sm-6 col-9">
                        <input id="durationName" value={duration} onChange={(e)=>{this.setState({duration: e.target.value})}} type="number" min="0" className="form-control mx-sm-3" placeholder="Enter duration of task in min"/>
                    </div>
                </div>
                <div className="form-group row my-2">
                    <label htmlFor="taskName" className="col-sm-3">Task</label>
                    <div className="col-sm-9 mr-4">
                        <input id="taskName" value={name} onChange={(e)=>{this.setState({name: e.target.value})}} type="text" className="form-control mx-sm-3" placeholder="Enter your task"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark" 
                disabled={(!name || !duration) || !index}
                onClick={() => {
                    addTask({
                        name,
                        duration,
                        index,
                        id: v4()
                    });
                    this.setState({
                        index: this.props.list.length + 1,
                        name: '',
                        duration: '',
                        id: ''
                    })
                }}>Add task</button>
            </div>
        )
    }
    renderList(){
        const { list, removeTask } = this.props;

        return list.map((item, index) => {
            return(
                <li key={item.id} className={(index % 2) ? "bg-light" : "bg-white"}>
                    <div className="row">
                        <p className="col-lg-8 col-6">{item.name}</p>
                        <p className="col-lg-2 col-3">{item.duration} min</p>
                        <div className="col-lg-2 col-3">
                            <button className="btn btn-dark" id="editBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                </svg>
                            </button>
                            <button className="btn btn-dark mx-sm-1"  id="removeBtn" onClick={() => removeTask(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
            );
        })
    }
    render(){
        return (
            <main className="container p-4">
            <h2 className="display-3">To do list</h2>
            <div className="row border-bottom">
                {this.renderForm()}
                <ToDoEdit/>
            </div>
            <ol className="display-6">
                {this.renderList()}
            </ol>
            </main>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.toDoReducer
})
const mapDispatchToProps = {
    removeTask,
    addTask
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoAdd);
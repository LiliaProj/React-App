import { connect } from 'react-redux';

const ToDoList = () => {
    return(
        <div className="container p-4">I'm to do list</div>
    )
}

export default connect()(ToDoList);
import { useState } from "react";
import Header from "./header";
import '../css/todo-styles.css'

function TodoApp() {
    return (<div>
        <Header />
        <TodoBody />
    </div>);
}


function TodoBody() {
    const [value, setValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [test, setTest] = useState(0);
    function handleClick() {
        // append the value in var and just clear the value
        var updatedList = todoList;
        updatedList.push(value);
        //  console.log(updatedList);
        setTodoList(updatedList);
        setValue('');
    }

    function handleCompletedTasks(removalTaskId) {

        console.log("****Handle success ****" + removalTaskId);
        var finalTodoList = [];
        for (var index = 0; index < todoList.length; index++) {
            if (removalTaskId !== index) {
                finalTodoList.push(todoList[index]);
            }
            else {
                completedTasks.push(todoList[index]);
            }
        }

        setTodoList(finalTodoList);
        setTest(todoList.length);
        console.log(todoList + " **** " + todoList.length);
    }


    return (
        <div className="todo-body">
            <div className="inputDiv">
                <div>    Enter your tasks : <input name="myInput" value={value} onChange={e => setValue(e.target.value)} />
                </div>
                <div>
                    <button onClick={handleClick}>Go</button>
                </div>
            </div>
            <div className="listDisplay">
                <div className="tasksDisplay">
                    <ListDisplay todoList={todoList} completeTaskOutputEvent={handleCompletedTasks} />
                </div>
                <div className="completedTasksDisplay">
                    <CompletedTasks completedTasks={completedTasks} />
                </div>
            </div>

        </div>
    );
}

function ListDisplay(props) {
    function completeTask(index) {
        props.completeTaskOutputEvent(index);
        //   console.log(index);
    }
    const listItems = props.todoList.map((task, index) =>
        <li key={index} value={index} className="listDisplay">
            <div>
                {task}
            </div>
            <div>
                <button onClick={() => { completeTask(index) }}>
                    Complete the task
                </button>
            </div>
        </li>
    );
    return (<div>
        <h1>
            {
                props.todoList.length > 0 ? (
                    <div>Pending tasks : {props.todoList.length} </div>
                ) :
                    (<div>Pending tasks : No More , you good for the day !!! :-) </div>)


            }

        </h1>
        <div>
            {listItems}
        </div>
    </div>);
}

function CompletedTasks(props) {
    const completedTasks = props.completedTasks.map((taskName) =>
        <li key={taskName} className="listDisplay">
            <div>
                {taskName}
            </div>
        </li>
    )
    return (
        <div>
            <h1>
                {
                    completedTasks.length > 0 ? (<> Completed Tasks :
                        {completedTasks.length}
                    </>) : (<>No Completed Tasks, make sure to complete if you have any !!</>)
                }
            </h1>
            <div>
                {completedTasks}
            </div>
        </div>
    );

}



export default TodoApp;
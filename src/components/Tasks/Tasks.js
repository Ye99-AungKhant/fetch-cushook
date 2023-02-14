import classes from './Tasks.module.css';
import TaskItem from './TaskItem';

const Tasks = (props) => {

    let taskList = <h2>No tasks found. Start adding some!</h2>;

    if (props.items.length > 0) {
        taskList = (
            <ul>
                {props.items.map((task) => (
                    <TaskItem key={task.id}>{task.text}</TaskItem>
                ))}
            </ul>
        )
    }
    let content = taskList


    if (props.error) {
        content = <button onClick={props.onFetch}>Try again</button>;
        console.log(props.error);
    }

    if (props.loading) {
        content = 'Loading tasks...';
    }

    return (
        <section>
            <div className={classes.container}>{content}</div>
        </section>
    )
}

export default Tasks
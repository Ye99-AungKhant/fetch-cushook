import useHttp from "../../hooks/use-http";
import React from "react";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
    const { loading, error, sendRequest: sendTaskRequest } = useHttp()

    const createTask = (taskText, taskData) => {
        const generatedId = taskData.name
        const createdTask = { id: generatedId, text: taskText }
        props.onAddTask(createdTask)
    }

    const enterTaskHandler = async (taskText) => {

        sendTaskRequest(
            {
                url: 'https://react-e40b0-default-rtdb.firebaseio.com/tasks.json',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: { text: taskText }
            }, createTask.bind(null, taskText)
        )
    }

    return (
        <section>
            <TaskForm onEnterTask={enterTaskHandler} loading={loading} />
            {error && <p>{error}</p>}
        </section>
    )
}
export default NewTask
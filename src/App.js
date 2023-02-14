import React, { useState } from "react";
import Tasks from "components/Tasks/Tasks";
import { useEffect } from "react";
import NewTask from "components/TaskForm/NewTask";
import useHttp from "hooks/use-http";

const App = () => {

  const [tasks, setTasks] = useState([])
  const { loading, error, sendRequest: fetchTasks } = useHttp()

  useEffect(() => {
    const transFormTask = taskObj => {
      const loadedTask = []

      for (const taskKey in taskObj) {
        loadedTask.push({
          id: taskKey,
          text: taskObj[taskKey].text
        })
      }
      setTasks(loadedTask)
    }
    fetchTasks({ url: 'https://react-e40b0-default-rtdb.firebaseio.com/tasks.json' }, transFormTask)
  }, [fetchTasks])

  const taskAddHandler = (tasks) => {
    setTasks((prevTask) => prevTask.concat(tasks))
  }

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        error={error}
        loading={loading}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  )
}

export default App
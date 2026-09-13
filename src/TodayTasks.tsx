import { useState } from 'react'

function TodaysTasks() {
  const [tasks, setTasks] = useState([
    {id: 1,title: 'ゴミを出す', completed: false},
    {id: 2,title: '買い物に行く', completed: true},
    {id: 3,title: '子供を寝かせる', completed: false},
  ])

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => task.id === id
    ? {...task, completed: !task.completed}
    :task
      )
    )
  }

    return(
      <section>
        <h2>今日やること</h2>
        {tasks.map((task) => (
          <button onClick={() => toggleTask(task.id)}>
            {task.completed ? '☑' : '☐'} {task.title}
          </button>
        ))}
      </section>
    )
  }

  export default TodaysTasks
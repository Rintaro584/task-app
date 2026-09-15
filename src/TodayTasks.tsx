import { useState } from 'react'

function TodayTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'ゴミを出す', completed: false },
    { id: 2, title: '買い物に行く', completed: true },
    { id: 3, title: '子どもを寝かせる', completed: false },
  ])

  const [newTaskTaitle, setNewTaskTaitle] = useState('')

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const addTask = () => {
    const newTask ={
      id: tasks.length +1,
      title: newTaskTaitle,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  return (
    <section>
      <h2>今日やること</h2>
      <input 
      type="text"
      value ={newTaskTaitle}
      onChange={(e) => setNewTaskTaitle(e.target.value)}
      />
      <button onClick={() => console.log(newTaskTaitle)}>追加</button>


      {tasks.map((task) => (
        <button key={task.id} onClick={() => toggleTask(task.id)}>
          {task.completed ? '☑' : '☐'} {task.title}
        </button>
      ))}
    </section>
  )
}

export default TodayTasks
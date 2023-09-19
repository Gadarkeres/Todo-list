import React, {useState} from 'react';
//css
import styles from './App.module.css'

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';
import Modal from './components/Modal';

// interface
import {ITask} from './interfaces/Task'


function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    )
  }

  const hideOrShowModal = (display:boolean) => {
  const modal = document.querySelector("#modal")
  if(display){
    modal!.classList.remove("hide")
  }else{
    modal!.classList.add("hide")
  }
  }
const editTask = (task:ITask):void => {
hideOrShowModal(true)
setTaskToUpdate(task)
}

const updateTask = (id: number, title: string, difficulty: number) => {
  const updatedTask: ITask = { id, title, difficulty };

  const updatedItems = taskList.map((task) => {
    return task.id === updatedTask.id ? updatedTask : task;
  });

  setTaskList(updatedItems);

  hideOrShowModal(false);
};
  return (
   <div>
    <Modal children={<Taskform btnText="Editar" taskList={taskList} task = {taskToUpdate}  handleUpdate={updateTask}/>} />
    <Header/>
    <div className={styles.main}>
    <div>
    <h2>O que você vai fazer?</h2>
    <Taskform btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
    </div>
    <div>
      <h2>Suas tarefas:</h2>
      <Tasklist taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
    </div>
    </div>
   <Footer/>
   </div>
  );
}

export default App;

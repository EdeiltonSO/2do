import logo2do from '../../assets/logo.svg'
import { Header, TaskContainer, TaskCounter, TaskHeader, TaskList } from "./styles";
import { Task } from "../../components/Task";
import { NewTaskForm } from '../../components/NewTaskForm';
import { useState } from 'react';

interface Task {
    id: string,
    title: string,
    done: boolean,
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function handleCreateNewTask(title: string) {
        if (!title) return;

        const now = new Date();
        const id = now.getTime().toString();
        
        const task = {
            id,
            title,
            done: false,
        }
        
        setTasks([...tasks, task]);
    }

    return (
        <>
            <Header>
                <img src={logo2do} alt="" />
                <NewTaskForm onSubmitFunction={handleCreateNewTask} /> 
            </Header>

            <TaskContainer>
                <TaskHeader>
                    <TaskCounter>
                        <p id='created'>Tarefas criadas</p>
                        <span>{tasks.length}</span>
                    </TaskCounter>
                    <TaskCounter>
                        <p id='done'>Concluídas</p>
                        <span>X de {tasks.length}</span>
                    </TaskCounter>
                </TaskHeader>
                <TaskList>
                    {tasks.map(task => (
                        <Task
                            key={task.id}
                            done={task.done}
                            title={task.title}
                            onChangeCheckbox={() => {console.log('check 2')}}
                            onClickTrash={() => {console.log('lixo 2')}}
                        />
                    ))}
                </TaskList>
            </TaskContainer>
        </>
    );
}
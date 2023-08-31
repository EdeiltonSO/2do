import logo2do from '../../assets/2do_logo.svg'
import { Header, TaskContainer, TaskCounter, TaskHeader, TaskList } from "./styles";
import { Task } from "../../components/Task";
import { NewTaskForm } from '../../components/NewTaskForm';
import { useState } from 'react';
import { EmptyState } from '../../components/EmptyState';

interface Task {
    id: string,
    title: string,
    done: boolean,
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [numberOfTasksDone, setNumberOfTasksDone] = useState(0);

    function handleCreateNewTask(title: string) {
        if (!title) return;

        const now = new Date();
        const id = now.getTime().toString();
        
        const task = {
            id,
            title,
            done: false,
        }
        
        setTasks([task, ...tasks]);
    }

    function handleMarkTaskAsDone(id: string) {
        const tasksUpdated = tasks.map(task => {
            if (task.id === id)
                task.done = !task.done;

            return task;
        });

        setTasks(tasksUpdated);

        setNumberOfTasksDone(
            tasksUpdated.filter(task => task.done).length
        );
    }

    function handleDeleteTask(id: string) {
        const tasksUpdated = tasks.filter(task => {
            if (task.id !== id) {
                return task;
            }
        });

        setTasks(tasksUpdated);

        setNumberOfTasksDone(
            tasksUpdated.filter(task => task.done).length
        );
    }

    return (
        <>
            <Header>
                <img src={logo2do} />
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
                        <span>{numberOfTasksDone} de {tasks.length}</span>
                    </TaskCounter>
                </TaskHeader>
                <TaskList>
                {tasks.length === 0 ? (<EmptyState />) : (<></>)}
                    {tasks.map(task => {
                        if (!task.done) {
                            return (
                                <Task
                                    key={task.id}
                                    done={task.done}
                                    title={task.title}
                                    onChangeCheckbox={() => {handleMarkTaskAsDone(task.id)}}
                                    onClickTrash={() => {handleDeleteTask(task.id)}}
                                />
                            )
                        }
                    })}
                    {tasks.map(task => {
                        if (task.done) {
                            return (
                                <Task
                                    key={task.id}
                                    done={task.done}
                                    title={task.title}
                                    onChangeCheckbox={() => {handleMarkTaskAsDone(task.id)}}
                                    onClickTrash={() => {handleDeleteTask(task.id)}}
                                />
                            )
                        }
                    })}
                </TaskList>
            </TaskContainer>
        </>
    );
}
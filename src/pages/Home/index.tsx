import logo2do from '../../assets/logo.svg'
import { Header, TaskContainer, TaskCounter, TaskHeader, TaskList } from "./styles";
import { Task } from "../../components/Task";
import { NewTaskForm } from '../../components/NewTaskForm';

export function Home() {
    return (
        <>
            <Header>
                <img src={logo2do} alt="" />
                <NewTaskForm onSubmit={() => {console.log('submit')}} /> 
            </Header>

            <TaskContainer>
                <TaskHeader>
                    <TaskCounter>
                        <p id='created'>Tarefas criadas</p>
                        <span>5</span>
                    </TaskCounter>
                    <TaskCounter>
                        <p id='done'>Concluídas</p>
                        <span>2 de 5</span>
                    </TaskCounter>
                </TaskHeader>
                <TaskList>
                    <Task
                        done={false}
                        title="Tarefa 2"
                        onChangeCheckbox={() => {console.log('check 2')}}
                        onClickTrash={() => {console.log('lixo 2')}}
                    />
                    <Task
                        done={true}
                        title="Tarefa 1"
                        onChangeCheckbox={() => {console.log('check 1')}}
                        onClickTrash={() => {console.log('lixo 1')}}
                    />
                </TaskList>
            </TaskContainer>
        </>
    );
}
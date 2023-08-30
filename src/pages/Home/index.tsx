import { PlusCircle } from "@phosphor-icons/react";
import logo2do from '../../assets/logo.svg'
import { Button, FormContainer, Header, Task, TaskContainer, TaskCounter, TaskHeader, TaskInput, TaskList } from "./styles";
import { Checkbox } from "../../components/Checkbox";
import { TrashButton } from "../../components/TrashButton";

export function Home() {
    return (
        <>
            <Header>
                <img src={logo2do} alt="" />

                <FormContainer>
                    <form onSubmit={() => {}} action="">
                        <TaskInput placeholder='Adicione uma nova tarefa' type="text" />
                        <Button>
                            Criar
                            <PlusCircle size={22} />
                        </Button>
                    </form>
                </FormContainer>
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
                    <Task>
                        <Checkbox onChange={() => {console.log('checkbox')}} />
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        <TrashButton onClick={() => {console.log('lixeira')}} />
                    </Task>
                </TaskList>
            </TaskContainer>
        </>
    );
}
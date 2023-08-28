import logo2do from '../../assets/logo.svg'

import { Button, FormContainer, Header, Task, TaskContainer, TaskCounter, TaskHeader, TaskInput, TaskList } from "./styles";

export function Home() {
    return (
        <>
            <Header>
                <img src={logo2do} alt="" />

                <FormContainer>
                    <form onSubmit={() => {}} action="">
                        <TaskInput placeholder='Adicione uma nova tarefa' type="text" />
                        <Button>Criar</Button>
                    </form>
                </FormContainer>
            </Header>
        </>
    );
}
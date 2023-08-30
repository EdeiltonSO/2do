import { PlusCircle } from "@phosphor-icons/react";
import { FormContainer, TaskInput, Button } from './styles';

interface NewTaskFormProps {
    onSubmit: () => void
}

export function NewTaskForm({ onSubmit }: NewTaskFormProps) {
    return (
        <FormContainer>
            <form onSubmit={onSubmit} action="#">
                <TaskInput placeholder='Adicione uma nova tarefa' type="text" />
                <Button>
                    Criar
                    <PlusCircle size={22} />
                </Button>
            </form>
        </FormContainer>
    )
}
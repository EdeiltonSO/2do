import { PlusCircle } from '@phosphor-icons/react'
import { FormContainer, TaskInput, Button } from './styles'
import { ChangeEvent, FormHTMLAttributes, useState } from 'react'

interface NewTaskFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmitFunction: (title: string) => void
}

export function NewTaskForm({
  onSubmitFunction /*, ...props */,
}: NewTaskFormProps) {
  const [inputText, setInputText] = useState('')

  function handleNewTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmitFunction(inputText)
    setInputText('')
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} action="#" /* {...props} */>
        <TaskInput
          placeholder="Adicione uma nova tarefa"
          value={inputText}
          onChange={handleNewTaskTitleChange}
          type="text"
        />
        <Button type="submit" disabled={!inputText}>
          Criar
          <PlusCircle size={22} />
        </Button>
      </form>
    </FormContainer>
  )
}

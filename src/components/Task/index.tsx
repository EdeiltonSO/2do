import { DoneContainer, NotDoneContainer } from './styles';
import { Checkbox } from "../../components/Checkbox";
import { TrashButton } from "../../components/TrashButton";

interface TaskProps {
    done: boolean
    title: string
    onClickTrash: () => void
    onChangeCheckbox: () => void
}

export function Task({ done, title, onClickTrash, onChangeCheckbox }: TaskProps) {
    const Container = done ? DoneContainer : NotDoneContainer;

    return (
        <Container>
            <Checkbox checked={done} onChange={onChangeCheckbox} />
            <p>{title}</p>
            <TrashButton onClick={onClickTrash} />
        </Container>
    )
}
import emptyIcon from '../../assets/empty_icon.svg';
import { Container } from './styles';

export function EmptyState() {
    return (
        <Container>
            <img src={emptyIcon} />
            <strong>Você ainda não tem tarefas cadastradas.</strong>
            <p>Crie tarefas e organize seus itens a fazer.</p>
        </Container>    
    )
}
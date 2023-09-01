import { Trash } from '@phosphor-icons/react'
import { Container } from './styles'

interface TrashButtonProps {
  onClick: () => void
}

export function TrashButton({ onClick }: TrashButtonProps) {
  return (
    <label>
      <Container onClick={onClick}>
        <Trash weight="bold" />
      </Container>
    </label>
  )
}

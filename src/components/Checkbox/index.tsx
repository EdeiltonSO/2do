import { Box } from './styles';

interface CheckboxProps {
    label?: string
    checked?: boolean | undefined
}

export function Checkbox({ label, checked = undefined }: CheckboxProps) {
  return (
    <label>
        <Box checked={checked} />
        { label }
    </label>
  )
}
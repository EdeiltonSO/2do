import { ChangeEventHandler } from 'react';
import { Box } from './styles';

interface CheckboxProps {
    label?: string
    checked?: boolean | undefined
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
  }

export function Checkbox({ label, checked = undefined, onChange }: CheckboxProps) {
  return (
    <label>
        <Box onChange={onChange} checked={checked} />
        { label }
    </label>
  )
}
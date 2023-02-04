import { ComponentProps } from 'react'
import { Input, Prefix, Suffix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  suffix?: string
}

export const TextInput = ({ prefix, suffix, ...props }: TextInputProps) => {
  return (
    <TextInputContainer>
      {Boolean(prefix) && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
      {Boolean(suffix) && <Suffix>{suffix}</Suffix>}
    </TextInputContainer>
  )
}

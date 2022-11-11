import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  color: '$white',
  backgroundColor: '$primary700',
  borderRadius: '$sm',

  variants: {
    size: {
      sm: {
        fontSize: 12,
        padding: '$1 $2',
      },
      md: {
        fontSize: 14,
        padding: '$2 $4',
      },
      lg: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button>

import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ds-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Solid: StoryObj<ButtonProps> = {}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
    children: 'Create new',
  },
}

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
    children: 'Click here',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

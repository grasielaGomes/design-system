import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ds-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
}

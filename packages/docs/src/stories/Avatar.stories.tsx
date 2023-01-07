import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ds-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/grasielaGomes.png',
    alt: 'Grasiela Gomes',
  },
} as Meta<AvatarProps>

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
}
export const Medium: StoryObj<AvatarProps> = {}

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

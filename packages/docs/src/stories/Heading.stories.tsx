import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ds-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomHTMLTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 title',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can use any HTML tag as a heading',
      },
    },
  },
}

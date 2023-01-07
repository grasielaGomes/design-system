import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ds-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    size: {
      control: 'select',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomHTMLTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

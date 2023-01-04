import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ds-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testing Box component</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

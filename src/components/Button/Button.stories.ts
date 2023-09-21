import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const STORY_TEXT = 'Hello storybook!';

export const Default: Story = {
  args: {
    children: STORY_TEXT,
  },
};

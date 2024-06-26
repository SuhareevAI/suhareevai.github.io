import type { Meta } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
export const Primary = {};

// import Tablr from '../components/Tablr';
// import { Tablr } from '../components/Tablr';
import Tablr from './Tablr'

export default {
  title: 'Table',
  component: Tablr,
  argTypes: {
    rows: { control: '' },
    headers: { control: '' }
  },
};

const Template = args => <Tablr {...args} />;

export const TablrDefault = Template.bind({});
TablrDefault.args = {
  rows: [
    ['This', 'is', 'just', 'a', 'test'],
    ['This', 'is', 'also', 'a', 'test'],
    ['Just', 'a', 'little', 'more', 'data'],
    ['Row', 'number', 'four', 'right', 'here'],
  ],
  headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};
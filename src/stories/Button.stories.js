import Button from "../components/Button"

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
  color: "white",
  borderTopRightRadius: "5px",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
  color: "white"
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "yellow",
  label: "Press Me",
  size: "sm",
  color: "white"
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "orange",
  label: "Press Me",
  size: "lg",
  color: "white"
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "purple",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
  color: "white",
}

export const arunBtn = Template.bind({})
arunBtn.args = {
  backgroundColor: "orange",
  label: "hi arun"
}

export const Primary = () => <Button variant='primary' label="test" backgroundColor="red" color="blue" border="2px solid #787888" id="testId">Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>
// import { Button } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom"
import Button from "./components/Button"
import Card from '../src/components/Card'
import ChartsNew from "./components/ChartsNew"
import DatepickerDemo from "./components/DatepickerDemo"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>

    <Button
      backgroundColor="orange"
      handleClick={() => { }}
      label="hi arun"
    />
    <Card />
    <DatepickerDemo
      closeOnScroll
      disabled
      isClearable
      onBlur={() => { }}
      onCalendarClose={function noRefCheck() { }}
      onCalendarOpen={function noRefCheck() { }}
      onChange={function noRefCheck() { }}
      onClickOutside={function noRefCheck() { }}
      onFocus={function noRefCheck() { }}
      onInputClick={function noRefCheck() { }}
      onInputError={function noRefCheck() { }}
      onKeyDown={function noRefCheck() { }}
      onMonthChange={function noRefCheck() { }}
      onSelect={function noRefCheck() { }}
      onYearChange={function noRefCheck() { }}
      placeholderText="I have been cleared!"
      renderDayContents={function noRefCheck() { }}
      selected={new Date("2022-08-17T09:48:42.781Z")}
    />
    <ChartsNew />

    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
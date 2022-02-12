import React from 'react';
import CustomInputNumber from './custom/CustomInputNumber';

const RoomAllocation = () => {
  const [value, setValue] = React.useState(0)
  const [disabled, setDisabled] = React.useState(false)
  const [min, setMin] = React.useState(-10)
  const [max, setMax] = React.useState(10)
  const [step, setStep] = React.useState(1)
  const onChange = e => {
    setValue(e.target.value)
  }
  const onBlur = e => {
    console.log(e.target.value)
  }
  return (
    <div>
      {value}
      <div><input type="checkbox" value={disabled} onChange={e => setDisabled(e.target.checked)} /></div>
      <div>min: <input type="number" value={min} onChange={e => setMin(e.target.value)} /></div>
      <div>max: <input type="number" value={max} onChange={e => setMax(e.target.value)} /></div>
      <div>step: <input type="number" value={step} onChange={e => setStep(e.target.value)} /></div>
      <CustomInputNumber
        value={value}
        max={max}
        min={min}
        step={step}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </div>
  )
}

export default RoomAllocation
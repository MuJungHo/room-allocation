import React, { useRef } from 'react';
import Button from './Button';
const CustomInputNumber = ({
  min,
  max,
  step,
  name,
  value,
  disabled,
  onBlur,
  onChange
}) => {
  let inputRef = useRef();
  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.addEventListener('up', (e) => {
        if (Number(e.target.value) + Number(e.target.step) < e.target.max) {
          e.target.value = Number(e.target.value) + Number(e.target.step)
        } else {
          e.target.value = e.target.max
        }
        onChange(e)
      }, false)
      inputRef.current.addEventListener('down', (e) => {
        if (Number(e.target.value) - Number(e.target.step) > e.target.min) {
          e.target.value = Number(e.target.value) - Number(e.target.step)
        } else {
          e.target.value = e.target.min
        }
        onChange(e)
      }, false)
    }
  }, [])
  return (
    <div className="input-field">
      <Button inputRef={inputRef} disabled={disabled} type="up" />
      <input
        className="box input"
        type="number"
        ref={inputRef}
        min={min}
        max={max}
        step={step}
        name={name}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
      />
      <Button inputRef={inputRef} disabled={disabled} type="down" />
    </div>
  )
}

export default CustomInputNumber
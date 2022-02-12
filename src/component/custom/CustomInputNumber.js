import React, { useRef } from 'react';
import Button from './Button';
const CustomInputNumber = ({
  min,
  max,
  step,
  name,
  value,
  upDisabled,
  downDisabled,
  onBlur,
  onChange
}) => {
  let inputRef = useRef();
  return (
    <div className="input-field">
      <Button inputRef={inputRef} disabled={upDisabled} type="up" />
      <input
        className="box input"
        type="number"
        ref={inputRef}
        min={min}
        max={max}
        step={step}
        name={name}
        value={value}
        disabled={upDisabled || downDisabled}
        onBlur={onBlur}
        onChange={onChange}
      />
      <Button inputRef={inputRef} disabled={downDisabled} type="down" />
    </div>
  )
}

export default CustomInputNumber
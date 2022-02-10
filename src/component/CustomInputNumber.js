import React from 'react';

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

  return (
    <div className="input-field">
      <div className="input-add">+</div>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        name={name}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
      />
      <div className="input-des">-</div>
    </div>
  )
}

export default CustomInputNumber
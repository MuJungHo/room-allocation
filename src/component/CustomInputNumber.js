import React, { useRef } from 'react';
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
        e.target.value = Number(e.target.value) + 1
        onChange(e)
      }, false)
      inputRef.current.addEventListener('down', (e) => {
        e.target.value = Number(e.target.value) - 1
        onChange(e)
      }, false)
    }
  }, [])
  return (
    <div className="input-field">
      <div className="button" onClick={() => inputRef.current.dispatchEvent(new Event('up'))}>+</div>
      <input
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
      <div className="button" onClick={() => inputRef.current.dispatchEvent(new Event('down'))}>-</div>
    </div>
  )
}

export default CustomInputNumber
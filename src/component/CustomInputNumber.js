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
  let intervalID;
  const [isUp, setUp] = React.useState(false)
  const [isDown, setDown] = React.useState(false)
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
  React.useEffect(() => {
    if (isUp) {
      intervalID = setInterval(() => {
        if (inputRef && inputRef.current) inputRef.current.dispatchEvent(new Event('up'))
      }, 100);
    }
    return () => {
      clearInterval(intervalID);
    }
  }, [isUp]);
  React.useEffect(() => {
    if (isDown) {
      intervalID = setInterval(() => {
        if (inputRef && inputRef.current) inputRef.current.dispatchEvent(new Event('down'))
      }, 100);
    }
    return () => {
      clearInterval(intervalID);
    }
  }, [isDown]);
  return (
    <div className="input-field">
      <div className="button" onMouseDown={() => setUp(true)} onMouseMove={() => setUp(false)} onMouseUp={() => setUp(false)}>+</div>
      <input
        className="input"
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
      <div className="button" onMouseDown={() => setDown(true)} onMouseMove={() => setDown(false)} onMouseUp={() => setDown(false)}>-</div>
    </div>
  )
}

export default CustomInputNumber
import React from 'react';

const Button = ({ inputRef, type, disabled }) => {
  const [isPress, setPress] = React.useState(false)
  let intervalID;
  React.useEffect(() => {
    var event = new Event('change', { bubbles: true });
    if (isPress && !disabled) {
      if (inputRef && inputRef.current) {
        type === 'up' ? inputRef.current.stepUp() : inputRef.current.stepDown()
        inputRef.current.dispatchEvent(event);
      }
      intervalID = setInterval(() => {
        if (inputRef && inputRef.current) {
          type === 'up' ? inputRef.current.stepUp() : inputRef.current.stepDown()
          inputRef.current.dispatchEvent(event);
        }
      }, 100);
    }
    return () => {
      clearInterval(intervalID);
    }
  }, [isPress]);
  return (
    <div
      className={`button box ${disabled ? 'disabled' : ''}`}
      onMouseDown={() => setPress(true)}
      onMouseMove={() => setPress(false)}
      onMouseUp={() => setPress(false)}>
      {type}
    </div>
  )
}

export default Button
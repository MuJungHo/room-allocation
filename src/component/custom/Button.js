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
      }, 150);
    }
    return () => {
      clearInterval(intervalID);
    }
  }, [isPress, disabled]);
  return (
    <div
      className={`button box ${disabled ? 'disabled' : ''} ${type === 'up' ? 'add' : ''}`}
      onMouseDown={() => setPress(true)}
      onMouseMove={() => setPress(false)}
      onMouseUp={() => setPress(false)}>
      {type === 'up' ? '+' : '–'}
    </div>
  )
}

export default Button
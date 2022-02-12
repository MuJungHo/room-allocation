import React from 'react';

const Button = ({ inputRef, type, disabled }) => {
  const [isPress, setPress] = React.useState(false)
  let intervalID;
  React.useEffect(() => {
    if (isPress && !disabled) {
      if (inputRef && inputRef.current) inputRef.current.dispatchEvent(new Event(type))
      intervalID = setInterval(() => {
        if (inputRef && inputRef.current) inputRef.current.dispatchEvent(new Event(type))
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
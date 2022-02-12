import React from 'react';
import CustomInputNumber from './custom/CustomInputNumber';

const Room = ({ room, onChange }) => {
  return (
    <div className="room">
      <span>{`房間: ${room.adult + room.child} 人`}</span>
      <div className="flex">
        <div className="spacer">
          <span>大人</span>
        </div>
        <CustomInputNumber
          value={room.adult}
          max={10}
          min={1}
          step={1}
          onChange={e => onChange(e.target.value, 'adult', room)}
        />
      </div>
      <div className="flex">
        <div className="spacer">
          <span>小孩</span>
        </div>
        <CustomInputNumber
          value={room.child}
          max={10}
          min={1}
          step={1}
          onChange={e => onChange(e.target.value, 'child', room)}
        />
      </div>
    </div>
  )
}

export default Room
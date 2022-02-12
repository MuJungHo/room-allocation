import React from 'react';
import RoomAllocation from './component/RoomAllocation';

function App() {

  return (
    <RoomAllocation
      guest={12}
      room={3}
      onChange={result => console.log(result)}
    />
  );
}

export default App;

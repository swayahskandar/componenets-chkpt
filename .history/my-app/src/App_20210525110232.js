import React from 'react'
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'

function App() {
  return (
    <div className="App">
      <div>
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;

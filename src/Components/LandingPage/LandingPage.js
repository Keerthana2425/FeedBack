import React, { useState } from 'react';
import HeaderComp from '../Reusable/HeaderComp';

function LandingPage() {
  const [value, setValue] = useState(0);
  const onTabChange = (e, val) => {
    setValue(val);
  };
  return (
    <div>
      <HeaderComp value={value} onTabChange={onTabChange} />
    </div>
  );
}

export default LandingPage;

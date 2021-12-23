import React, { useEffect, useRef } from 'react';

const MountApp = ({ mount }: { mount: Function }) => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() =>  mount(appRef.current), []);

  return <div ref={appRef} />;
};

export default MountApp;
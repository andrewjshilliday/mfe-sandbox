import React, { useState, useEffect, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export const One = () => <div>Page One</div>;
export const Two = () => <div>Page Two</div>;

const App = () => {
  console.log('app4');

  return (
    <div>
      <h2 style={{ margin: 0 }}>App 4</h2>
      <hr />
      <Link to='one'>One</Link> | <Link to='two'>Two</Link> | <Link to='three'>Three</Link>
      <Suspense fallback={<div>Loading Page</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default App;

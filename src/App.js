import AuthProvider from "./providers/AuthProvider";
import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import 'antd/dist/reset.css';

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route
            path={"/login"}
            Component={React.lazy(() => import("./pages/LoginPage"))}
          />
          <Route
            path={"/map"}
            Component={React.lazy(() => import("./pages/MapPage"))}
          />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;

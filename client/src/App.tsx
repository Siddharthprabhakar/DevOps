import React from "react"
import { useOutlet, useLocation } from "react-router-dom"

import { Header } from "./Header"
import { Landing } from "./Landing"

function App() {

  const outlet = useOutlet()
  const location = useLocation()

  return (
    <div className="flex flex-col">
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        <React.Fragment>
          {outlet || <Landing />}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Header />
          {outlet || <Landing />}
        </React.Fragment>
      )}
    </div>
  );
}

export default App

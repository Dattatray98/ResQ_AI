import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<><SignedIn><Dashboard /></SignedIn><SignedOut>
            <RedirectToSignIn />
          </SignedOut></>} />

        </Routes>
      </Router>
    </>
  )
}

export default App

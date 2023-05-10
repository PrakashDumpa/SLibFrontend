import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Books from "./components/Books";
import TopClips from "./components/TopClips";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import History from "./components/History";
import Layout from "./components/Layout";
import Authenticate from "./components/Authenticate";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRouteForAuth from "./components/ProtectedRouteForAuth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Authenticate />}>
            <Route
              path="/auth/login"
              element={
                <ProtectedRouteForAuth>
                  <Login>login</Login>
                </ProtectedRouteForAuth>
              }
            />
            <Route
              path="/auth/register"
              element={
                <ProtectedRouteForAuth>
                  <Register>register</Register>
                </ProtectedRouteForAuth>
              }
            />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/books-store" element={<Books />} />
            <Route path="/top-clips" element={<TopClips />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/history" element={<History />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

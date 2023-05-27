import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import SignIn from "./pages/auth/Auth";
import { productInputs, userInputs } from './formSource';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<SignIn />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<List type={'users'} />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List type={'products'}/>} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="orders">
              <Route index element={<List type={'orders'}/>} />
              <Route path=":orderId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

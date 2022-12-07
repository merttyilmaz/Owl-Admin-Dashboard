import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/home";
import Login from "pages/login";
import UsersList from "pages/user/list";
import Single from "pages/user/single";
import NewUser from "pages/user/new";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users">
            <Route index element={<UsersList />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<NewUser />} />
          </Route>
          <Route path="/products">
            <Route index element={<UsersList />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<NewUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

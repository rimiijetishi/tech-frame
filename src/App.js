import { Routes, Route } from "react-router-dom";
import Navigtion from "./routes/Navigation/Navigation";
import Checkout from "./routes/Checkout/Checkout";
import Home from "./routes/Home/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigtion/>}>
        <Route index element={<Home/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;


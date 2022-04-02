import "./App.css";

import OrderForm from "./Components/OrderForm";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <OrderForm/>
      <Navbar />
      <Table />
      <Footer />
    </div>
  );
}

export default App;

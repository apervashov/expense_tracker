import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Dashboard from "./Components/DashboardPage/DashboardPage";
import ExpensesPage from "./Components/ExpensesPage/ExpensesPage";
import IncomePage from "./Components/IncomePage/IncomePage";
import './index.css';
function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="expenses" element={<ExpensesPage/>}/>
        <Route path="income" element={<IncomePage/>}/>
      </Routes>
  </BrowserRouter>
  );
};

export default App;

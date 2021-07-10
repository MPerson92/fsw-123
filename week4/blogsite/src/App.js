import {BrowserRouter} from "react-router-dom";
import Header from "./components/container/header"
import Body from "./components/container/body"
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Body />
      </>
    </BrowserRouter> 
  );
}


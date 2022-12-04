import logo from './logo.svg';
import './App.css';
import Stories from './Components/Stories';
import { useGetdata } from "./Components/Contex";
import React from 'react';
import Search from './Components/Search';
import Pagination from './Components/Pagination';


function App() {


  // console.log(variable)
  return (
    <div className="App">
      <h1>|Tech News|</h1>
      <br />
      <Search />
      <br />
      <Pagination />
      <Stories />
    </div>
);
}
export default App;




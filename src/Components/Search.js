import React from 'react'
import { useGetdata } from './Contex';

function Search() {

 const {query,serchdata} = useGetdata();
  return (
    <>
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <h4></h4>
    <input type='text' placeholder="searchNew Here" value={query} onChange={(e)=>{serchdata(e.target.value)}}></input>
    </form>
    </>)
}

export default Search;
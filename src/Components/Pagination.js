import React from 'react'
import { useGetdata } from './Contex'

function Pagination() {

    const{page,nbPages,nextpage,prevpage}=useGetdata()
  return (
    <><div className='button_flex'>
    <button onClick={()=>{prevpage()}}>PREV</button> 
    <h6> {page+1} : {nbPages}</h6>
    <button onClick={()=>{nextpage()}}>NEXT</button>
    </div>
    </>
  )
}

export default Pagination
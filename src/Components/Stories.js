import React from 'react'
import { useGetdata } from './Contex';






function Stories() {
    const { hits, isloading,removeitem } = useGetdata();
    if (isloading) {
        return (<h3>Loadding...</h3>);
    }
    // console.log(data)
    return (
        <>
            <div className='container'>

                <div className='row justify-content-center'>

                    {hits.map((current, index) => {
                        const { author, title, url, objectID, created_at } = current;
                        return (
                            <div className='col-md-10' key={objectID}>
                                <div className="card" >
                                    <div className="card-body" >
                                        <h5 className="card-title">{title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{new Date(created_at).toLocaleString()}</h6>
                                        <p className="card-text">By:{author}</p>
                                        <a href={url} target="_blank" className="btn btn-primary mx-5">ReadMore</a>
                                        <button  className="btn btn-primary mx-5" onClick={()=>{removeitem(objectID)}}>Remove This</button>
                                    </div>
                                </div>
                            </div>
                        );
                            })}
                </div>
            </div>
        </>
    )
}
export default Stories;











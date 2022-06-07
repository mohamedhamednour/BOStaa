import React from 'react';
import '../App.css';
import { IoSearch } from "react-icons/io5";


function Inputs({onkey,onnchange,onclick}) {
    

 
    return (

        <>
          

                    <div className='col-12 col-xl-6'>
                        <input onKeyDown={onkey} onChange={onnchange} /><button onClick={onclick}> <IoSearch/></button>

                    </div>







               


        </>
    );
}

export default Inputs;

import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
export default function Protected(props){
let Cmp = props.cmp
const history = useHistory();

useEffect(()=>{
    if(!localStorage.getItem('et')){
        history.push('./login')
    }   
},[])
return(
    <div>
        <Cmp />
    </div>
)
}
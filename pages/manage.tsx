import React, {useEffect} from 'react';
import Link from "next/link";
import axios from 'axios';

const manage = () => {

    useEffect(() => {
        axios.get('https://pb5twplevd.execute-api.ap-northeast-2.amazonaws.com/Hello-lambda')
        .then((data) => {
            console.log(data);
        })
    })
   return(
       <>
       manage
       </>
   )
}

export default manage;
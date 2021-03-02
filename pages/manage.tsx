import React, {useEffect} from 'react';
import Link from "next/link";
import axios from 'axios';

import url from '../serverconfig';

const manage = () => {

    useEffect(() => {
        axios.get(`${url}dev/list`)
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
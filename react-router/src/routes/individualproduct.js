import React from 'react'

import { useParams } from 'react-router-dom'

import IPComponent from '../components/IPComponent'

export default function Individualproduct() {
    const Params = useParams();
  return (
    <>
        <IPComponent idparam={Params.productsId}/>
        {/* <h1>Hi, im the individual product file in the router folder{Params.productsId}</h1> */}
    </>
  )
}


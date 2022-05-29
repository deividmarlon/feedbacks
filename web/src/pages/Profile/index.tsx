import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom"

export function Profile() {

  const [searchParams, setSearchParams] = useSearchParams();

  const foundPaymentId = searchParams.get('payment_id') || '0';
  const foundStatus = searchParams.get('status') || '';

  function isNumeric(value:string){
      const test = /^-?\d+$/.test(value);
      return test;      
  }

  useEffect(()=>{
    if(isNumeric(foundPaymentId)){
      console.log(foundPaymentId)
    }else{
      console.log('treta')
    }
    console.log(foundStatus)
  },[searchParams])

  return (<h1>Profile: {foundPaymentId}, age: {foundStatus}</h1>)
}

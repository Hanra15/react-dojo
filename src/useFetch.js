import { useState, useEffect } from "react";

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const abortConst = new AbortController();
      setTimeout(() => {
         fetch(url, {signal: abortConst.signal})
            .then(res => {
               if(!res.ok){
                  throw Error('could not fetch data for that resource')
               }
               return res.json();
            })
            .then(data => {
               // console.log(data);
               setData(data);
               setIsPending(false);
               setError(null)
            })
            .catch(err => {
               if(err.name === 'AbortError'){
                  console.log('fetch aborted');
                  
               } else {
                  setIsPending(false)
                  setError(err.message)
               }
            })
            
         }, 1000);
         
      console.log('use effect ran');
      return () => abortConst.abort();
      
   }, [url]);

   return {data, isPending, error}
}

export default useFetch;
import { useEffect } from "react";

function useDocumentTitle() {

 // useEffect(() => {
  //  document.title = pageTitle;
 // }, [pageTitle]);

 useEffect(()=>{
  document.title="Underreacted | Home";

 },[])
}

export default useDocumentTitle;

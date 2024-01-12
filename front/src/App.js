import { useState } from "react";
import MainContext from "./context";
import Router from "./routing/Router";
import {RouterProvider, createBrowserRouter} from "react-router-dom"

const router=createBrowserRouter(Router)

function App() {


  const [data,setData]=useState([])
  const [error, setError] = useState('');
  const[search , setSearch ]=useState('')
const[updatedItem,setUpdateItem]=useState({})
console.log(updatedItem)
  const searchProduct = data.filter(product => product.name.toLowerCase().trim()
  .includes(search.toLowerCase().trim()));


const datas={
  data,setData,
  error,setError,
  search,setSearch,
  updatedItem,setUpdateItem,
  searchProduct
}


  return (
    <>
   
 <MainContext.Provider value={datas}>

     <RouterProvider router={router}/>

     </MainContext.Provider></>

  );
}

export default App;

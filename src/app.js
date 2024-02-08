import { useState ,useEffect } from "react";
import { useFetch } from "./useFetch";
import SecondPage from "./secondPage";
import FirstPage from "./smallPage";
import Layout from "./layout";
import NoPage from "./errorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./formPage";
import {loadData, saveData, creatDatalist, } from "./data";

const linkUrl = "https://jsonplaceholder.typicode.com/photos"
export default function App(){
  const{loading, data, error} = useFetch(linkUrl);
  const [localData ,setLocalData] = useState();
  const [dataList, setDataList] = useState();
    
  useEffect(() =>{
    if(localData){
      setDataList( creatDatalist(localData));       
    }
  },[localData] )

  useEffect(()=>{
    if(data){
    saveData(`ss${data.length}`,data);
    setLocalData( loadData(`ss${data.length}`));
    }
  },[data,error])
    
  return ( 
    dataList?
      <>        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
             <Route index element={<FirstPage dataList = {dataList}/>} />
             <Route path= "SecondPage" element={<SecondPage dataList = {dataList}/>} />
             <Route path="FormPage" element={<Form dataList = {dataList}/>}/>
             <Route path="*" element={<NoPage />} />
           </Route>
          </Routes>
        </BrowserRouter>
      </>:
    <p>loading...</p>
  )
} 

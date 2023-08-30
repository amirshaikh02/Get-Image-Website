// import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./header/Navbar";
import InputBar from "./header/InputBar";
import MainImages from "./header/MainImages";
import ApiKey from "./service/ApiKey";

function App() {
  const [data, setData]=useState([])
  const [text, setText]=useState('');
  const [count, setCount]=useState(32);

  useEffect(()=>{
    if(count <3 || count >200){
      return;
    }

    const getData=async()=>{
      const response= await ApiKey(text,count);
      setData(response.data.hits)
    }
    getData();  


  },[text,count])

  return (
    <div>
      <Navbar/>
      <InputBar setText={setText} setCount={setCount}/>
      <MainImages data={data}/>
    </div>
  );
}

export default App;

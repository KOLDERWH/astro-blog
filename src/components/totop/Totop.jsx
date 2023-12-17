// import {useState} from "@astrojs/preact"
import './Totop.css';
import { useState,useEffect } from 'preact/hooks'

export default function Totop() {
  useEffect(()=>{
    // 需要节流
    window.addEventListener("scroll",()=>{
      window.scrollY>400?setIsshow(true):setIsshow(false);
    })
  },[])
  const [isShow ,setIsshow] = useState(false);
  function toTopClickhandle(){
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  }

	return  <>{isShow && <div class="totop" onClick={toTopClickhandle}></div>}</> 
}

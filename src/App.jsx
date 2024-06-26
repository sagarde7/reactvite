import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [value,setvalue]=useState(0);
  const [count,updatecount]=useState(0);
  const [color,setcolor]=useState("");
// about use effect nothing -> everytime []=> one time [count,color]=> only on change of any one 
//  koi bhi state change hota hai toh pura render hota hai
// return tab hi krna hai jab unmounted ho.

  useEffect(() => {
    
  alert("hello");
  
    
  }, [])
  useEffect(() => {
    
  alert("this is another effect");
  setcolor(prompt("enter color"));
    
  }, [count])
 
  useEffect(() => {
    alert("use effect")
  
    return () => {
      alert("unmounted")
    }
  }, [value])
  
  return (
    <>
    <Navbar color={color}></Navbar>
    <Card title="love 1" img="https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card >
    <Card title="love 2" img="https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card >
    <Card title="love 3" img="https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card >
    <Card title="love 4" img="https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card >
    <Footer></Footer>
    <div className="para">{value} and {count}</div>
    <button className="para" onClick={()=>{
      setvalue(value+1)
      updatecount(count+1)
    }}>Click me</button>
    

    </>
  )
}

export default App

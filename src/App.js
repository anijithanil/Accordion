import { useState } from "react";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
      
    </div>
  );
}

function Accordion({data}) {
  const [currentOpen,setCurrentOpen] = useState(0)

  return <div className="accordion">
    {data.map((ele,key)=><AccordianItem2 num={key} title={ele.title} text={ele.text} open={currentOpen} setOpen={setCurrentOpen}/>)}
  </div>
}

function AccordianItem({num,title,text}){
  const [accord,setAccord]=useState(false)


  return(
    <div onClick={()=>setAccord(!accord)} className={`item ${accord?"open":""}`}>
      <p className="number">{num<9? `0${num+1}`: num+1}</p>
      <p className="title">{title}</p>
      <p  className="icon">{accord?"-":"+"}</p>
      {accord===true && <div className="content-box">{text}</div>}
    </div>
  );
}
function AccordianItem2({num,title,text,open,setOpen}){
  const isopen = open === num
  
  function accorFun(num){
    setOpen(num)
    
  }


  return(
    <div onClick={()=>accorFun(num)} className={`item ${isopen?"open":""}`}>
      <p className="number">{num<9? `0${num+1}`: num+1}</p>
      <p className="title">{title}</p>
      <p  className="icon">{isopen?"-":"+"}</p>
      {isopen && <div className="content-box">{text}</div>}
    </div>
  );
}


import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Input from "./components/input";
import Button from "./components/button";

function App() {
  const [blog,setblog] = useState([
    {
    author: "Fahad",
    title: "My First Blog",
    description: "This is my first blog created using React.",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    author: "Ahmed",
    title: "Learning React",
    description: "React is a JavaScript library used to build user interfaces.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
  author: "Hamza Khan",
  title: "My Journey with React",
  description: "Today I started learning React and built my first blog application.",
  img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
},
  ])

 const [Bauthor, setAuthor] = useState("");
 const [Btitle, setTitle] = useState("");
 const [Bdescription, setDescription] = useState("");
 const [Bimage, setImage] = useState("");


 let addblog = ()=>{
  if(Btitle == "" || Bdescription == "" || Bimage == "" || Bauthor == ""){
    return alert("please fill all inputs")
  }
  let obj = {
   author: Bauthor,
   title: Btitle,
   description: Bdescription,
   img: Bimage,
  }
  blog.push(obj)
  setblog([...blog])
  setAuthor("")
  setTitle("")
  setDescription("")
  setImage("")
 }
  return (
    <>
   <div className="blog-form">
  <Input
    placeholder="Enter Author"
    value={Bauthor}
    onChange={(e) => setAuthor(e.target.value)}
  />

  <Input
    placeholder="Enter Title"
    value={Btitle}
    onChange={(e) => setTitle(e.target.value)}
  />

  <Input
    placeholder="Enter Description"
    value={Bdescription}
    onChange={(e) => setDescription(e.target.value)}
  />

  <Input
    placeholder="Enter Image URL"
    value={Bimage}
    onChange={(e) => setImage(e.target.value)}
  />

  <Button
    title="Add Blog"
    onClick={addblog}
  />
</div>

<div className="blog-container">
  {blog.map((data, indx) => {
    return (
      <div className="blog-card" key={indx}>
        <img src={data.img} alt={data.title} />

        <h1>{data.title}</h1>

        <p>{data.description}</p>

        <h3>By: {data.author}</h3>
      </div>
    );
  })}
</div>
    </>
  )
}

export default App

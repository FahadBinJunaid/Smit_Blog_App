import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Input from "./components/input";
import Button from "./components/button";

function App() {
  const [blog, setblog] = useState([
    {
      author: "Fahad",
      title: "My First Blog",
      description: "This is my first blog created using React.",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      Likes: 0,
      disLikes: 0
    },
    {
      author: "Ahmed",
      title: "Learning React",
      description: "React is a JavaScript library used to build user interfaces.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      Likes: 0,
      disLikes: 0
    },
    {
      author: "Hamza Khan",
      title: "My Journey with React",
      description: "Today I started learning React and built my first blog application.",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      Likes: 0,
      disLikes: 0
    },
  ])

  const [Bauthor, setAuthor] = useState("");
  const [Btitle, setTitle] = useState("");
  const [Bdescription, setDescription] = useState("");
  const [Bimage, setImage] = useState("");

  let addblog = () => {
    if (Btitle == "" || Bdescription == "" || Bimage == "" || Bauthor == "") {
      return alert("please fill all inputs")
    }

    let obj = {
      author: Bauthor,
      title: Btitle,
      description: Bdescription,
      img: Bimage,
      Likes: 0,
      disLikes: 0
    }

    blog.push(obj)
    setblog([...blog])
    setAuthor("")
    setTitle("")
    setDescription("")
    setImage("")
  }

  let Likes = (index) => {
    let arr = [...blog]
    arr[index].Likes = arr[index].Likes + 1
    setblog(arr)
  }

  let disLikes = (index) => {
    let arr = [...blog]
    arr[index].disLikes = arr[index].disLikes + 1
    setblog(arr)
  }

  let deletefunction = (index) => {
    let arr = [...blog]
    arr.splice(index, 1)
    setblog(arr)
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

              <div className="card-buttons">

                <div className="like-button">
                  <Button
                    title={`${data.Likes ? `Likes ${data.Likes}` : "Likes"}`}
                    onClick={() => Likes(indx)}
                  />
                </div>

                <div className="dislike-button">
                  <Button
                    title={`${data.disLikes ? `Dislikes ${data.disLikes}` : "Dislikes"}`}
                    onClick={() => disLikes(indx)}
                  />
                </div>

                <div className="delete-button">
                  <Button
                    title="Delete"
                    onClick={() => deletefunction(indx)}
                  />
                </div>

              </div>

            </div>
          );
        })}

      </div>
    </>
  )
}

export default App
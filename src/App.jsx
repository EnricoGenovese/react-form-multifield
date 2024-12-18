import { useState } from 'react'
import './App.css'
import Header from './components/Header';

const initialData = {
  title: "",
  author: "",
  content: "",
}

export default function App() {
  const [formData, setFormData] = useState(initialData);
  const [posts, setPosts] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setPosts([...posts, formData]);
    setFormData(initialData);
  }

  function handleInput(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value })
  }

  function deletePost(id) {
    const postsLeft = posts.filter((post) => post.id !== id);
    setFormData(postsLeft);
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <form onSubmit={handleSubmit}>
            <input type="text"
              className="form-control my-2"
              name="title"
              value={formData.title}
              onChange={handleInput}
              placeholder="Title" />

            <input type="text"
              className="form-control my-2"
              name="author"
              value={formData.author}
              onChange={handleInput}
              placeholder="Author" />

            <input type="text"
              className="form-control my-2"
              name="content"
              value={formData.content}
              onChange={handleInput}
              placeholder="Content" />

            <button type="submit" className="btn btn-primary">Invia</button>
          </form>
        </section>

        <section>
          <div className='d-flex flex-wrap gy-2 mt-3'>
            {posts.length > 0 ?
              posts.map((post, index) => (
                <div key="index">
                  <h3>{post.title}</h3>
                  <p>{post.author}</p>
                  <p>{post.content}</p>
                </div>
              )
              ) : <p>Non ci sono post disponibilil</p>}
          </div>
        </section>
      </main>

    </>
  )
}

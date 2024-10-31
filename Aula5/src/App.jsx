import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handlePost = () => {
    if (author && comment) {
      const newPost = {
        id: Date.now(),
        author,
        comment,
        likes: 0,
        date: new Date().toLocaleString(), // Adiciona a data e hora formatada
      };
      setPosts([...posts, newPost]);
      setMessage('Um post foi publicado!');
      setAuthor('');
      setComment('');
    }
  };

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="App">
      <h1>Site de Posts</h1>
      <input
        type="text"
        placeholder="Autor do post"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Comentário do post"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handlePost}>Postar</button>
      {message && <p>{message}</p>}
      
      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.author}</h3>
            <p>{post.comment}</p>
            <p>Data e Hora: {post.date}</p> {/* Exibe a data e hora do post */}
            <p>Likes: {post.likes}</p>
            <button onClick={() => handleLike(post.id)}>Dar Like</button>
            <button onClick={() => handleDelete(post.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

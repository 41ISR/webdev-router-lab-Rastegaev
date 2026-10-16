import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/search?query=" + encodeURIComponent(e.target.query.value.trim()))
  }

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </a>

        <nav className="nav">
          <a href="/" className="nav-item">Главная</a>
          <a href="/movies" className="nav-item">Фильмы</a>
          <a href="/about" className="nav-item">О проекте</a>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            name="query" type="text" placeholder="Найти фильм..."
          />
        </form>
      </div>
    </header>
  );
}

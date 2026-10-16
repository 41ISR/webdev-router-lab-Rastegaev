import { Link, useSearchParams } from "react-router-dom";
import { genres } from "../data/movies";

export default function GenreFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get("genre") || ""
  return (
    <div className="genres">
      {genres.map((genre) => (
        <button
          key={genre.id || 'all'}
          type="button"
          className={'genre-btn' + (genre.id === activeCategory ? ' active' : '')}
          onClick={() => setSearchParams(genre.id ? { genre: genre.id } : "")}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
}

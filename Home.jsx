import { useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { movies } from "../data";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <Navbar search={search} setSearch={setSearch} />

      <section className="hero">
        <div className="hero-content">
          <h1>Book tickets for your favorite movies</h1>
          <p>
            Search movies, choose timings, select seats, and confirm bookings.
          </p>
        </div>
      </section>

      <main className="container">
        <h2 className="section-title">Recommended Movies</h2>

        <div className="movie-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p className="empty-text">No movies found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
import { Link } from "react-router";
import "./about.css";

// innehåll i sidan
export function About() {
  return (
    <main className="about-container">
      <h1>Welcome to About</h1>
      <img src="/lisaupperud.jpeg" alt="Picture of Lisa Upperud smiling" />
      {/* lägg till en komponent som en message ? */}
      <p>
        I'm Lisa, a 25 year old from Stockholm, Sweden who is studying to become
        a Fullstack Java Developer.
      </p>
      <Link to={"/"}>Go to Home Page</Link>
    </main>
  );
}

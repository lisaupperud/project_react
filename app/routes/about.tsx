import type { Route } from "./+types/home";
import { About } from "../about/about"; // <--

export function meta({}: Route.MetaArgs) {
  // metadata // lite som head
  return [
    { title: "About Page" }, // <--

    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AboutRoute() {
  // <--

  return <About />; // <--
}

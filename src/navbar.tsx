import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "10px", padding: "20px", backgroundColor: "#f0f0f0" }}>
      <Link to="/typehead">TypeHead</Link> |{" "}
      <Link to="/infinite-scroll">InfiniteScroll</Link> |{" "}
      <Link to="/virtualization">Virtualization</Link>
    </nav>
  );
}
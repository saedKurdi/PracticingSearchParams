import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Link to={"/articles"}>Go to Articles</Link>
    </div>
  );
}

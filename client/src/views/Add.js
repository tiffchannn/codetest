import { Link } from "@reach/router";
import SongForm from "../components/SongForm";

const Add = (props) => {
  return (
    <div>
      <header className="detail-header">
        <div></div>
        <h1>Add Song</h1>
        <p>
          <Link to="/" className="home-link">
            Home
          </Link>
        </p>
      </header>

      <SongForm
        method="post"
        name=""
        url={"/api/song"}
        title=""
        artist=""
        imageUrl=""
        description=""
      />
    </div>
  );
};

export default Add;

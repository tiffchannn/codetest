import { Link } from "@reach/router";
import SongForm from "../components/SongForm";

const Add = (props) => {
  return (
    <div>
      <header className="detail-header">
        <div>
          <Link to="/" className="home-link">
            Home
          </Link>
        </div>
        <div>
          <h1>Add Song</h1>
        </div>
        <div></div>
      </header>

      <SongForm
        method="post"
        url={"/api/song"}
      />
    </div>
  );
};

export default Add;

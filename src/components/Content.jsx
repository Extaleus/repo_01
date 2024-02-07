import "./../css/Content.css";
import SearchBox from "./SearchBox";
import Filters from "./Filters";
import InGameItems from "./InGameItems";

function Content() {
  return (
    <div className="Content">
      <div>
        <h1>Items Tracker</h1>
      </div>
      <SearchBox />
      <Filters />
      <InGameItems />
    </div>
  );
}

export default Content;

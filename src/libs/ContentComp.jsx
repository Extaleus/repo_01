import './../css/ContentComp.css';
import SearchBox from './SearchBoxComp';
import Filters from './FiltersComp';
import InGameItems from './InGameItems';

function Content() {
  return (
    <div className='Content'>
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
import './Content.module.css';
import contentStyle from './Content.module.css'
import SearchBox from '../SearchBox';
import Filters from '../Filters';
import InGameItems from '../InGameItems';

export function Content() {
  console.log(contentStyle);
  return (
    <div className={contentStyle.Content}>
      <div>
        <h1>Items Tracker</h1>
      </div>
      <SearchBox />
      <Filters />
      <InGameItems />
    </div>
  );
}
import contentStyle from './Content.module.css'
import SearchBox from '../SearchBox';
import Filters from '../Filters';
import InGameItems from '../InGameItems';
import "../../App.css";
import "./style.css";

const obj = {
  k: 123,
  t: () => {},
  ['title-k']: 123,
}

export function Content() {
  console.log(obj.title_k);
  return (
    <div className={contentStyle['content-title']}>
      <div className='example'>
        <h1>Items Tracker</h1>
      </div>
      <SearchBox />
      <Filters />
      <InGameItems />
    </div>
  );
}
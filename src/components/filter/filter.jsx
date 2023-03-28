import './filter.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'app/contacts-slicer';

export const Filter = () => {
  const dispatch = useDispatch();
  const setFilters = ev => {
    dispatch(setFilter(ev.target.value));
  };

  return (
    <div className="filter-wrap">
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        className="filter-input"
        autoComplete="off"
        name="search"
        onChange={setFilters}
      />
    </div>
  );
};

import {useState} from 'react'

function SearchHeader({ search }) {

    const [value, setValue] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    search(value);
  };

  const handleChange = (e) => {
   setValue(e.target.value) 
  }

  return (
    <div>
      <form className="m-3 box" onSubmit={handleFormSubmit}>
        <label className="label">What images do you want?</label>
        <input
          className="input is-primary is-hovered"
          type="text"
          placeholder="Type Here..."
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchHeader;

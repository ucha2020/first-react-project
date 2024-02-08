import { useState } from 'react';
import SmallPage from './smallPage';

export default function Form({dataList}) {
  const [number, setNumber] = useState();
  const [imageNumber, setImageNumber] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setImageNumber(number);
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <label>Enter the numbers of images u want to display:
        <input 
          style={{display:'block'}}
          type="number" 
          min="1" 
          max="5"
          required
          step="1" 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    {imageNumber && <SmallPage dataList = {dataList} cardNumber = {imageNumber-1 } save = {true} />}
  </>)
}
import { useState } from 'react';
import './App.css';
import RelishItemsList from './components/RelishItemsList';
import NoRelishItems from './components/NoRelishItems';

function App() {
  const relishArray = [
    { id: 1, name: 'Branston Pickle', description: 'A british pickle that is brown in colour' },
    { id: 2, name: 'Fruit Chutney', description: 'A chutney, surprisingly made of fruits' },
    { id: 3, name: 'Onion Jam', description: 'A sweet chutney made of onions' },
    { id: 4, name: 'Tomato Relish', description: 'A classic made with apples and tomatoes' },
    { id: 5, name: 'Picalilli', description: 'Its a yellow one that tastes weird' },
    { id: 6, name: 'Mango Chutney', description: 'A spicy one, served with Indian currys' },
  ]

  const [ relishItems, setRelishItems ] = useState( relishArray );
  
  const deleteRelish = (id) => {
    const newRelishArray = relishItems.filter((item)=> item.id !== id)
    setRelishItems(newRelishArray)
  }

  return (
    <>
      <h1>Relish Reminder</h1>
      {
        relishArray.length > 0 ? <RelishItemsList relishItems={ relishItems } deleteRelish={ deleteRelish } /> : <NoRelishItems />
      }
    </>
  );
}

export default App;

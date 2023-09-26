import { useBeachData } from '../context/beachDataContext';

const AddBeach = async (email, beach, addBeachToFavorites) => {

  try {
    const result = await fetch('http://localhost:3333/api/addbeach', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, beach })
    });

    if (result.ok) {
      const data = await result.json();
      addBeachToFavorites(data.favBeaches);
    } else {

      console.error('Error adding beach to favorites');
    }
  } catch (error) {
    console.error(error);
  }
};

export default AddBeach;
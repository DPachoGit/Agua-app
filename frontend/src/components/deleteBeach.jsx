import { useBeachData } from '../context/beachDataContext';

const DeleteBeach = async (email, beach, removeBeachFromFavorites) => {

  try {
    const result = await fetch('http://localhost:3333/api/deletebeach', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, beach })
    });

    if (result.ok) {
      const data = await result.json();
      removeBeachFromFavorites(data.favBeaches);
    } else {
      console.error('Error when removing beach from favorites');
    }
  } catch (error) {
    console.error(error);
  }
};

export default DeleteBeach;
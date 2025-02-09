import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import men1 from '../../../assets/man_img_2.jpeg';
import men2 from '../../../assets/man_img_3.jpg';
import men3 from '../../../assets/man_img_4.avif';
import men4 from '../../../assets/man_img_5.jpg';
import men5 from '../../../assets/man_img_6.jpg';
import men6 from '../../../assets/man_img_2.jpeg';

const FoodPage = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Kennington Lane Cafe',
      rating: 4,
      tags: ['american', 'steakhouse', 'seafood'],
      description: 'Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id.',
      image: men1
    },
    {
      id: 2,
      name: 'The Wilmington',
      rating: 5,
      tags: ['american', 'steakhouse', 'seafood'],
      description: 'Vulputate enim nulla aliquet porttitor lacus luctus. Suscipit adipiscing bibendum est ultricies integer.',
      image: men2
    },
    {
      id: 3,
      name: 'Kings Arms',
      rating: 4.5,
      tags: ['american', 'steakhouse', 'seafood'],
      description: 'Tortor at risus viverra adipiscing at in tellus. Cras semper auctor neque vitae tempus.',
      image: men3
    },
    {
      id: 4,
      name: 'The Victoria',
      rating: 4,
      tags: ['american', 'healthy', 'vegetarian'],
      description: 'Egestas sed sed risus pretium quam vulputate dignissim suspendisse.',
      image: men4
    },
    {
      id: 5,
      name: 'Lanes of London',
      rating: 3.5,
      tags: ['american', 'healthy', 'vegetarian'],
      description: 'At erat pellentesque adipiscing commodo elit at imperdiet dui. Suspendisse faucibus interdum posuere.',
      image: men5
    },
    {
      id: 6,
      name: 'The Andover Arms',
      rating: 4.5,
      tags: ['american', 'steakhouse', 'seafood'],
      description: 'Lacus vestibulum sed arcu non odio euismod lacinia at. Id neque aliquam vestibulum morbi.',
      image: men6
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-6 p-4 md:p-16">
      {restaurants.map((restaurant) => (
        <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`} className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex gap-3 md:gap-4 items-start">
          <img src={restaurant.image} alt={restaurant.name} className="w-12 h-12 md:w-16 md:h-16 rounded-lg" />
          <div className="w-full">
            <h2 className="text-base md:text-lg font-bold">{restaurant.name}</h2>
            <div className="flex items-center gap-1 my-1 md:my-2">
              {'★'.repeat(Math.floor(restaurant.rating)).padEnd(5, '☆').split('').map((star, i) => (
                <span key={i} className={star === '★' ? 'text-yellow-500' : 'text-gray-300'}>{star}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 my-1 md:my-2">
              {restaurant.tags.map((tag, i) => (
                <span key={i} className="bg-yellow-100 text-yellow-600 px-2 py-1 text-xs font-bold rounded-full">{tag}</span>
              ))}
            </div>
            <p className="text-gray-600 text-xs md:text-sm break-words">{restaurant.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FoodPage;

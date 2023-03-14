import { useState } from 'react';
import { HomePageData } from '../Data';
import './HomePage.css';

function HeaderHomePage() {
  const [activeItem, setActiveItem] = useState('HOME');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <nav className="HomePageHeader">
        {HomePageData.map((item, index) => (
          <a
            key={index}
            href={item.where}
            style={{ color: activeItem === item.heading ? 'green' : 'white' }}
            onClick={() => handleItemClick(item.heading)}
          >
            {item.heading}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default HeaderHomePage;

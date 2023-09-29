import React, { useState } from 'react';

export default function MoreInfo() {
const [showAdditionalText, setShowAdditionalText] = useState(false);

  const toggleAdditionalText = () => {
    setShowAdditionalText(!showAdditionalText);
  };

  return (
    <div className={`bottom-drawer ${showAdditionalText ? 'expanded' : ''}`}>
      <div className="handle" onClick={toggleAdditionalText}>
        More Info &#x1F43E;
      </div>
      {showAdditionalText && (
        <div className="additional-text">
<p><b>Our commitment to promoting cruelty-free products is rooted in the information we provide.</b></p> 
<p>We source our data from reputable organizations, with a primary reference being PETA. PETA is one of the most well-respected organizations advocating for animal rights and welfare. They maintain an extensive database of brands and companies that adhere to cruelty-free practices.</p>
<p>In addition to sourcing data from PETA, we also gather information from Cruelty-Free Kitty, a unique resource in the world of cruelty-free products. Unlike organizations like PETA or Leaping Bunny, Cruelty-Free Kitty actively reaches out to companies to compile their animal testing policies, ensuring comprehensive coverage.</p>

        </div>
      )}
    </div>
  );
}
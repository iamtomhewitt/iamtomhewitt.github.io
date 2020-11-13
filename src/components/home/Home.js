import React from 'react';

import './Home.scss';

const Home = () => {
  const isMobile = window.innerWidth < 480;
  const getClass = (clazz) => (isMobile ? `${clazz}-mobile` : clazz);

  return (
    <div className={getClass('home')}>
      <div className={getClass('content')}>
        <div className={getClass('text')}>
          <h1>
            Hi, I'm
            <span className="highlight">&nbsp;Tom</span>
            !
          </h1>
          <h2>Software Developer</h2>
          <p>
            I currently work at William Hill, working towards
            <span className="highlight">&nbsp;full-stack development</span>
            , on terminal software for betting shops.
          </p>
          <div className={getClass('spotify')}>
            <h4>Top Spotify Artists</h4>
            <ul>
              <li>Enter Shikari</li>
              <li>STARSET</li>
              <li>Eminem</li>
              <li>Biffy Clyro</li>
              <li>The Naked And Famous</li>
            </ul>
          </div>
        </div>
        {!isMobile && <img src={`${process.env.PUBLIC_URL}/images/home.png`} alt="" />}
      </div>
    </div>
  );
};

export default Home;

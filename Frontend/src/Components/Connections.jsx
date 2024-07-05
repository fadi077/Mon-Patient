import React from 'react';

const Connections = () => {
  return (
    <div className="content">
      <main>
        <div className="header">
          <div className="left">
            <h1>My Staff</h1>
            <ul className="breadcrumb">
              <li><a href="#">Home</a></li>
              <li>/</li>
              <li><a href="#" className="active">My Staff</a></li>
            </ul>
          </div>
          <a href="#" className="report">
            <i className='bx bx-cloud-download'></i>
            <span>Download CSV</span>
          </a>
        </div>

        {/* Insights */}
        <ul className="insights">
          {Array(15).fill().map((_, index) => (
            <li key={index}>
              <img
                src="https://media1.popsugar-assets.com/files/thumbor/z2oE8douA6Oy1wcNih1KTZuSzXs=/fit-in/1584x2374/filters:format_auto():upscale()/2018/08/15/762/n/44701584/b90c94648cd59048_GettyImages-937963226.jpg"
                alt="Dr. Eric"
                className="bx bx-calendar-check"
              />
              <span className="info">
                <h3>Dr. Eric</h3>
                <button className="btn-1">Add Friend</button>
                <button className="btn remove-btn">Remove</button>
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Connections;

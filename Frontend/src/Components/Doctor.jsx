import React from 'react';

const Doctor = () => {
  return (
    <div className="content">
      <main>
        <div className="header">
          <div className="left">
            <h1>My Staff</h1>
            <ul className="breadcrumb">
              <li><a href="#">Home</a></li>
              <li>/</li>
              <li><a href="#" className="active text-red-500">My Staff</a></li>
            </ul>
          </div>
        </div>

        <div className="bottom-data">
          <div className="orders">
            <div className="header">
              <i className='bx bx-receipt'></i>
              <h3>Doctors Nearby You</h3>
              <i className='bx bx-filter'></i>
              <i className='bx bx-search'></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Doctor Name</th>
                  <th className='profession'>Profession</th>
                  <th >Specialization</th>
                  <th>Choose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Haroon Malik</p>
                  </td>
                  <td className='pf'>Doctor</td>
                  <td>Heart</td>
                  <td><button className="send-button">Send</button> <button className="unlink-button">Unlink</button></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Zohaib Jameel</p>
                  </td>
                  <td className='pf'>Doctor</td>
                  <td>Brain</td>
                  <td><button className="send-button">Send</button> <button className="unlink-button">Unlink</button></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Shahnoor Altaf</p>
                  </td>
                  <td className='pf'>Labor</td>
                  <td>Radiology</td>
                  <td><button className="send-button">Send</button> <button className="unlink-button">Unlink</button></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Haroon Malik</p>
                  </td>
                  <td className='pf'>Nurse</td>
                  <td>Heart</td>
                  <td><button className="send-button">Send</button> <button className="unlink-button">Unlink</button></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Zohaib Jameel</p>
                  </td>
                  <td className='pf'>Doctor</td>
                  <td>Brain</td>
                  <td><button className="send-button">Send</button> <button className="unlink-button">Unlink</button></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Shahnoor Altaf</p>
                  </td>
                  <td className='pf'>Labor</td>
                  <td>Radiology</td>
                  <td><button className="send-button">Send</button> <button className="unlink-button">Unlink</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Doctor;

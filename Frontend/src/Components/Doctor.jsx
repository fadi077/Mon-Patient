import React from 'react';

const Doctor = () => {
  return (
    <div className="content">
      <main>
        <div className="header">
          <div className="left">
            <h1>Doctors</h1>
            <ul className="breadcrumb">
              <li><a href="#">Home</a></li>
              <li>/</li>
              <li><a href="#" className="active">Doctors</a></li>
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
                  <th>Specialization</th>
                  <th>Appointment Request</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Haroon Malik</p>
                  </td>
                  <td>Heart</td>
                  <td><span className="status completed">Send</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Zohaib Jameel</p>
                  </td>
                  <td>Brain</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Shahnoor Altaf</p>
                  </td>
                  <td>Radiology</td>
                  <td><span className="status process">Processing</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Haroon Malik</p>
                  </td>
                  <td>Heart</td>
                  <td><span className="status completed">Send</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Zohaib Jameel</p>
                  </td>
                  <td>Brain</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Shahnoor Altaf</p>
                  </td>
                  <td>Radiology</td>
                  <td><span className="status process">Processing</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Haroon Malik</p>
                  </td>
                  <td>Heart</td>
                  <td><span className="status completed">Send</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Zohaib Jameel</p>
                  </td>
                  <td>Brain</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Shahnoor Altaf</p>
                  </td>
                  <td>Radiology</td>
                  <td><span className="status process">Processing</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Haroon Malik</p>
                  </td>
                  <td>Heart</td>
                  <td><span className="status completed">Send</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Zohaib Jameel</p>
                  </td>
                  <td>Brain</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Shahnoor Altaf</p>
                  </td>
                  <td>Radiology</td>
                  <td><span className="status process">Processing</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Haroon Malik</p>
                  </td>
                  <td>Heart</td>
                  <td><span className="status completed">Send</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Zohaib Jameel</p>
                  </td>
                  <td>Brain</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Shahnoor Altaf</p>
                  </td>
                  <td>Radiology</td>
                  <td><span className="status process">Processing</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Haroon Malik</p>
                  </td>
                  <td>Heart</td>
                  <td><span className="status completed">Send</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Zohaib Jameel</p>
                  </td>
                  <td>Brain</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="man.png" alt="Profile"/>
                    <p>Shahnoor Altaf</p>
                  </td>
                  <td>Radiology</td>
                  <td><span className="status process">Processing</span></td>
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

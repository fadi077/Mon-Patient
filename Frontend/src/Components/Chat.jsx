import React from 'react'

function Chat() {
  return (
    <div className="content">
    <main>
      <div className="header">
        <div className="left">
          <h1>Chat</h1>
          <ul className="breadcrumb">
            <li><a href="#">Home</a></li>
            <li>/</li>
            <li><a href="#" className="active">Chat</a></li>
          </ul>
        </div>
        <a href="#" className="report">
          <i className='bx bx-cloud-download'></i>
          <span>Download CSV</span>
        </a>
      </div>

      <div className="bottom-data">
        <div className="orders">
          <div className="header">
            <i className='bx bx-receipt'></i>
            <h3>Recent Orders</h3>
            <i className='bx bx-filter'></i>
            <i className='bx bx-search'></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="man.png" alt="Profile" />
                  <p>Haroon Malik</p>
                </td>
                <td>14-08-2023</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
              <tr>
                <td>
                  <img src="man.png" alt="Profile" />
                  <p>Zohaib Jameel</p>
                </td>
                <td>14-08-2023</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>
                  <img src="man.png" alt="Profile" />
                  <p>Shahnoor Altaf</p>
                </td>
                <td>14-08-2023</td>
                <td><span className="status process">Processing</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Reminders */}
        <div className="reminders">
          <div className="header">
            <i className='bx bx-note'></i>
            <h3>Reminders</h3>
            <i className='bx bx-filter'></i>
            <i className='bx bx-plus'></i>
          </div>
          <ul className="task-list">
            <li className="completed">
              <div className="task-title">
                <i className='bx bx-check-circle'></i>
                <p>Start Our Meeting</p>
              </div>
              <i className='bx bx-dots-vertical-rounded'></i>
            </li>
            <li className="completed">
              <div className="task-title">
                <i className='bx bx-check-circle'></i>
                <p>Analyse Our Site</p>
              </div>
              <i className='bx bx-dots-vertical-rounded'></i>
            </li>
            <li className="not-completed">
              <div className="task-title">
                <i className='bx bx-x-circle'></i>
                <p>Play Football</p>
              </div>
              <i className='bx bx-dots-vertical-rounded'></i>
            </li>
          </ul>
        </div>
        {/* End of Reminders */}
      </div>
    </main>
  </div>
  )
}

export default Chat

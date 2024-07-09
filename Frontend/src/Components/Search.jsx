import React from 'react'

function Search() {
  return (
    <div className="content">
    <main>
        <div className="header">
            <div className="left">
                <h1>Dashboard</h1>
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    {/* <li><a href="#" className="active">Appointment</a></li> */}
                </ul>
            </div>
        </div>

        {/* Insights */}
        <ul className="insights">
            <li>
                <i className='bx bx-calendar-check'></i>
                <span className="info">
                    <h3>1,074</h3>
                    <p>Paid Order</p>
                </span>
            </li>
            <li>
                <i className='bx bx-show-alt'></i>
                <span className="info">
                    <h3>3,944</h3>
                    <p>Site Visit</p>
                </span>
            </li>
            <li>
                <i className='bx bx-line-chart'></i>
                <span className="info">
                    <h3>14,721</h3>
                    <p>Searches</p>
                </span>
            </li>
            <li>
                <i className='bx bx-dollar-circle'></i>
                <span className="info">
                    <h3>$6,742</h3>
                    <p>Total Sales</p>
                </span>
            </li>
        </ul>
        {/* End of Insights */}

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
                                <img src="man.png" alt="Haroon Malik"/>
                                <p>Haroon Malik</p>
                            </td>
                            <td>14-08-2023</td>
                            <td><span className="status completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="man.png" alt="Zohaib Jameel"/>
                                <p>Zohaib Jameel</p>
                            </td>
                            <td>14-08-2023</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="man.png" alt="Shahnoor Altaf"/>
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

export default Search

import React from 'react';

const Appointment = () => {
  return (
    <div className="content">
      <main>
        <div className="header">
          <div className="left">
            <h1>Appointments</h1>
            <ul className="breadcrumb">
              <li><a href="#">Home</a></li>
              <li>/</li>
              <li><a href="#" className="active">Appointments</a></li>
            </ul>
          </div>
          <a href="#" className="report">
            <i className='bx bx-cloud-download'></i>
            <span>Download CSV</span>
          </a>
        </div>

        <div className="bottom-data">
          <div className="reminders">
            <div className="header">
              <i className='bx bx-note'></i>
              <h3>Appointments</h3>
              <i className='bx bx-plus'></i>
            </div>
            <ul className="task-list">
              <li className="completed">
                <div className="task-title">
                  <i className='bx bx-check-circle'></i>
                  <p>Approved (Dr.Shahnoor at 10:00am 6/30/2024)</p>
                </div>
                <i className='bx bx-dots-vertical-rounded'></i>
              </li>
              <li className="completed">
                <div className="task-title">
                  <i className='bx bx-check-circle'></i>
                  <p>Approved (Dr.Zohaib at 8:00pm 6/29/2024)</p>
                </div>
                <i className='bx bx-dots-vertical-rounded'></i>
              </li>
              <li className="not-completed">
                <div className="task-title">
                  <i className='bx bx-x-circle'></i>
                  <p>Declined (Dr.Haroon at 12:00pm 6/29/2024)</p>
                </div>
                <i className='bx bx-dots-vertical-rounded'></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointment;

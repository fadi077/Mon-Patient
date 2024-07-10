import React from 'react'
import '../styles/staff.css';
function Staff() {
  return (
    <div className="content">
    <main>
        <div className="header">
            <div className="left">
                <h1> Our Staff</h1>
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    /
                    <li><a href="#" className="active">My Staff</a></li>
                </ul>
            </div>
        </div>

        {/* Insights */}
        <ul className="insight">
            <li>
                <img className='bx bx-show-alt' src="avatar1.png" alt="Haroon Ameer"/>
                <span className="info">
                    <h3>Haroon Ameer</h3>
                    <p>Physiotherapist</p>
                </span>
            </li>
            <li>
                <img className='bx bx-show-alt' src="avatar2.png" alt="Zohaib Jameel"/>
                <span className="info">
                    <h3>Zohaib Jameel</h3>
                    <p>Physiotherapist</p>
                </span>
            </li>
            <li>
                <img className='bx bx-show-alt' src="avatar3.png" alt="Zainab Khan"/>
                <span className="info">
                    <h3>Zainab Khan</h3>
                    <p>Physiotherapist</p>
                </span>
            </li>
            <li>
                <img className='bx bx-show-alt' src="avatar4.png" alt="Kinza Shah"/>
                <span className="info">
                    <h3>Kinza Shah</h3>
                    <p>Physiotherapist</p>
                </span>
            </li>
            <li>
                <img className='bx bx-show-alt' src="avatar5.png" alt="Shahnoor Altaf"/>
                <span className="info">
                    <h3>Shahnoor Altaf</h3>
                    <p>Mental Case</p>
                </span>
            </li>
            <li>
                <img className='bx bx-show-alt' src="avatar1.png" alt="Awais Salamat"/>
                <span className="info">
                    <h3>Awais Salamat</h3>
                    <p>Physiotherapist</p>
                </span>
            </li>
            <li>
                <img className='bx bx-show-alt' src="avatar2.png" alt="Usman Dogar"/>
                <span className="info">
                    <h3>Usman Dogar</h3>
                    <p>Physiotherapist</p>
                </span>
            </li>
            <li>
                <img className='bx bx-show-alt' src="avatar3.png" alt="Aliza Rajput"/>
                <span className="info">
                    <h3>Aliza Rajput</h3>
                    <p>Physiotherapist</p>
                </span>
            </li>
            <li>
                <img className='bx bx-show-alt' src="avatar4.png" alt="Mah Noor"/>
                <span className="info">
                    <h3>Mah Noor</h3>
                    <p>Physiotherapist</p>
                </span>
            </li>
        </ul>
        {/* End of Insights */}
    </main>
</div>
  )
}

export default Staff

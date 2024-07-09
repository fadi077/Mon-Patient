import React from 'react'

function Documents() {
  return (
    <div className="content">
    

    <main>
        <div className="header">
            <div className="left">
                <h1>Dashboard</h1>
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    /
                    <li><a href="#" className="active">Documents</a></li>
                </ul>
            </div>
        </div>

        <div className="documents">
            <ul>
                <li>
                    <label>Upload your Image:</label>
                    <input type="file" className="file" accept="image/*" />
                </li>
                <li>
                    <label>Upload your Degree:</label>
                    <input type="file" className="file" accept="image/*" />
                </li>
                <li>
                    <label>Upload your Certificate:</label>
                    <input type="file" className="file" accept="image/*" />
                </li>
                <li>
                    <a href="#">
                        <button className="button1">Submit</button>
                    </a>
                </li>
            </ul>
        </div>
    </main>
</div>
  )
}

export default Documents

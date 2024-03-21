import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                    <Link to="/states" className="link">Yabut</Link>
                    </li>
                    <li>
                        {/* Effect  */}
                    <Link to="/effect" className="link">Ola</Link>
                    </li>
                    <li>
                        {/* Map */}
                        <Link to="/map" className="link">Wenceslao</Link>
                    </li>
                    <li>
                        <Link to="/hooks" className="link">Samson</Link>
                    </li>
                    <li>
                        <Link to="/error" className="link">Sabinano</Link>
                    </li>
                    <li>
                        <Link to="/error2" className="link">Dela Cruz</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav
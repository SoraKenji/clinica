import React, { Component } from 'react';

class Topbar extends Component {
  render() {
    return (
        <div className="navbar navbar-fixed-top">
            <div className="navbar-inner">
                <div className="container-fluid">   
                    <a className="brand" href="#">Sistema</a>
                    <div className="nav-collapse">
                        <ul className="nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Topbar;

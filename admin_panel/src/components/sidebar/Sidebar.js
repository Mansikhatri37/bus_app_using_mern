import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <nav className="navbar-default navbar-static-side" role="navigation">
            {/* <div className="sidebar-collapse"> */}
            <ul className="nav metismenu" id="side-menu">
                <li className="nav-header">
                    {/* You can add profile-related elements here if needed */}
                    <div className="dropdown profile-element">
                        {/* <span>
                        </span>
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
                            </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>
                        <ul className="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a href="#"> Logout</a></li>
                        </ul> */}
                    </div>
                    <div className="logo-element">
                        G
                    </div>
                </li>
                <li>
                    <NavLink to="/" exact="true" className="nav-link" activeClassName="active">
                        <i className="fa fa-th-large" />
                        <span className="nav-label">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" className="nav-link" activeClassName="active">
                        <i className="fa fa-users" />
                        <span className="nav-label">Users</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/operator" className="nav-link" activeClassName="active">
                        <i className="fa fa-bar-chart-o" />
                        <span className="nav-label">Operator</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/buses" className="nav-link" activeClassName="active">
                        <i className="fa fa-envelope" />
                        <span className="nav-label">Buses</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/expense" className="nav-link" activeClassName="active">
                        <i className="fa fa-laptop" />
                        <span className="nav-label">Expense</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className="nav-link" activeClassName="active">
                        <i className="fa fa-shopping-cart" />
                        <span className="nav-label">Setting</span>
                        <span className="fa arrow" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" className="nav-link" activeClassName="active">
                        <i className="fa fa-picture-o" />
                        <span className="nav-label">Gallery</span>
                        <span className="fa arrow" />
                    </NavLink>
                </li>
            </ul>
            {/* </div> */}
        </nav>
    );
}

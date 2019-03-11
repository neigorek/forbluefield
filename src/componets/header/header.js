import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './header.css'
export default class Header extends Component{

    render() {

        return(
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to={'/table'} >Table</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/bar'}>Bar</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/calc'} >Calc</Link>
                </li>

            </ul>
        )
    }

}
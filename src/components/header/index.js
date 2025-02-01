import './header.css';
import React from 'react';
import navLogo from '../../common/images/preview-xl-bl.jpg';

export default function Header(){
    return (
        <div>
            <nav style={{border: 0}} className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src={navLogo} className="wd-45-px navbar-brand"/>
                        <a className="navbar-brand" href="/">Music Bar Kristy</a>
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#example-navbar-collapse">
                            <span className="sr-only">切换导航</span>s
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse text-center" id="example-navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="/information">Information</a></li>
                            <li><a href="/aboutBar">About Bar</a></li>
                            <li><a href="/drinkMenu">Drink Menu</a></li>
                            <li><a href="/barLink">link</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
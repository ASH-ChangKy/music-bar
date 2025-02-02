import './header.css';
import React from 'react';
import navLogo from '../../common/images/preview-xl-bl.jpg';

const envType = process.env.NODE_ENV === 'production';
console.log(envType);
export default function Header(){
    return (
        <div>
            <nav style={{border: 0}} className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src={navLogo} className="wd-45-px navbar-brand"/>
                        <a className="navbar-brand" href={envType?"/music-bar/#/":"/"}>Music Bar Kristy</a>
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
                            <li><a href={envType?"/music-bar/information":"/information"}>Information</a></li>
                            <li><a href={envType?"/music-bar/aboutBar":"/aboutBar"}>About Bar</a></li>
                            <li><a href={envType?"/music-bar/drinkMenu":"/drinkMenu"}>Drink Menu</a></li>
                            <li><a href={envType?"/music-bar/barLink":"/barLink"}>link</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
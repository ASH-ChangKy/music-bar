import './header.css';
import react from 'react';
export default function Header(){

    return (
        <div>
            <nav style={{border: 0}} className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src="./img/preview-xl-bl.jpg" className="wd-45-px navbar-brand"/>
                        <a className="navbar-brand" href="#">Music Bar Kristy</a>
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#example-navbar-collapse">
                            <span className="sr-only">切换导航</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse text-center" id="example-navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li id=""><a href="#">Information</a></li>
                            <li><a href="#">About Bar</a></li>
                            <li><a href="#">Drink Memu</a></li>
                            <li><a href="#">link</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
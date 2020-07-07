import React from 'react';
import './style.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

export function Gallery(props) {
    let draw = [];
    props = props.props
    for (let i = 0; i < props.length; i++) {
        draw.push(
            <div key={(i)} className="col-md-4 image">
                <a href={"amiibo/" + props[i].tail}>
                    <div className="thumbnail">
                        <img src={props[i].image} alt="Lights"
                             style={{height: '200px', width: '120px'}}/>
                        <div className="caption"><p>{props[i].name}</p></div>
                    </div>
                </a>
            </div>
        );
    }
    return (
        <PerfectScrollbar component="div">
            <div className="container content">
                <div className="row">
                    {draw}
                </div>
            </div>
        </PerfectScrollbar>

    );
}

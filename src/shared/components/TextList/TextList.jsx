import React from 'react';
import './TextList.scss'

export function TextList (props) {
    return (
        <div className="c-text-list">
            <div className="c-text-list__container">
                {props.texts.map((item, index) =>
                        <div className="c-text-list__item" key={index}>
                            <h4 className="c-text-list__caption">{item.name}</h4>
                        </div>
                )}
            </div>
        </div>
    );
}


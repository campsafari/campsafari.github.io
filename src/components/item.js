import React from 'react';

function Item ({title, subtitle, date, details, description, link}){
    return (
        <div className={'item bottom-space-large'}>
            <h2 className={'headline-level-2 bottom-space-small'}>{title}</h2>
            <h3 className={'headline-level-3 bottom-space-small'}>{subtitle}</h3>
            <div className={'headline-level-4 bottom-space-tiny'}>{date}</div>
            {details && (
                <div className={'text-small bottom-space-tiny'}>{details}</div>
            )}
            {description && (
                <div className={'text-small bottom-space-tiny'}>{description}</div>
            )}
            {link && (
                <a className={'item-link'} href={link}>Link</a>
            )}
        </div>
    )
}


export default Item;


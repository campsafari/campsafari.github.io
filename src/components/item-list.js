import React from 'react';

function ItemList ({title, items, renderItem}){
    return (
        <section className={'section bottom-space-xlarge'}>
            <header className={'headline-level-1 bottom-space-large'}>{title}</header>
            <div className={'item-list'}>
                {items.map((item, index) => (
                    renderItem(item, index)
                ))}
            </div>
        </section>
    )
}

export default ItemList;


import React from 'react'

function ItemGrid( { title, items, renderItem } ) {
    return (
        <section className={ 'section bottom-space-xlarge' }>
            <header className={ 'headline-level-1 bottom-space-large' }>{ title }</header>
            <div className={ 'item-grid' }>
                { items.map( ( item, index ) => (
                    <div className="cell">
                        {renderItem(item, index)}
                    </div>
                ) ) }
            </div>
        </section>
    )
}

export default ItemGrid


import React from 'react'
import './App.scss'
import Portfolio from './data'
import ItemList from './components/item-list'
import ItemGrid from './components/item-grid'
import Item from './components/item'

const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OKT',
    'NOV',
    'DEZ',
]

function formatDate( datestr ) {
    if ( datestr ) {
        const date = new Date( datestr )
        return `${ months[date.getMonth()] } ${ date.getFullYear() }`
    }
    return ''
}


function App() {
    return (
        <div className="app">
            <section className="section bottom-space-xlarge flex-container flex-dir-row">
                <div className={ 'info-box bottom-space-large right-space-small' }>
                    <div>
                        <h2 className={ 'info-name' }>{ Portfolio.info.name }</h2>
                        <div>{ Portfolio.info.date }</div>
                        <div>{ Portfolio.info.address }</div>
                        <div>{ Portfolio.info.zip } { Portfolio.info.city }</div>
                        <div>{ Portfolio.info.country }</div>
                    </div>
                </div>

                <div className={'horizontal-pad-small'}>
                    <h2 className={ 'headline-level-1 top-space-medium bottom-space-medium' }>Expertise</h2>
                    <div className={ 'text-small' }>{ Portfolio.info.interests }</div>
                    <div className={ 'text-small' }>{ Portfolio.info.tooling }</div>
                </div>
                <div className={'horizontal-pad-small'}>
                    <h2 className={ 'headline-level-1 top-space-medium bottom-space-medium' }>Contact</h2>
                    <div className={ 'text-small' }><a href={"https://www.linkedin.com/in/daniel-schillat-a79464100/"} target={'blank'}>LinkedIn</a></div>
                    <div className={ 'text-small' }><a href={"https://www.xing.com/profile/Daniel_Schillat"} target={'blank'}>XING</a></div>
                </div>
            </section>


            <ItemGrid
                title={ Portfolio.roles.title }
                items={ Portfolio.roles.items }
                renderItem={ ( item, index ) => (
                    <Item
                        key={ index }
                        title={ item.company }
                        subtitle={ item.role }
                        date={ `${ formatDate( item.from ) } - ${ formatDate( item.to ) }` }
                    />
                ) }
            />
            <ItemGrid
                title={ Portfolio.projects.title }
                items={ Portfolio.projects.items }
                renderItem={ ( item, index ) => (
                    <Item
                        key={ index }
                        title={ item.title }
                        subtitle={ item.role }
                        date={ `${ formatDate( item.from ) } - ${ formatDate( item.to ) }` }
                        details={ 'Tools: ' + item.tools }
                        description={ item.description }
                        link={ item.link }
                    />
                ) }
            />
            <ItemGrid
                title={ Portfolio.awards.title }
                items={ Portfolio.awards.items }
                renderItem={ ( item, index ) => (
                    <Item
                        key={ index }
                        title={ item.title }
                        subtitle={ item.project }
                        date={ formatDate( item.date ) }
                        details={ item.description }
                    />
                ) }
            />
        </div>
    )
}

export default App

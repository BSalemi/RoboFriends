import React from 'react';
import Card from './Card.js'
import { robots } from './robots.js'

class CardList extends React.Component {

    generateRobotCards = () => {
        const roboCards = robots.map(bot => {
            return <Card id={bot.id} name={bot.name} email={bot.email}/>
        })
        return roboCards
    }

    render(){
        return(
            <div>
               {this.generateRobotCards()}
            </div>
        )
    }
}

export default CardList
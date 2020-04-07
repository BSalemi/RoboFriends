import React from 'react';
import Card from './Card.js'
import { robots } from './robots.js'

class CardList extends React.Component {

    generateRobotCards = () => {
        const roboCards = robots.map(bot => {
            return <Card key={bot.id} id={bot.id} name={bot.name} username={bot.username} email={bot.email}/>
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
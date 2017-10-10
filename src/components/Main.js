import React, { Component } from 'react';
import Header from './Header';
import Stage from './Stage';
import WorkStation from './WorkStation';


class Main extends Component {
    constructor(props) {
        super(props);


        this.state = {
            categoryList: ["playground", "food", "classroom"],
            cards: [{
                    "title": "Train",
                    "img": "images/svg_icons/train.svg",
                    "type": "regular",
                    "categories": ["food"]
                },

                {
                    "title": "Pancakes",
                    "img": "images/svg_icons/pancakes.svg",
                    "type": "regular",
                    "categories": ["food"]
                }, {
                    "title": "baseball",
                    "img": "images/svg_icons/baseball.svg",
                    "type": "regular",
                    "categories": ["playground"]
                }, {
                    "title": "key",
                    "img": "./images/svg_icons/key.svg",
                    "type": "regular",
                    "categories": ["classroom"]
                }, {
                    "title": "doggo",
                    "img": "images/svg_icons/computer.svg",
                    "type": "regular",
                    "categories": ["playground"]
                }, {
                    "title": "gato",
                    "img": "images/svg_icons/scooter.svg",
                    "type": "regular",
                    "categories": ["playground"]
                }, {
                    "title": "sandal",
                    "img": "images/svg_icons/shoe.svg",
                    "type": "regular",
                    "categories": ["classroom"]
                }, {
                    "title": "computer",
                    "img": "images/svg_icons/computer.svg",
                    "type": "regular",
                    "categories": ["classroom"]
                }, {
                    "title": "scooter",
                    "img": "images/svg_icons/scooter.svg",
                    "type": "regular",
                    "categories": ["playground"]
                }, {
                    "title": "shoe",
                    "img": "images/svg_icons/shoe.svg",
                    "type": "regular",
                    "categories": "classroom"
                }, {
                    "title": "Avocodo",
                    "img": "images/svg_icons/Avacodo.svg",
                    "type": "regular",
                    "categories": ["food"]
                }, {
                    "title": "Thank You",
                    "img": "images/svg_icons/Thankyou.svg",
                    "type": "regular",
                    "categories": ["classroom"]
                }
            ]
        }
        this.getCards = this.getCards.bind(this);
        this.deleteCards = this.deleteCards.bind(this);
    }

    getCards(type, query) {
        let newStack = [];
        if (type === "all") {
            for (var y = 0; y < this.state.cards.length; y++) {
                newStack.push(this.state.cards[y]);
            }
        } else if (type === "categories") {
            for (var x = 0; x < this.state.cards.length; x++) {
                if (this.state.cards[x].categories.includes(query)) {
                    newStack.push(this.state.cards[x]);
                }
            }
        } else if (type === "title") {
            for (var a = 0; a < this.state.cards.length; a++) {
                if (this.state.cards[a].title.includes(query)) {
                    newStack.push(this.state.cards[a]);
                }
            }
        }
        return newStack;
    }

    deleteCards(cardList, category) {

        for (var x = 0; x < cardList.length; x++) {
            for (var y = 0; y < this.state.cards.length; y++) {
                if (this.state.cards[y].title === cardList[x]) {
                    if (this.state.cards[y].categories.includes(category)) {
                        let cardCategory = this.state.cards[y].categories;
                        this.setState({
                            cardCategory: cardCategory.splice(cardCategory.indexOf(category), 1)
                        });
                    }
                }
            }
        }
    }
    addCard(card,category){
        console.log(card);
        console.log(category);

        let cardList = this.state.cards;
        console.log(cardList);
        this.setState({cardList:cardList.push(
            {
                "title": card,
                "img": "images/svg_icons/scooter.svg",
                "type": "regular",
                "categories": [category]
            }
        )});
    }
    render() {
		return(
			<div id="main">
				<Header categories={this.state.categoryList} 
                addCard={(card,category) => this.addCard(card,category)} 
                deleteCards={(cardList,category) => this.deleteCards(cardList,category)} 
                cards={this.getCards} 
                inSideNavChange={this.props.onSideNavChange} />
				<Stage />
				<WorkStation />
			</div>
		);
	}

}
export default Main;
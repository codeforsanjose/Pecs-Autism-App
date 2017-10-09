import React, { Component } from 'react';
import DialogHeader from './DialogHeader';
import Hero from './Hero';
import DialogItem from './DialogItem';
import Card from './Card';
import Modal from './Modal';



class FullScreenDialog extends Component {
    constructor(props) {
        super(props);

        this.deleteBox = [];
        this.state = {
            selectedBox: [],
            showWindow: false,
            settings_window: "",
            window_type: "settings",
            addItem_prompt:false,
        }
        this.categoryClick = this.categoryClick.bind(this);
        this.exitSettings = this.exitSettings.bind(this);
        this.goBacktoSettings = this.goBacktoSettings.bind(this);
        this.addToDeleteBox = this.addToDeleteBox.bind(this);
        this.cardClick = this.cardClick.bind(this);
        this.removeFromDeleteBox = this.removeFromDeleteBox.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
        this.addItemPrompt = this.addItemPrompt.bind(this);
    };

    addItemPrompt(){
        this.setState({addItem_prompt:true});
        console.log(this.state.addItem_prompt);
    }

    exitSettings() {
        this.props.clickHandle();
        this.setState({
            showWindow: false,
            settings_window: "",
            window_type: "settings"
        });
        let container = document.getElementById('DialogItem_container');
        container.style.display = "block";
    }

    goBacktoSettings() {
        this.setState({
            showWindow: false,
            settings_window: "",
            window_type: "settings"
        });
        let container = document.getElementById('DialogItem_container');
        container.style.display = "block";
        let card_containers = document.getElementById('card_container');
        card_containers.style.display = "none";
    }

    cardClick(cardTitle) {
        if (this.state.selectedBox.includes(cardTitle)) {
            this.removeFromDeleteBox(cardTitle);
        } else {
            this.addToDeleteBox(cardTitle);
        }
        console.log(this.deleteBox);
    }

    removeFromDeleteBox(cardTitle) {
        console.log("HOLLY");
        this.setState({
            seletedBox: this.state.selectedBox.splice(this.state.selectedBox.indexOf(cardTitle), 1)
        });
        this.deleteBox.splice(this.state.selectedBox.indexOf(cardTitle), 1);
    }

    addToDeleteBox(cardTitle) {
        this.setState({
            seletedBox: this.state.selectedBox.push(cardTitle)
        });
        this.deleteBox.push(cardTitle);

    }

    categoryClick(e, query) {
        let card_containers = document.getElementById('card_container');
        card_containers.style.display = "block";
        this.setState({
            showWindow: true,
            settings_window: query,
            window_type: "category"
        });

    }

    deleteItems() {
        this.props.deleteCards(this.deleteBox, this.state.settings_window);
    }
    render() {
            let addItem_modal;

            let settingsItems = [{
                "title": "Edit Profile",
                "icon": "fa-pencil-square-o"
            }, {
                "title": "Add Category",
                "icon": "fa-plus"
            }];

            let categoryItems = [{
                    "title": "Go Back",
                    "action": this.goBacktoSettings,
                    "icon": "fa-long-arrow-left"
                },

                {
                    "title": "Delete Item",
                    "action": this.deleteItems,
                    "icon": "fa-trash-o"
                },


                {
                    "title": "Add Item",
                    "action": this.addItemPrompt,
                    "icon": "fa-plus"
                }
            ];


            let categoriesArray = this.props.categories.map((category) => {
                        return ( < DialogItem key = {
                                category
                            }
                            clickHandle = {
                                e => this.categoryClick(e, category)
                            }
                            title = {
                                category
                            }
                            stats = {
                                this.props.cards("categories", category).length
                            }
                            />);
                        });


                    let photos;
        if (this.state.addItem_prompt){
            addItem_modal = <Modal>sfs</Modal>;
        }
        if (!this.state.showWindow) {}
		else{
			let container = document.getElementById('DialogItem_container');
			container.style.display="none";
			let returnedArray = this.props.cards("categories",this.state.settings_window);
			let card = returnedArray.map((card) => {
		      return (<Card key={card.title} 
		      				 clickHandle={() => this.cardClick(card.title)} 
		      				 title={card.title} 
		      				 img={card.img} 
		      				 isActive={this.state.selectedBox} />);

			});

			photos = <div className="card-grid">
						{card}
					</div>;
		}
		return(
			<div id = "fsd" className="fullScreenDialog">
                {addItem_modal}
				<DialogHeader clickHandle={this.exitSettings} title="Settings"/>
				<Hero 
					settingsItems = {settingsItems}
					categoryItems = {categoryItems} 
					windowType = {this.state.window_type}/>
				<div className="DialogBody">
					<div id="card_container">
							{photos}
					</div>
					<div id="DialogItem_container" className="container">
						{categoriesArray}
					</div>
				</div>
			</div>
		);
	}
}

export default FullScreenDialog;

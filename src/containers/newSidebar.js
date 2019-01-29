import React from 'react';
import { Link } from 'react-router-dom';

class NewSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[{title: "Титульный лист", type: "titlePage", active: true}],
            activeItem: 0
        };
    }
    onButtonAdd(type) {
         let currentItems = this.state.items;
         let activeItemIndex = this.state.activeItem;
         currentItems[activeItemIndex].active = false;
         let newElement = {title: type==="unit" ? "Новая глава" : "Новый раздел",
             type,
             active: true
         };
         let newItems = [...currentItems.slice(0, activeItemIndex+1),
                        newElement,
                        ...currentItems.slice(activeItemIndex+1)];
        this.setState({
            items: newItems,
            activeItem: activeItemIndex+1
        });
    }
    //
    onEditItemActive(updateActiveItem) {
        let updateItems = this.state.items;
        let currentActiveItem = this.state.activeItem;
        updateItems[currentActiveItem].active = false;
        updateItems[updateActiveItem].active = true;
        this.setState({
            items: updateItems,
            activeItem: updateActiveItem
        })
    }

    render() {
        let newSidebar = this.state.items.map( (item, index) => {
            let liClassName = (item.type === "unit"||item.type === "titlePage") ? ("sidebar__list-item") : ("list-item-padding sidebar__list-item");
            return (
                <li>
                    <Link to = {index===0 ? "/createNewCourse/6/"+ item.type +"/0" :"/createNewCourse/6/" + item.type +"/" + index}>
                        <li key={"pagId" + index} onClick={this.onEditItemActive.bind(this, index)} className={liClassName}>
                            {(item.type === "unit"||item.type === "titlePage") ? item.title : String.fromCharCode(8226)+ " " + item.title }
                         </li>
                    </Link>
                    {item.active ?
                        (<div className="sidebar__button-container">
                            <button onClick={this.onButtonAdd.bind(this, "unit")} type="button" className="button-container__btn">
                                Добавить главу
                            </button>
                            <button onClick={this.onButtonAdd.bind(this, "section")} type="button" className="button-container__btn">
                                Добавить раздел
                            </button>
                        </div>) : false}
                </li>
            )}
        );

        return (
            <div className="sidebar">
                <ul>
                    {newSidebar}
                </ul>
            </div>
        )
    }
}

export default NewSidebar;

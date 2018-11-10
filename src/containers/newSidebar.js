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
        // type === "unit" ? this.props.createUnit(newGuid) : this.props.createSection(newGuid);
        // let currentItems = this.state.items;
        // let activeItemIndex = this.state.activeItem;
        // currentItems[activeItemIndex].active = false;
        // let newElement = {title: type==="unit" ? "Новая глава" : "Новый раздел",
        //     type,
        //     active: true,
        //     id: newGuid
        // };
        // currentItems.splice(activeItemIndex+1, 0, newElement);
        // this.setState({
        //     items: currentItems,
        //     activeItem: activeItemIndex+1,
        //     id: newGuid
        // });
    }
    //
    onEditItemActive(updateActiveItem) {
        console.log("onButtonAdd", updateActiveItem)
    }
    //     let updateItems = this.state.items;
    //     let currentActiveItem = this.state.activeItem;
    //     updateItems[updateActiveItem].active = true;
    //     updateItems[currentActiveItem].active = false;
    //     this.setState({
    //         items: updateItems,
    //         activeItem: updateActiveItem
    //     })
    // }

    render() {
        let newSidebar = this.state.items.map( (item, index) => {
            return (
                <li>
                    <Link to = {index===0 ? "/new_course/6/page/1" :"/new_course/6/page/" + index}>
                        <li onClick={this.onEditItemActive.bind(this, index)} className="list-group-item list-group-item-action">{item.title}</li>
                    </Link>
                    {item.active ?
                        (<div className="mx-2 sidebar-button-container">
                            <button onClick={this.onButtonAdd.bind(this, "unit")} type="button" className="btn btn-outline-secondary sidebar-button">
                                + Глава
                            </button>
                            <button onClick={this.onButtonAdd.bind(this, "section")} type="button" className="btn btn-outline-secondary sidebar-button">
                                + Раздел
                            </button>
                        </div>) : false}
                </li>
            )}
        );

        return (
            <div className="col-sm-3 col-md-2 bg-light sidebar">
                <ul className="list-group list-courses">
                    {newSidebar}
                </ul>
            </div>
        )
    }
}

export default NewSidebar;
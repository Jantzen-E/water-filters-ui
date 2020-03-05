import React from "react";

class FiltrationListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.handleDelete(this.props.item._id);
        
    }

    handleEdit() {
        this.props.handleEdit(this.props.item);
    }

    render() {
        return (            
            <div className="list">
                <ul className="listStyleType">
                    <li className="itemName">{ this.props.item.name }</li>
                    <li className="itemType">Type: { this.props.item.type }</li>
                    <li className="itemPrice">Price: { this.props.item.price }</li>
                    <div className="itemButtons">
                        <li>
                            <button className="visitPageButton">
                                <a
                                    href= { this.props.item.URL }>Visit page
                                   
                                </a>
                            </button>
                        </li>
                        <li>
                            <button 
                                className="edit"
                                onClick={ this.handleEdit}
                                >Edit
                            </button>
                        </li>
                        <li>
                            <button 
                                className="delete"
                                onClick={ this.handleDelete }
                            >
                                Delete
                            </button>
                        </li>
                    </div>
                </ul>
                <a href= { this.props.item.URL }>
                    <img
                        src={ this.props.item.imgURL }
                        alt={ this.props.item.name }
                        className="filterImage"
                    />
                </a>
            </div>   
        );
    }
}

export default FiltrationListItem;
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
                    <li>Name: { this.props.item.name }</li>
                    <li>Type: { this.props.item.type }</li>
                    <li>Price: { this.props.item.price }</li>
                    <li>
                        <button>
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
                </ul>
            </div>   
        );
    }
}

export default FiltrationListItem;
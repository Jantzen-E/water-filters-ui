import React from "react";
import Modal from './Modal';

class FiltrationListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    handleDelete() {
        this.props.handleDelete(this.props.item._id);
        
    }

    handleEdit() {
        this.props.handleEdit(this.props.item);
    }

    showModal(e) {
        this.setState({
            show: !this.state.show
        });
    };

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
                                onClick={e => {this.showModal(e)}}
                                /* onClick={ this.handleDelete } */
                            >
                                Delete
                            </button>
                            <Modal onClose={this.showModal} show={this.state.show}/>
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
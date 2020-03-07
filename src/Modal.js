import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";

class Modal extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.handleDelete = this.handleDelete.bind(this);
    // }
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    // handleDelete() {
    //     this.props.handleDelete(this.props.item._id);
    // }

    render() {
        if(!this.props.show) {
            return null;
        }
        return (
            <div className="modal" id="modal">
                <h2>Are you sure you want to delete this item?</h2>
                <div className="content">To delete this item permanently, click yes.  To go back, click no.
                </div>
                <div className="actions">
                    <button className="toggle-button1" onClick={ this.handleDelete } id="yes">
                        Yes
                    </button> 
                    <button className="toggle-button2" onClick={this.onClose}>
                        No
                    </button>
                </div>
            </div>
        );
    }
    
    propTypes = {
        onClose: PropTypes.func.isRequired,
        show: PropTypes.bool.isRequired
    };

}

export default Modal;
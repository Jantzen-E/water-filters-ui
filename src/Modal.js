import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";


class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

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
                    <button className="toggle-button1" onClick={ this.handleDelete }>
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
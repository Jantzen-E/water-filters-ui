import React from "react";

class FiltrationListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (            
            <div>
                <p>Name: { this.props.item.name }</p>
                <p>Type: { this.props.item.type }</p>
                <p>Price: { this.props.item.price }</p>
            </div>   
        );
    }
}

export default FiltrationListItem;
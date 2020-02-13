import React from 'react';
import FiltrationListItem from './FiltrationListItem';

class FiltrationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { listItems: [] }

        this.renderItems = this.renderItems.bind(this);
    }

    // componentDidMount() {
    //     this.setState ({ listItems: this.props.originalList.map((originalItem, i) => {
    //         return (                
    //             <FiltrationListItem key={`fi_${i}`}/>
    //         );
    //     })})
    // }

    renderItems() {
        if(this.props.items) {
            return(
                this.props.items.map((item) => {
                    return ( 
                        <FiltrationListItem item={ item } key={ item.name } />
                    )
                })
            )
        }
    }

    render() {
        return (
            <div>                
                { this.renderItems() }                
            </div>
        )
    }
}

export default FiltrationList;
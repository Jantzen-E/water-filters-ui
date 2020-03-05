import React from 'react';
import FiltrationListItem from './FiltrationListItem';

class FiltrationList extends React.Component {
    constructor(props) {
        super(props);

        // this.state = { listItems: [] }

        this.renderItems = this.renderItems.bind(this);
    }

    // componentDidMount() {
    //     this.setState ({ listItems: this.props.originalList.map((item, i) => {
    //         return (                
    //             <FiltrationListItem key={`fi_${i}`}/>
    //         );
    //     })})
    // }

    renderItems() {
        if(this.props.items) {
            return (
                this.props.items.map((item) => {
                    return ( 
                        <FiltrationListItem 
                            item={ item } 
                            key={ item.name }
                            handleDelete={ this.props.handleDelete }
                            handleEdit={ this.props.handleEdit }
                        />
                    )
                })
            );
        }
        else {
            return '';
        }
    }

    render() {
        return (
            <div className="item3">                
                { 
                    this.renderItems() 
                }                
            </div>
        )
    }
}

export default FiltrationList;
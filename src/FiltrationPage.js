import React from "react";
import axios from "axios";
import FiltrationList from './FiltrationList';

class FiltrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalList: []
        };

        this.fetchItems = this.fetchItems.bind(this);
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems(options = {}) {
        axios
            .get("http://localhost:5000/api/waterFilters", { params: options })
            .then( response => {
                const list = response.data;
                console.log(list);

                this.setState({
                    list: list
                });
            })
            .catch(error => {
                alert("Cannot locate items");
                console.log(error);
            });
    }

    render() {
        return <FiltrationList items={this.state.list} />
    }
}

export default FiltrationPage;
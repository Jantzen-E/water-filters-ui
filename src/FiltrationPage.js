import React from "react";
import axios from "axios";
import FiltrationList from './FiltrationList';
import Form from './Form';

class FiltrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            editItem: {}
        };

        this.fetchItems = this.fetchItems.bind(this);
        this.createUpdateItem = this.createUpdateItem.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    createUpdateItem(item, mode, id) {
        if (mode === "add") {
          axios
            .post("http://localhost:5000/api/waterFilters", item)
            .then(response => {
              this.fetchItems();
            })
            .catch(error => {
            });
        } 
        else if (mode === "edit") {
          axios
            .put(`http://localhost:5000/api/waterFilters/${id}`, item)
            .then(response => {
              this.fetchItems();
            })
            .catch(error => {});
        }
    }

    deleteItem(id) {
        axios
            .delete(`http://localhost:5000/api/waterFilters/${id}`)
            .then(response => {
                this.fetchItems();
            })
            .catch(error => {
                debugger;
            });
            this.fetchItems();
    }

    componentDidMount() {
        this.fetchItems();
    }

    handleDelete(id) {
        debugger;
        this.deleteItem(id);
    }

    handleInputChange(event) {
        const newValue = event.target.value;
        this.setState({
          Input: newValue
        });
    }

    handleEdit(item) {
        this.setState({
          editItem: item
        });
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Water Filters</h1>
                <FiltrationList 
                    items={this.state.list}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                />
                <Form           
                    handleSubmit={this.createUpdateItem}
                    editItem={this.state.editItem}
                    onAdd={this.handleAddItem}
                />
            </div>
        )
    }
}

export default FiltrationPage;
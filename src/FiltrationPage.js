import React from "react";
import axios from "axios";
import FiltrationList from './FiltrationList';
import Form from './Form';

class FiltrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
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
        console.log('this.myref:', this.myRef)
        this.myRef.current.scrollIntoView();   
    }

    render() {
        debugger;
        return (
            <div className="page">
                <div className="grid-container">
                    <h1 className="item1">
                        <span>
                            <span className="firstWord">Water</span>
                            <span className="secondWord">Filters</span>
                        </span>
                        <span id="subtitle">Be prepared for emergencies and find a water filter that will fit your needs</span>
                    </h1>
                    <FiltrationList 
                        items={this.state.list}
                        handleEdit={this.handleEdit}
                        handleDelete={this.handleDelete}
                        className="item1"
                    />
                    <Form passref={this.myRef}        
                        handleSubmit={this.createUpdateItem}
                        editItem={this.state.editItem}
                        onAdd={this.handleAddItem}
                        className="item2"
                    />
                </div>
                <div className="item5">
                    <div>Jantzen 2020</div>
                    <div className="footerLinks"><a href="https://www.linkedin.com/in/jantzen-e/">LinkedIn</a></div>
                    <div className="footerLinks"><a href="https://github.com/Jantzen-E">GitHub</a></div>
                </div>
            </div>
        )
    }
}

export default FiltrationPage;
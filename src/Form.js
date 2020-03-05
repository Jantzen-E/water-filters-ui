import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            type: "",
            price: "",
            URL: "",
            imgURL: "",
            mode: "add"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.editItem) {
          if (
            prevProps.editItem.name !== this.props.editItem.name ||
            prevProps.editItem.type !== this.props.editItem.type ||
            prevProps.editItem.price !== this.props.editItem.price ||
            prevProps.editItem.URL !== this.props.editItem.URL ||
            prevProps.editItem.imgURL !== this.props.editItem.imgURL
          ) {
            this.setState({
              name: this.props.editItem.name,
              type: this.props.editItem.type,
              price: this.props.editItem.price,
              URL: this.props.editItem.URL,
              imgURL: this.props.editItem.imgURL,
              mode: "edit"
            });
          }
        }
      }

    handleSubmit(e) {
        e.preventDefault();

        const item = {
            name: this.state.name,
            type: this.state.type,
            price: this.state.price,
            URL: this.state.URL,
            imgURL: this.state.imgURL
        };

        this.props.handleSubmit(item, this.state.mode, this.props.editItem._id);

        this.setState({
          name: "",
          type: "",
          price: "",
          URL: "",
          imgURL: "",
          mode: "add"
        });
        e.target.reset(); //this resets the form back to the original value
    }

    render() {
        return (
            <div className="item4">
                <div className="formatForm">
                    <h3 className="formTitle">Add a filter to the list</h3>
                    <form ref={this.props.passref}
                        onSubmit={this.handleSubmit}>
                        <label>Name of filter: </label>
                        <input
                            type="text"
                            required
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                            className="inputFields"
                        />
                        <label>Choose a filter type: </label>
                        <select className="selectMenu" required onChange={e => this.setState({ type: e.target.value })}>
                            <option value="" >-- Select One --</option>
                            <option value="" disabled></option>
                            <option>activated carbon</option>
                            <option>ceramic</option>
                            <option>gravity</option>
                            <option>ultra violet</option>
                            <option>bottle</option>
                            <option>pump</option>
                            <option>inline</option>
                            <option>straw</option>
                            <option>other</option>                        
                        </select>
                        <label>Price: </label>
                        <input
                            type="text"
                            required
                            value={this.state.price}
                            onChange={e => this.setState({ price: e.target.value })}
                            className="inputFields"
                        />
                        <label>URL: </label>
                        <input
                            type="text"
                            required
                            value={this.state.URL}
                            onChange={e => this.setState({ URL: e.target.value })}
                            className="inputFields"
                        />
                        <label>Image URL: </label>
                        <input
                            type="text"
                            required
                            value={this.state.imgURL}
                            onChange={e => this.setState({ imgURL: e.target.value })}
                            className="inputFields"
                        />
                        <button type="submit" className="formAddButton">
                            {this.state.mode === "add" ? "Add" : "Update"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
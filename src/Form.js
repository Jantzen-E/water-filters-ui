import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            type: "",
            price: "",
            URL: "",
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
            prevProps.editItem.URL !== this.props.editItem.URL
          ) {
            this.setState({
              name: this.props.editItem.name,
              type: this.props.editItem.type,
              price: this.props.editItem.price,
              URL: this.props.editItem.URL,
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
        };

        this.props.handleSubmit(item, this.state.mode, this.props.editItem._id);

        this.setState({
          name: "",
          type: "",
          price: "",
          URL: "",
          mode: "add"
        });

    }

    render() {
        return (
            <div>
                <h3>Add a filter to the list</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name of filter: </label>
                    <input
                        type="text"
                        required
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        className="inputFields"
                    />
                    <br/>
                    <label>Choose a filter type: </label>
                    <select className="blank" required onChange={e => this.setState({ type: e.target.value })}>
                        <option value="" >-- Select One --</option>
                        <option value="" disabled></option>
                        <option>activated carbon</option>
                        <option>ceramic</option>
                        <option>reverse osmosis</option>
                        <option>ultra violet</option>
                        <option>activated aluminia</option>
                        <option>water distillation</option>
                        <option>iodine</option>
                        <option>chlorine</option>
                        <option>sand</option>
                        <option>hollow fiber membrane</option>
                        <option>other</option>                        
                    </select>
                    <br/>
                    <label>Price: </label>
                    <input
                        type="text"
                        required
                        value={this.state.price}
                        onChange={e => this.setState({ price: e.target.value })}
                        className="inputFields"
                    />
                    <br/>
                    <label>URL: </label>
                    <input
                        type="text"
                        required
                        value={this.state.URL}
                        onChange={e => this.setState({ URL: e.target.value })}
                        className="inputFields"
                    />
                    <br/>
                    <button type="submit">
                        {this.state.mode === "add" ? "Add" : "Update"}
                        {/* {this.setState.type = " "} */}
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
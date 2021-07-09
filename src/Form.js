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
                    <h3 className="formTitle">{this.state.mode === "add" ? "Add a filter to the list" : "Update Filter"}</h3>
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
                            <option value="">-- Select One --</option>
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
                <div>
                    <img className="sideMenu" alt="water filters" src="https://x9b1f1ulw2g31537u1gl95q1-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Survival-Water-Filters-for-Preppers-Hero.jpg"></img>
                    <h3 className="paragraphTitle">Why are water filters useful?</h3>
                    <div className="paragraph">Water filters are useful because they can take contaminants out of water so that it is safe to drink.
                        They are great for camping, hiking, emergency preparedness etc.  It is especially useful if you live in areas where the tap water
                        is not always safe to drink.  
                        <div/>
                        <br/>
                        <img className="sideMenu" alt="water droplet" src="https://www.verdict.co.uk/wp-content/uploads/2019/08/water-harvester-1440x970.jpg"></img>
                        <br/>
                        This page displays several different kinds of filters that could be used in different situations.  
                        When buying a filter, keep these differences in mind and do your research so you know where your water filter
                        will be the most useful for your specific needs.  
                        <div/>
                        <br/>
                        <img className="sideMenu" alt="pump water filter" src="https://theoutdoorland.com/wp-content/uploads/2016/04/Best-Survival-Water-Filter-1.jpg"></img>
                        <br/>
                        Some water filters can filter out viruses and chemicals while other filters
                        take filter out bacteria, protozoa, and larger microorganisms.  
                        <div/>
                        <br/>
                        <img className="sideMenu" alt="protozoa" src="https://x9b1f1ulw2g31537u1gl95q1-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Giardia-small-intenstine-infection-Wiki-CC.jpg"></img>
                        <br/>
                        Water filters that can filter out viruses and 
                        chemicals will usually be more expensive but may be necessary depending on where you plan to use them.  Also, if you want to be
                        extra cautious, boil your water then use the water filter to drink it after it cools.
                        <div/>
                        <br/>
                        <img className="sideMenu" alt="water filter" src="https://www.wereviews.com/wp-content/uploads/2019/09/water-filter-first-choice-600x600.jpg"></img>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
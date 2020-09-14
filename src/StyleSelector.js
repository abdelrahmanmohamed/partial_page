import React from "react";
import LoanForm from "./LoanForm";

export default class StyleSelector extends React.Component {
    state = {
        selectedStyle: "bootstrap"
    }

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {selectedStyle: "bootstrap"};
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(changeEvent) {
        if (this.state.selectedStyle !== changeEvent.target.value) {
            this.setState({selectedStyle: changeEvent.target.value})
        }
    }

    render() {
        return <div>
            <form id="style_select">
                <p> What is your style?</p><br/>
                <input type="radio" name="ans" value="bootstrap" onChange={this.handleOptionChange}
                       checked={this.state.selectedStyle === 'bootstrap'}/>bootstrap<br/>
                <input type="radio" name="ans" value="material" onChange={this.handleOptionChange}
                       checked={this.state.selectedStyle === 'material'}/>Material<br/>
            </form>
            <LoanForm formStyle={this.state.selectedStyle}/>
        </div>;
    }
}
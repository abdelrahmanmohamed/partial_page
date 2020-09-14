import React from 'react';
import LoadMaterialForm from './LoadMaterialForm';
import LoadBootstrapForm from './LoadBootstrapForm';

export default class LoanForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {formStyle: ""};
    }

    static getDerivedStateFromProps(props,state){
        if(props.formStyle !== state.formStyle){
            return {formStyle:props.formStyle};
        }
        return null;
    }

    render() {
        if(this.state.formStyle==='bootstrap'){
            return <LoadBootstrapForm />;
        } else{
            return <LoadMaterialForm />;
        }
    }
}
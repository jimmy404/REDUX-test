import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: null
    }

    nameChangedHandler = (event) => {
        this.setStateState({name: event.target.value});
    }

    ageChangedHandler = (event) => {
        this.setStateState({age: event.target.value});
    }

    render(){
        return(
            <div className="AddPerson">
                <input
                type="text"
                placeholder="Name"
                onChange={this.nameChangedHandler}
                value={}
                />
                <input type="number" placeholder="Age"/>
                <button onClick={this.props.personAdded}>Add Person</button>
            </div>
        );
    }
}

export default addPerson;
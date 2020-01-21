import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';


class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.state.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        prs: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON})
    }
};


export default Persons;
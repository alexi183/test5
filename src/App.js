import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { id:'23621', name: 'Max', age: 28 },
            { id:'23323', name: 'Manu', age: 29 },
            { id:'23243', name: 'Stephanie', age: 26 }
        ],
        openPersonInfo: false
    }


    openBlock = (id) => {
        // const persons = [...this.state.persons];
        // const person = persons.find(p => p.id === id)

        this.setState({
            openPersonInfo: true
        })
    }

    closedBlock = (id) => {
        /*  const persons = [...this.state.persons];
          const person = persons.find(p => p.id === id)*/

        this.setState({

            openPersonInfo: false
        })
    }

    render () {

        return (

            <div className="Person-list">
                {
                    this.state.persons.map((person) => {
                        return (
                            <Person
                                key={person.id}
                                {...this.state}
                                {...person}
                                openBlock={this.openBlock}
                                closedBlock={this.closedBlock}
                            />
                        )
                    })
                }

            </div>
        );
    }
}

export default App;

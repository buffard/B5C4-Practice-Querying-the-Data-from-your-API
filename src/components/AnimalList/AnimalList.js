import React, { Component } from 'react'

class AnimalList extends Component {
  render() {
    return (
      <section className="animals list">
      <h2 className="header">Animals</h2>
      {this.props.animals.map(animal =>
        <div key={animal.id}>
          <li>{animal.name}</li>
        </div>
      )}
    </section>
    )
  }
}

export default AnimalList
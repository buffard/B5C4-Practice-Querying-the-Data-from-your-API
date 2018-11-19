import React, { Component } from 'react'

class OwnersList extends Component {
  render() {
    return (
      <section className="owners list">
      <h2 className="header">Owners</h2>
      {this.props.owners.map(owner =>
        <div key={owner.id}>
          <li className="bold">{owner.name}</li>
          <p className="gray">{owner.phoneNumber}</p>
        </div>
      )}
    </section>
    )
  }
}

export default OwnersList
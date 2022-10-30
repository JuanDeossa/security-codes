import React from "react"

class ClassState extends React.Component {
  render(){
    const {name}=this.props
    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Insert the security code here, please</p>
        <input placeholder="security code"/>
        <button>Go ahead</button>
      </div>
    )
  }
}

export {ClassState}
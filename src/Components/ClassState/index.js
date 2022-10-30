import React from "react"

class ClassState extends React.Component {
  constructor(props){
    super(props)
    this.state={
      error:false,
      loading:false,
    }
  }
  componentDidUpdate(){
    if (!!this.state.loading) {
      setTimeout(()=>{
        this.setState({loading:!this.state.loading})
      },3000)
    }
  }
  render(){
    return (
      <div>
        <h2>Delete {this.props.name}</h2>
        <p>Insert the security code here, please</p>
        <input
         placeholder="security code"
        />
        {(!!this.state.error)&&
        <p>Error: incorret code</p>
        }
        {(!!this.state.loading)&&
        <p>Loading...</p>
        }
        <button
         onClick={()=>{
          this.setState({loading:!this.state.loading})
         }}
        >Go ahead
        </button>
      </div>
    )
  }
}

export {ClassState}
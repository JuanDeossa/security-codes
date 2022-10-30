import React from "react"
const SECURITY_CODE="JR"
class ClassState extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value:'',
      ok:false,
      error:false,
      loading:false,
    }
  }
  componentDidUpdate(){
    const {value,loading}=this.state
    if (!!loading) {
      setTimeout(()=>{
        if (value===SECURITY_CODE) {
            this.setState({
                ok:true,
                error:false,
                loading:false,
            })
        } else {
            this.setState({
                ok:false,
                error:true,
                loading:false,
            })
        }
      },3000)
    }
  }
  render(){
    const {ok,error,loading}=this.state
    return (
      <div>
        <h2>Delete {this.props.name}</h2>
        <p>Insert the security code here, please</p>
        <input
         value={this.state.value}
         onChange={(event)=>{
            this.setState({value:event.target.value})
         }}
         placeholder="security code"
        />
        {(!!error && !loading && !ok)&&
        <p>Error: incorret code</p>
        }
        {(!!ok && !loading && !error)&&
        <p>OK</p>
        }
        {(!!loading && !ok && !error)&&
        <p>Loading...</p>
        }
        <button
         onClick={()=>{
          this.setState({
            ok:false,
            error:false,
            loading:true,
          })
         }}
        >Go ahead
        </button>
      </div>
    )
  }
}

export {ClassState}
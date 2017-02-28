var AllItems = React.createClass({
  render(){
      var items = this.props.items.map((item, i)=>{
        return (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        )
      })
      return(
        <div>
          {items}
        </div>
        )
    }
})//end of the render method

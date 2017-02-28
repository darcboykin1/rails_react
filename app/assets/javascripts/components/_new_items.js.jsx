var NewItem = React.createClass({
  handeClick(){
    var name = this.refs.name.value;
    var description = this.refs.description.value;

    $.ajax({
      url: 'api/v1/items',
      type: 'POST',
      data: { item: {name:name, description:description} },
      success: (response) => {
        console.log("jfc I can't believe it worked", response)
      }
    });
  },

  //the end of the handleClick method

  render(){
    return(
      <div>
        <input type="text" ref="name" placeholder="enter a name"/>
        <input type="text" ref="description" placeholder="enter a description"/>
        <button onClick={this.handeClick}>Submit</button>
      </div>
      )
  }

  //end of the render method

})

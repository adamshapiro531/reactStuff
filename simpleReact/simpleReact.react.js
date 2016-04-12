/** @jsx React.DOM */

var HelloComponent = React.createClass({
  getInitialState: function () {
    return { name: 'World' };
  },
  changeNameDOM: function (name) {
    this.setState({name: name});
  },
  render: function () {
    return (
      <div className="react-div">
        <h1>Hello, {this.state.name}!</h1>
        <NameChanger changeNameDOM={this.changeNameDOM} />
      </div>
    );
  }
});

var NameChanger = React.createClass({
  getInitialState: function() {
    return { name: '' };
  },
  updateName: function (event) {
    this.setState({name: event.target.value});
  },
  changeName: function (event) {
    event.preventDefault();
    var name = this.state.name.trim();

    if (!name)
      return;

    this.props.changeNameDOM(this.state.name);
    this.setState({name: ''});
  },
  render: function () {
    return (
      <form className="name-changer" onSubmit={this.changeName}>
        <input type="text" placeholder="Change Name" value={this.state.name} onChange={this.updateName} />
        <input type="submit" value="Change the Name" />
      </form>
    );
  }
})

ReactDOM.render(<HelloComponent />, document.getElementById('react-mount'));

import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {


  componentDidMount() {
    console.log('hi!');
    // $.ajax({
    //   url: 'https://lcboapi.com/stores',
    //   dataType: 'jsonp',
    //   headers: { 'Authorization': 'MDo2NWI0NTY4Yy1kZjEzLTExZTYtOTk3Zi1hN2E3NTQ5NzNlMzY6M0FZV1NWRWNOa1VsNU5jalJ2eURuUHBwbzBxWlNHOWxGalhC' }
    // }).then((res)=>{console.log(res)});

    $.get('http://api.open-notify.org/astros.json').then(function(data) {
      console.log(data);
    });

  }

  render() {
    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;

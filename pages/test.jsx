import React from 'react';
import { withRouter } from 'next/router';

class MyLink extends React.Component {
  componentDidMount() {
    fetch('/something')
    .then(response =>  response.json())
    .then(resData => {
       //console.log(JSON.stringify(resData))
       //do your logic here       
       //let person = resData.results
       this.setState({ person: resData.results }); //this is an asynchronous function
       console.log("data",resData)
    })
  }

  render() {
    const { router } = this.props;

    return (
      <div>
        <a onClick={() => setTimeout(() => router.push('/'), 100)}>
          A route transition will happen after 100ms
        </a>
      </div>
    );
  }
}

export default withRouter(MyLink);
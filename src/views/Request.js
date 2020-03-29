import axios from 'axios'
import React, {Component} from 'react';

class Request extends Component {
    constructor () {
        super()
        this.state = {
          data : ''
        };
        this.getData = this.getData.bind(this);
    }
    componentWillMount() {
        this.getData()
    }

    getData () {
        console.log('Coming here');
        axios.get('http://mohfw.gov.in/')
          .then(response => {
              console.log(response.data);
              this.setState({data: response.data})
        })
      }

      render () {
        return (
          <div>
            {this.state.data}
          </div>
        )
      }
}
export default Request;

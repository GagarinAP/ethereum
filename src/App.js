import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Failure, Success, Btn, Block, Loader} from './styled';
import {request} from './action';

class App extends PureComponent {
  state = {
    name: '',
	  data: {},
	  loading: true
  };

  componentDidMount() {
    this.setState({
	    data: this.props.data, loading: this.props.loading
    });
  }

	componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
	    this.setState({
		    data: nextProps.data
	    });
    }
		if (nextProps.loading !== this.props.loading) {
			this.setState({
				loading: nextProps.loading
			});
		}
	}

  onChange = e => {
    this.setState({name: e.target.value, data: {}});
  };

  send = () => {
    this.props.req(this.state.name);
    this.setState({name: ''});
  };

  render() {
    return (
      <div className="container">
	      <div className="row">

		      <Block className="col-md-12 text-center">
			      <h1>
				      Select purse and click <b>Next</b>
			      </h1>
		      </Block>

	        <Block className="input-group">
		        <input
			        type="text"
			        className="form-control"
			        name="name"
			        onChange={this.onChange}
			        value={this.state.name}
		        />
		        <div className="input-group-btn">
			        <Btn
				        disabled={this.state.data.status === "0"}
				        type="submit"
				        onClick={this.send}
				        className="btn btn-primary">
				        {this.state.loading ? <Loader/> : null} Next
			        </Btn>
		        </div>
	        </Block>

		      {this.state.data.status === "0" ?
			      <Failure>{this.state.data.result}</Failure>
			      :
			      <Success>{this.state.data.message}</Success>
		      }
	      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	data: state.data,
	loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  req: (name) => dispatch(request(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

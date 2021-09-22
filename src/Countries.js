import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { getCountryData } from "./store/countryData/actions";

class Countries extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     region: "africa",
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  state = {
    region: 'africa'
  }
  
  componentDidMount() {
    console.log('mount', this.props)
     const { getCountryData } =  this.props
     getCountryData('https://jsonplaceholder.typicode.com/todos/1')
  }

  handleChange = (event) => {
    this.setState({ region: event.target.value });
  }

  render() {
    const data = this.props.countriesData
    console.log(data)
    return (
      <div className="countries">
        <select
          value={this.state.value}
          onChange={this.handleChange}
          className="dropDown"
        >
          <option value="africa">africa</option>
          <option value="americas">americas</option>
          <option value="europe">europe</option>
          <option value="asia">asia</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {countriesData: state.countryData}
}

const mapDispatchToProps = (dispatch) => {
    return { getCountryData: (url) => dispatch(getCountryData(url))}
}
// const mapDispatchToProps = (dispatch) => bindActionCreators(
//   {
//       getCountryData,
//   },
//   dispatch
// )

export default connect(mapStateToProps, mapDispatchToProps)(Countries);

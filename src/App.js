import React, { useState, useEffect } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './Api/';
import styles from './App.module.css';



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
   
    const data = await fetchData();    
    this.setState({ data });
  }

  handleCountryChange = async (country) => {   
    const data = await fetchData(country);   
    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        
       
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}
export default App;
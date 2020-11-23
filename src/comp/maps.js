import React, { Component } from "react";

import  CheckinRating from './CheckinRating'
import PlaceInfo from '../comp/placeinfo'

import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'
import '../css/review.css'


class Maps extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visibleReview: false,
      coordinates: [],
      review: '',
      rating: 0,
      location: '',
      city: ''
    }
  }

  getCity(coordinates) {
    var lat = coordinates[1];
    var lng = coordinates[0];
    axios.get("https://us1.locationiq.com/v1/reverse.php?key=pk.a418ebb2be45d0efd214f1e25c8bdc65&lat=" +
      lat + "&lon=" + lng + "&format=json")
      .then(results => {
        if(results.data.address.city!=undefined){
          let cityName = results.data.address.city
          console.log(cityName)
          this.setState({city:cityName})
        }
        else if(results.data.address.suburb!=undefined){
          let suburb = results.data.address.suburb
          console.log(suburb)
          this.setState({city:suburb})
        }
        else{
          let county = results.data.address.county
          //console.log(county)
          this.setState({city:county})
          //console.log(this.state.city)
        }
      })
  }

  componentDidMount() {

    const button = document.querySelector('.operation')
    var flag = false

    if (window.location.pathname.indexOf('checkinResults') > -1) {
      button.textContent = "Check in"
      flag = true
    }
    else {
      button.textContent = "Search"
    }

    button.addEventListener('click', () => {
      if (flag) {
        this.setState({ visibleReview: !(this.state.visibleReview) })
      }
    })

    var divContainer = document.querySelector('.divContainer')
    var mapContainer = document.querySelector('#map')
    mapContainer.appendChild(divContainer)

    mapboxgl.accessToken = 'pk.eyJ1IjoidmluYXlrcmlzaG5hbiIsImEiOiJja2hzcDc5OGQwMndxMnpvM2RwdDVhNmFhIn0.aVpBgvw8pQDdNn0eoQjXtQ';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 6,
      center: [78.47, 22.19]
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    })

    geocoder.on('result', (e) => {
      let arr = e.result.geometry.coordinates
      this.setState({ coordinates: arr })
      this.setState({location:e.result.text})
      this.getCity(this.state.coordinates)
    })
    map.addControl(geocoder)

  }

  componentDidUpdate() {
    console.log(this.state)
    const checkIn = document.querySelector('#map, .placeInfo')
    const button = document.querySelector('.operation')

    if (this.state.visibleReview) {
      checkIn.style.filter = 'blur(2px)'
      button.disabled = true

    } else {
      checkIn.style.filter = 'None'
      button.disabled = false
    }
  }

  render() {

    return (
      <div>
        <div id="map">
          <PlaceInfo />
        </div>
        <div className="divContainer">
          <button className="operation"></button>
        </div>
        {this.state.visibleReview &&
          <div className="review">
            <div className="review-box">
              <textarea placeholder="Add your description" onChange={(e)=>{this.setState({review:e.target.value})}}></textarea>
              <div className="review-rating">
                <label>Rate the location</label>
                <CheckinRating size={18} />
              </div>
            </div>
            <button onClick={() => this.setState({ visibleReview: !(this.state.visibleReview) })}>Done</button>
          </div>}
      </div>
    );
  }
}

export default Maps;

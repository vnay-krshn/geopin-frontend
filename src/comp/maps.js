import React, { Component } from "react";

import Ratings from './ratings'
import PlaceInfo from '../comp/placeinfo'

import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css'


class Maps extends Component {

  constructor(props){
    super(props)
    this.state = {
      visibleReview : false,
    }
  }
 
  componentDidMount() {
  
    const button = document.querySelector('.operation')
    var flag = false

      if(window.location.pathname.indexOf('checkinResults')>-1){
          button.textContent = "Check in"
          flag = true
      }
      else{
          button.textContent = "Search"
      }

    button.addEventListener('click',()=>{
      if(flag){
        this.setState({visibleReview:!(this.state.visibleReview)})
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
        center:[78.47, 22.19]
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })

    geocoder.on('result',function(e)
    {
      console.log(e.result.geometry.coordinates[0])
    })

    map.addControl(geocoder)
    
  }

  componentDidUpdate(){
    const checkIn = document.querySelector('#map, .placeInfo')
    const button = document.querySelector('.operation')

    if(this.state.visibleReview){
      checkIn.style.filter = 'blur(2px)'
      button.disabled = true
      
    }else{
      checkIn.style.filter ='None'
      button.disabled = false
    }
}

  render() {  

    return (
      <div>
         <div id="map">
           <PlaceInfo/>
         </div>
          <div className="divContainer">
              <button className="operation"></button>
          </div>
          {this.state.visibleReview && 
            <div className="review">
                  <div className="review-box">
                      <textarea placeholder="Add your description"></textarea>
                      <div className="review-rating">
                          <label>Rate the location</label>
                          <Ratings size={20}/>
                      </div>
                  </div>
                  <button onClick={()=>this.setState({visibleReview:!(this.state.visibleReview)})}>Done</button>
            </div>}
        </div>
    );
  }
}

export default Maps;

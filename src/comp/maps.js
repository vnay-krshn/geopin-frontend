import React, { Component } from "react";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.js";

import { Map, TileLayer } from "react-leaflet";

import * as ELG from "esri-leaflet-geocoder";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";

import Ratings from './ratings'
import PlaceInfo from '../comp/placeinfo'

// import marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
});


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

    const map = this.leafletMap.leafletElement;
    const searchControl = new ELG.Geosearch({
      placeholder:`${button.textContent}`,
      useMapBounds:false,
      expanded:true,
      collapseAfterResult:false
    }).addTo(map);
    searchControl.className='searchbar'
    const results = new L.LayerGroup().addTo(map);

    var divContainer = document.querySelector('.divContainer')
    var mapContainer = document.querySelector('.maps')        
    mapContainer.appendChild(divContainer) 
    
    searchControl.on("results", function(data) {
      results.clearLayers();
      var i = data.results.length - 1
      data.results.forEach(() => {
        if(i>=0)
        { 
          results.addLayer(L.marker(data.results[i].latlng));
          i--;
        }
      });
    
    });  
    
  }

  componentDidUpdate(){
    const checkIn = document.querySelector('.maps, .placeInfo')
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
    const center = [37.7833, -122.4167];  

    return (
      <div>
        <Map
          className="maps"
          center={center}
          zoom="10"
          ref={m => {
            this.leafletMap = m;
          }}>
          <TileLayer
            attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
            url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          />
          <PlaceInfo/>
          </Map>
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

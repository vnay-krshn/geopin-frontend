import React, { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "leaflet/dist/leaflet.js";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";

// import marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
});

class Maps extends Component {
  componentDidMount() {
    const map = this.leafletMap.leafletElement;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function(data) {
      results.clearLayers();
      var i = data.results.length - 1
      data.results.forEach(item => {
        if(i>=0)
        {
          results.addLayer(L.marker(data.results[i].latlng));
          i--;
        }
      });

      // for (let i = data.results.length - 1; i >= 0; i--) {
      //   results.addLayer(L.marker(data.results[i].latlng));
      // }
    });
  }

  render() {
    const center = [37.7833, -122.4167];
    return (
      <Map
        style={{ height: "100vh", width:'auto', zIndex:1}}
        center={center}
        zoom="10"
        ref={m => {
          this.leafletMap = m;
        }}
      >
        <TileLayer
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
      </Map>
    );
  }
}

export default Maps;

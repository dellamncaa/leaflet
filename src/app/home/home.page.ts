import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  customIcon!: L.Icon;
  layerControl!: L.Control.Layers;

  constructor() {}
  // ngOnInit() {
    
  // }

  ionViewDidEnter(){
    this.map = L.map('mapId').setView([-6.899509052040486, 107.61582845122025], 11)
    this.customIcon = L.icon({
      iconUrl: 'http://www.w3.org/2000/svg',
      iconSize: [32, 32], // ukuran ikon
    });

    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    });

    var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
    });

    var stamen = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
      maxZoom: 19,
    });

    var gmaps = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 19,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    });

    var nasa = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 19,
    });

    var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT,
    "Stamen Toner" : stamen,
    "Google Maps" : gmaps,
    };

    L.control.layers(baseMaps).addTo(this.map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([-6.902446420615131, 107.61872449230245], {icon: this.customIcon}).addTo(this.map)
    .bindPopup('Gedung Sate')
    .openPopup();
  }

    
}

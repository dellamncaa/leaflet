import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  markerIcon!: L.Icon;
  layerControl!: L.Control.Layers;

  constructor() {}
  // ngOnInit() {
    
  // }

  ionViewDidEnter(){
    this.map = L.map('mapId').setView([-6.899509052040486, 107.61582845122025], 11)

    //Marker
    this.markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Ganti dengan URL ikon marker default dari CDN
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png', // Ganti dengan URL ikon marker default 2x dari CDN
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // Ganti dengan URL bayangan marker default dari CDN
      iconSize: [30, 41], // Sesuaikan dengan ukuran ikon Anda
      iconAnchor: [15, 40], // Sesuaikan dengan titik penunjuk ikon Anda
    });
  
    const marker = L.marker([-6.902446420615131, 107.61872449230245], {icon: this.markerIcon}).addTo(this.map)
    .bindPopup('Gedung Sate')
    .openPopup();
    // const marker1 = L.marker([-7.784313570541377, 110.37618541869247], { icon: markerIcon }).addTo(this.map).bindPopup('Antah branta').openPopup();
    // const marker2 = L.marker([-7.784810704248861, 110.37386847860239], { icon: markerIcon }).addTo(this.map).bindPopup('Antah branta').openPopup();

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

    
  }

    
}

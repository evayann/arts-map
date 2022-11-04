import { Component } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';

import { LeafletControlLayersConfig } from '@asymmetrik/ngx-leaflet';
import domtoimage from 'dom-to-image';
import { Feature, GeoJsonObject, Geometry } from 'geojson';
import * as L from 'leaflet';
import Geocoder from 'leaflet-control-geocoder';
import * as osmtogeojson from 'osmtogeojson';
import { OsmFeatures } from '../models/OsmFeatures';
import { OsmFeaturesService } from '../osm-features.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  map!: L.Map;

  currentGeoJson!: L.GeoJSON;
  isRequesting: boolean = false;

  private classicLayer: L.TileLayer = L.tileLayer(
    'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }
  );

  zoom: number = 13;
  center: L.LatLng = L.latLng(45.18, 5.75);
  options: L.MapOptions = { layers: [ this.classicLayer ] };

  layers: L.Layer[] = [];
  layersControl: LeafletControlLayersConfig = {
    baseLayers: {
      Clasic: this.classicLayer,
      'Water Color': L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
        {
          attribution:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          subdomains: 'abcd',
          minZoom: 1,
          maxZoom: 16,
        }
      ),
      Mountain: L.tileLayer(
        'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 17,
          attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        }
      ),
      Real: L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          attribution:
            'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        }
      )
    },
    overlays: {}
  };

  constructor(private osmService: OsmFeaturesService) { }

  updateGeoJson(features: OsmFeatures) {
    const bounds = this.map.getBounds();
    const bbox = `${bounds.getSouth()},${bounds.getWest()},${bounds.getNorth()},${bounds.getEast()}`;

    this.isRequesting = true;
    this.osmService
      .request({ features: features, bbox })
      .then(async (response) => {
        const json: JSON = await response.json();
        this.isRequesting = false;

        if (this.currentGeoJson !== undefined)
          this.map.removeLayer(this.currentGeoJson);

        const geoJSON = osmtogeojson(json) as GeoJsonObject;

        let fillPalette = ['orange', 'green', 'blue'];

        let gradientString = `<linearGradient id="stripes" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset=0 stop-color=${fillPalette[0]} />
          <stop offset=33% stop-color=${fillPalette[0]} />
          <stop offset=33% stop-color=${fillPalette[1]} />
          <stop offset=66% stop-color=${fillPalette[1]} />
          <stop offset=66% stop-color=${fillPalette[2]} />
          <stop offset=100% stop-color=${fillPalette[2]} />
          </linearGradient>`;

        let svg = document.getElementsByTagName('svg')[0];
        let svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        svgDefs.insertAdjacentHTML('afterbegin', gradientString);
        svg.appendChild(svgDefs);

        const commonStyle = (feature: Feature<Geometry, any>): L.PathOptions | undefined => ({color: "url(#stripes)", fillOpacity: 0.2}); //features.findByFeatureProperty(feature.properties)?.style;

        this.currentGeoJson = L.geoJSON(geoJSON, {
          style: (feature: any): L.PathOptions => commonStyle(feature) || {},
          pointToLayer: (feature: Feature<Geometry, any>, latlng: L.LatLngExpression) => L.circleMarker(latlng, { radius: 3, ...commonStyle(feature)})
        });
        this.layers = [this.currentGeoJson];
        
        this.currentGeoJson.addTo(this.map);
      })
      .catch(() => {
        this.isRequesting = false;
        console.warn("Request failed !");
      });
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  saveMap(): void {
    console.log("Start generate image + download map");
    const el = document.querySelector(".leaflet-overlay-pane");
    domtoimage.toPng(el as Node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "map.png";
        link.click();
      });
  }

  onMapReady(map: L.Map): void {
    this.map = map;
    this.map.addControl(this.map.zoomControl.setPosition('topright'));
    this.map.addControl(new Geocoder());
    this.centerMapToUserPosition();
  }

  private centerMapToUserPosition(): void {
    this.getCurrentPosition().subscribe((position: any) => {
      this.center = L.latLng(position.latitude, position.longitude);
      this.zoom = 16;

      const icon = L.icon({
        iconUrl:
          'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-icon.png',
        shadowUrl:
          'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-shadow.png',
        popupAnchor: [13, 0],
      });

      const marker = L.marker([position.latitude, position.longitude], {
        icon,
      }).bindPopup('Your position');
      marker.addTo(this.map);
    });
  }
}

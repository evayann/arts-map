import { Component, ViewChild } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { OsmFeatures } from '../models/OsmFeatures';
import { OsmFeaturesService } from '../osm-features.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent {
  @ViewChild('map')
  map!: MapComponent;

  features: Record<string, string[]>;

  constructor(osmService: OsmFeaturesService) {
    this.features = osmService.getFeatures();
  }

  updateMap(features: OsmFeatures): void {
    this.map.updateGeoJson(features);
  }

  saveMap(): void {
    this.map.saveMap();
  }  
}

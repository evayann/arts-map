import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OsmFeature } from 'src/app/models/OsmFeature';
import { OsmFeatures } from 'src/app/models/OsmFeatures';

@Component({
  selector: 'app-menu-select',
  templateUrl: './menu-select.component.html',
  styleUrls: ['./menu-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSelectComponent implements OnInit {

  @Input() features!: Record<string, string[]>;
  @Input() selected!: OsmFeatures;
  @Output() selectedChange: EventEmitter<OsmFeatures> = new EventEmitter();

  selectedElements!: Record<string, Record<string, boolean>>;

  ALL = '*';

  ngOnInit(): void {
    this.initAll();
  }

  toggleAll(property: string, isChecked: boolean) {
    this.updateAll(property, isChecked);
    this.toggle(property, this.ALL, isChecked);
  }

  toggle(property: string, value: string, isChecked: boolean) {
    this.selectedElements[property][value] = isChecked;
    this.selectedElements[property][this.ALL] = this.allSelectedIn(property);
    this.selectedChange.next(this.selectedFeatures);
  }

  private allSelectedIn(property: string): boolean {
    const allProperty = Object.entries(this.selectedElements[property]).filter(([value,]) => value !== this.ALL).map(([, bool]) => bool);
    const nbElementSelectedIn = allProperty.filter(b => b).length;
    const nbElementInProperty = allProperty.length;
    return nbElementSelectedIn >= nbElementInProperty;
  }

  private updateAll(property: string, isChecked: boolean) {
    Object.keys(this.selectedElements[property])
          .forEach(value => this.selectedElements[property][value] = isChecked);
  }

  private initAll() {
    this.selectedElements = Object.entries(this.features)
      .reduce((acc, [property, values]) => ({ 
        ...acc, 
        [property]: values.reduce((acc, v) => ({...acc, [v]: false}), {}) 
      }), {} 
    );
  }

  private get selectedFeatures(): OsmFeatures {    
    const getActiveOsmFeature = (property: string, valuesState: Record<string, boolean>): OsmFeature[] => {
        if (this.selectedElements[property][this.ALL]) 
          return [new OsmFeature('all', property, this.ALL)];
        return Object.entries(valuesState).filter(([, active]) => active).map(([value,]) => new OsmFeature('all', property, value))
    }

    const featuresByCategorie: OsmFeature[][] = Object.entries(this.selectedElements).map(([property, valuesState]) => getActiveOsmFeature(property, valuesState));
    return featuresByCategorie
      .reduce((acc: OsmFeatures, features: OsmFeature[]) => {
        acc.push(...features);
        return acc;
      }, new OsmFeatures());
  }

}

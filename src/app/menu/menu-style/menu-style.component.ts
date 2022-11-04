import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OsmFeature } from 'src/app/models/OsmFeature';
import { OsmFeatures } from 'src/app/models/OsmFeatures';

@Component({
  selector: 'app-menu-style',
  templateUrl: './menu-style.component.html',
  styleUrls: ['./menu-style.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuStyleComponent {
  @Input() features!: OsmFeatures;

  updateStyle(property: OsmFeature, key: keyof L.PathOptions, value: unknown): void {
    property.style = { ...property.style, [key]: value };
  }
}

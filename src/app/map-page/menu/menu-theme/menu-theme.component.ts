import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { OsmFeatures } from 'src/app/models/OsmFeatures';
import { ThemesByCategory, themesList } from 'src/app/models/Theme';

@Component({
  selector: 'app-menu-theme',
  templateUrl: './menu-theme.component.html',
  styleUrls: ['./menu-theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuThemeComponent {

  @Output() selected: EventEmitter<OsmFeatures> = new EventEmitter();

  themesByCategory: ThemesByCategory = themesList;

  emit(features: OsmFeatures, isChecked: boolean) {
    if (! isChecked) return;
    this.selected.emit(features);
  }
}

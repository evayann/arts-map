import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OsmFeatures } from '../../models/OsmFeatures';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() features!: Record<string, string[]>;
  @Output() selected: EventEmitter<OsmFeatures> = new EventEmitter();
  @Output() save: EventEmitter<void> = new EventEmitter();

  currentSelected!: OsmFeatures;

  displayDialog = false;
  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-filter-fill',
        tooltipOptions: {
          tooltipLabel: "Open search filter"
        },
        command: () => this.openMenu()
      },
      {
        icon: 'pi pi-search',
        tooltipOptions: {
          tooltipLabel: "Start search"
        },
        command: () => this.selected.next(this.currentSelected)
      },
      {
        icon: 'pi pi-save',
        tooltipOptions: {
          tooltipLabel: "Save map to png"
        },
        command: () => this.save.next()
      }
    ];
  }

  setCurrentSelected(features: OsmFeatures) {
    this.currentSelected = features;
  }

  private openMenu(): void {
    this.displayDialog = true;
  }
}


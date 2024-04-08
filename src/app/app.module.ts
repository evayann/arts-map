import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { SpeedDialModule } from 'primeng/speeddial';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map-page/map/map.component';
import { MenuComponent } from './map-page/menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MapPageComponent } from './map-page/map-page.component';
import { MenuSelectComponent } from './map-page/menu/menu-select/menu-select.component';
import { MenuStyleComponent } from './map-page/menu/menu-style/menu-style.component';
import { MenuThemeComponent } from './map-page/menu/menu-theme/menu-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    MapPageComponent,
    MenuSelectComponent,
    MenuStyleComponent,
    MenuThemeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    LeafletModule,

    DialogModule,
    ButtonModule,
    InputSwitchModule,
    AccordionModule,
    ProgressSpinnerModule,
    TooltipModule,
    SpeedDialModule,
    TabViewModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

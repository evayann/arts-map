import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { MapPageComponent } from './map-page/map-page.component';

const routes: Routes = [
  {path: "maps", component: MapPageComponent},
  {path: "me", component: AboutMeComponent},
  {path: "", component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

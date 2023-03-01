import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderContainerComponent } from './components/slider-container/slider-container.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "page1"
  },
  {
    path: "page1",
    component: SliderContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

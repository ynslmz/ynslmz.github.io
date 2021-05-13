import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCvComponent } from './pages/my-cv/my-cv.component';

const routes: Routes = [
  {
    path: '',
    component: MyCvComponent,
    data: {
      animation: 'CvPage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./identity/identity.module')
      .then(m => m.IdentityModule)
  },
  {
    path: 'my-cv',
    loadChildren: () => import('./cv/cv.module')
      .then(m => m.CvModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

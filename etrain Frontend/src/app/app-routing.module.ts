import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ViewallComponent } from './viewall/viewall.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ViewTrainComponent } from './view-train/view-train.component';


const route1: Routes = [
  {path:'update/:tn',component:UpdateComponent},
  {path:'delete/:tn',component: DeleteComponent},
  {path:'view/:tn',component:ViewTrainComponent}
];

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'viewalltrain',component: ViewallComponent,children:route1}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

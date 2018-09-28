import {Routes} from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';






export const routes: Routes = [
   {
       path: '', redirectTo: 'home', pathMatch: 'full' 
   },
   {path: 'list', component: ListComponent},
   {path: 'detail/:id', component: DetailComponent}  
]
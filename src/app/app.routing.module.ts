import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { DetailsComponent } from "./details/details.component";
import { NgModule } from "@angular/core";

export const routes: Routes=[
{path:'', component:ProductComponent},
 { path: 'details/:id', component: DetailsComponent },
{ path: '', redirectTo: '/products', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

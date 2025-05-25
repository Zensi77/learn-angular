import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "alone",
    loadComponent: () =>
      import("./alone/alone-page/alone-page.component").then(
        (m) => m.AlonePageComponent
      ),
  },
  {
    path: "maps",
    loadChildren: () => import("./maps/maps.module").then((m) => m.MapsModule),
  },
  {
    path: "**",
    redirectTo: "maps",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

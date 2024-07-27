import { ApplicationConfig } from "@angular/core";
import { routes } from "./app.routing.module";
import { provideRouter } from "@angular/router";


export const appconfig: ApplicationConfig={
  providers:[
    provideRouter(routes),
  ],
}

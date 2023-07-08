import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproduitComponent,
    ListproduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CustomComponent } from './custom/custom.component';
import { HeaderComponent } from './header/header.component';
import { RepairComponent } from './repair/repair.component';
import { SellComponent } from './sell/sell.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccessoriesComponent,
    CustomComponent,
    HeaderComponent,
    RepairComponent,
    SellComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

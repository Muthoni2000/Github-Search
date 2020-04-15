import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profiles/profiles.component';
import { ProfileService } from './profiles.service';
import { FormsModule }from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { WonderComponent } from './wonder/wonder.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DateCountPipe,
    HighlightDirective,
    WonderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
   
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

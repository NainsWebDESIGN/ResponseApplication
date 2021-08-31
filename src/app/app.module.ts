import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoute } from '@app/app.routing';

// Component
import { AppComponent } from './app.component';
import { RouterIDComponent } from './routerID/routerID.component';

// Service
import { ApiService } from '@service';

// Pipe
import { AppPipe } from '@pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppPipe,
    RouterIDComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoute
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

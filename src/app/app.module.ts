import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoute } from '@app/app.routing';

// Component
import { AppComponent, AppbtnComponent, LangComponent } from './app.component';
import { RouterIDComponent } from './routerID/routerID.component';

// Service
import { ApiService } from '@service';

// Pipe
import { AppPipe, KeyvaluePipe } from '@pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppPipe,
    RouterIDComponent,
    AppbtnComponent,
    LangComponent,
    KeyvaluePipe
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

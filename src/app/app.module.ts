import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [[{ provide: 'API', useValue: environment.apiUrl }]],
  bootstrap: [AppComponent],
})
export class AppModule {}

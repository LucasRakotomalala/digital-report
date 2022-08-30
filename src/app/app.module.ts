import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationComponent } from './application/application.component';
import { DeveloppementComponent } from './developpement/developpement.component';
import { LancementComponent } from './lancement/lancement.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    DeveloppementComponent,
    LancementComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'about', component: AboutPageComponent},
        {path: 'projects', component: ProjectsPageComponent},
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiGithubComponent } from './api-github/api-github.component';
import { FormsModule } from '@angular/forms';
import { FollowersModalComponent } from './api-github/followers-modal/followers-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ApiGithubComponent,
    FollowersModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ],
  providers: [NgbActiveModal],
})
export class PagesModule { }

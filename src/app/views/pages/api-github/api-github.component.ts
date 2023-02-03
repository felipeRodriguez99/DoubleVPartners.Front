import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiGithubModel } from 'src/app/models/api-gihub.model';
import { ApiGithubService } from 'src/app/services/api-github/api-github.service';
import { FollowersModalComponent } from './followers-modal/followers-modal.component';

@Component({
  selector: 'app-api-github',
  templateUrl: './api-github.component.html',
  styleUrls: ['./api-github.component.scss']
})
export class ApiGithubComponent {

  public textSearch: string = '';
  public dataModel: ApiGithubModel[] = [];

  constructor(
    private apiGithubService: ApiGithubService,    
    private modalService: NgbModal,
    ) {
    
  }

  ngOnInit () {
    this.GetPersonsAndSearch();
  }

  public GetPersonsAndSearch () {
    this.apiGithubService.GetUserGithub(this.textSearch == ''? 'YOUR_NAME' : this.textSearch).subscribe((data) => {
      if (data !== null && data.items.length > 0) {
        this.dataModel = data.items;
      }
    })
  }

  public ActiveFollowers(urlFollowers: string) {    
    const activeModal = this.modalService.open(FollowersModalComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
    });
    activeModal.componentInstance.url = urlFollowers;
  }

}

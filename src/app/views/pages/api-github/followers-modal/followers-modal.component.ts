import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiGithubModel } from 'src/app/models/api-gihub.model';
import { ApiGithubService } from 'src/app/services/api-github/api-github.service';

@Component({
  selector: 'app-followers-modal',
  templateUrl: './followers-modal.component.html',
  styleUrls: ['./followers-modal.component.scss']
})
export class FollowersModalComponent {

  public dataFollowers: ApiGithubModel[] = [];
  public url: string = '';
  constructor(
    private activeModal: NgbActiveModal,
    private apiGithubService: ApiGithubService,
  ) {

  }


  public close() {
    this.activeModal.close();
  }

  public ngOnInit(): void {
    this.GetPersonsFollowers();
  }



  public GetPersonsFollowers() {
    debugger
    this.apiGithubService.GetPersonsFollowers(this.url).subscribe((data) => {
      if (data !== null && data.length > 0) {
        this.dataFollowers = data;
      }
    })
  }

}

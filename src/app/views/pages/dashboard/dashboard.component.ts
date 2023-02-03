import { Component } from '@angular/core';
import { PersonsModel } from 'src/app/models/persons.model';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public dataPerson: PersonsModel[] = [];

  constructor(private registerService: RegisterService) {
    
  }

  ngOnInit () {
    this.GetPersons();
  }


  public GetPersons () {
    this.registerService.GetPersons().subscribe((data) => {
      if (data !== null && data.length > 0) {
        this.dataPerson = data;
      }
    })
  }
}

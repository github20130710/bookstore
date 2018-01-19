import { Component, OnInit,ViewChild} from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'c-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent  {

  roles: any;

  constructor(private resService:PeopleService) {
  }

  ngOnInit() {
    this.resService.getLabels().then(array => {console.log(array);this.roles = array});
  }
}

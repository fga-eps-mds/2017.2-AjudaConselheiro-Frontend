import { CounselorService } from './counselor.service';
import { Component, OnInit } from '@angular/core';
import { Counselor } from './counselor';

@Component({
  selector: 'app-counselor',
  templateUrl: './counselor.component.html',
  styleUrls: ['./counselor.component.css']
})
export class CounselorComponent implements OnInit {
  counselors: Array<Counselor> = [];
 
  constructor(private _userService: CounselorService) { }


  ngOnInit() {
  
  }

  // getUsers(){
  //   this._userService.getUsers()
  //   .then(counselors => this.counselors = counselors)

  // }

}

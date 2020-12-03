import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  constructor(private helpServise:HelpService,private router: Router) { }

  ngOnInit() {
  }
  back()
  {
    this.router.navigate(['/searchComponent']);
  }
  home()
  {
    this.router.navigate(['/mainComponent']);
  }
}

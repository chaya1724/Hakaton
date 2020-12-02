import { Component, OnInit } from '@angular/core';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private helpServise:HelpService) { }

  ngOnInit() {
  }

}

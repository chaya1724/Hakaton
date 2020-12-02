import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from '../help.service';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  constructor(private helpServise:HelpService, private router: Router) { }

  ngOnInit() {
  }
  onChange(store:string) {
    
      }

}

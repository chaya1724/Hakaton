import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
num:number;
  constructor(private helpServise:HelpService, private router: Router) { }

  ngOnInit() {
  }
onChange(store:string) {
this.helpServise.storeName=store;
this.router.navigate(['/resultComponent']);

  }
searchStoresByProduct(event)
{
  this.router.navigate(['/storesComponent']);
}

}
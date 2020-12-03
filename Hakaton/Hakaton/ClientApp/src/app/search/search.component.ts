import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
num:number = 6;
mr:number=100;
nowPeople:number=3;
allowed:number ;
percent:number ;
  constructor(private helpServise:HelpService, private router: Router) { }

  ngOnInit() {
  }
onChange(store:string) {
  this.helpServise.allowed=this.mr/7//לפי ההנחיות 7 מטר לבן אדם
    if(this.helpServise.allowed<4)//מינימום 4 אנשים
    this.helpServise.allowed=4;
    if(this.helpServise.allowed>10)//מקסימום 10 אנשים
    this.helpServise.allowed=10;
    this.helpServise.percent=this.helpServise.nowPeople/this.helpServise.allowed*100;
this.helpServise.storeName=store;
this.router.navigate(['/resultComponent']);

  }
searchStoresByProduct(event)
{
  this.router.navigate(['/storesComponent']);
}
back()
{
  this.router.navigate(['/mainComponent']);
}
home()
{
  this.router.navigate(['/mainComponent']);
}
}
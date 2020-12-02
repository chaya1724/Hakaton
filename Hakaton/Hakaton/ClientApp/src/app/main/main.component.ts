import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from '../help.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  storeList : string[];
  foodChains: string[] = ['יש חסד', 'שפע זול','שפע חיים','מכולת אברהמי'];
  quickfood: string[] = ['יעלה', 'נחמה','מעדני גאולה',' פיצה שי'];
  kioskim: string[] = ['יעלה', 'פיוחי משיח','מפעל הפיס ','קיוסק גאולה'];
  
  various: string[]=['ddd', 'eee','fff'];
  footwear:string[]=['ggg', 'hhh','iii'];
  husewares:string[]=['jjj', 'kkk','lll'];
  clothing: string[]=['mmm', 'nnn','ooo'];
  electronics: string[]=['ppp', 'qqq','rrr'];
  constructor(private router: Router ,private helpServise:HelpService) { }

  ngOnInit() {
  }
  onChange(deviceValue) {
    if(deviceValue==1)
    this.helpServise.storeList=this.foodChains;
   if(deviceValue==2)
   this.helpServise.storeList=this.quickfood;
   if(deviceValue==3)
   this.helpServise.storeList=this.kioskim;
    this.router.navigate(['/searchComponent']);

  }
}

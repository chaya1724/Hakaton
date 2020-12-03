import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
storeList:string[];
storeName:string;
percent:number;
allowed:number;
nowPeople:number=3;
  constructor() { }
}

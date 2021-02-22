import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'searchbar-home',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css']
})

export class SearchBarComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}
import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'categorymenu-home',
    templateUrl: './categorymenu.component.html',
    styleUrls: ['./categorymenu.component.css']
})

export class CategoryMenuComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}
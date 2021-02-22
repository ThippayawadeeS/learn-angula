import { Component,Input } from '@angular/core';

@Component({
    selector: 'navbar-home',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBarComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}
import { Component,Input } from '@angular/core';
//import { homedir } from 'os';

@Component({
    selector: 'topbanner-home',
    templateUrl: './topbanner.component.html',
    styleUrls: ['./topbanner.component.css']
})

export class TopBannerComponent {
    @Input ()
    title: string;
    count = 0;
    items = [1,2,3,4,5];
    constructor () {}
    countNumber() {
        this.count = this.count + 1;
    }
}
import {Component} from "@angular/core"

@Component({ 
    selector: "home",
    templateUrl: './home.component.html',
    
    
})

export class HomeComponent {
    users: Array<any>;
    constructor() {
        this.users = [
            "user1", "Ramakrishna", "Rakesh"
        ]
    }
}
import {
    Component,
    OnInit,
    ViewChild,
    EventEmitter,
    Output,
    Input,
} from "@angular/core";

import { UsersService } from "../../services/users.service";

import { User } from "../../models/User";

@Component({
    selector: "app-user-form",
    templateUrl: "./user-form.component.html",
    styleUrls: ["./user-form.component.css"],
})
export class UserFormComponent implements OnInit {
    constructor(private userService: UsersService) {}

    @ViewChild("userForm") form: any;
    @Output() newUser: EventEmitter<User> = new EventEmitter();
    @Output() updatedUser: EventEmitter<User> = new EventEmitter();
    @Input() isEdit: boolean = true;
    @Input() currentUser: User = {
        id: 1,
        name: "",
        email: "",
        phone: "",
        website: "",
    };
    showUserForm: boolean = true;

    ngOnInit(): void {}

    addUser({ value, valid }: { value: User; valid: any }) {
        if (valid) {
            this.userService.addUser(value).subscribe((user: any) => {
                this.newUser.emit(user);
            });
            this.form.reset();
        }
    }
    updateUser() {
        this.userService.updateUser(this.currentUser).subscribe((user) => {
            this.isEdit = false;
            this.updatedUser.emit(user);
            this.showUserForm = false;
            this.currentUser = {
                id: 1,
                name: "",
                email: "",
                phone: "",
                website: "",
            };
        });
    }
}

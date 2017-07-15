import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
  providers: [UserService]
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
  }
  submit() {
  if (this.isLoggingIn) {
    this.login();
  } else {
    this.signUp();
  }
}
login() {
  this.userService.login(this.user)
    .subscribe(
      () => this.router.navigate(["/list"]),
      (error) => alert("Não conseguimos confirmar seus dados, tente novamente.")
    );
}
signUp() {
  this.userService.register(this.user)
    .subscribe(
      () => {
        alert("Sua conta foi criada com sucesso!");
        this.toggleDisplay();
      },
      () => alert("Não foi possível cadastrar seus dados.")
    );
}
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
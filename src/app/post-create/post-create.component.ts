import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class postCreateComponent implements OnInit {

  Title:string = "WELCOME TO MY APP";
  Email: string = ' ';
  password: string = ' ';
  imageUrl: String = "assets/image/Welcome.jpg";
  btnStatus: boolean = false;
  LoginUser()
  {
    this.Email && this.password;
    {
      console.log("Welcome")
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  }

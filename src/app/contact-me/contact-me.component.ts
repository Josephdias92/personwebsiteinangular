import { Component, OnInit } from '@angular/core';

export class Contact{
  name:string;
  email:string;
  purpose:string;
}

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {
  resume: FirebaseObjectObservable<any>;
  constructor(db: AngularFireDatabase) { 
    this.resume = db.object('/resume');
  }

  ngOnInit() {
  }

}

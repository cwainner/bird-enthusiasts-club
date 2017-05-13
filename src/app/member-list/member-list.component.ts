import { Component, OnInit } from '@angular/core';
import { MemberService } from "../member.service";
import { Router } from "@angular/router";
import { FirebaseListObservable } from "angularfire2/database";
import { Member } from "../member.model";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})
export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember){
    this.router.navigate(['members', clickedMember.$key]);
  }
}

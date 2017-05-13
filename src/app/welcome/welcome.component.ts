import { Component, OnInit } from '@angular/core';
import { Member } from "../member.model";
import { MemberService } from "../member.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [MemberService]
})
export class WelcomeComponent implements OnInit {
  members;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

}

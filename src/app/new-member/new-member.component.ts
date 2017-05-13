import { Component, OnInit } from '@angular/core';
import { Member } from "../member.model";
import { MemberService } from "../member.service";

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [MemberService]
})
export class NewMemberComponent implements OnInit {
  showNewMemberForm = false;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  showNewMember(){
    this.showNewMemberForm = true;
  }

  cancel(){
    this.showNewMemberForm = false;
  }

  submitNewMember(newName, newDescription, newFavoriteBird, newRecentBirdSighting, newRole){
    var newMember = new Member(newName, newDescription, newFavoriteBird, newRecentBirdSighting, newRole);
    this.memberService.addMember(newMember);
    this.showNewMemberForm = false;
  }
}

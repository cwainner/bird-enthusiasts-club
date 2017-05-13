import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from "../member.service";

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;
  members;
  showMemberForm = false;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  showEditMember(){
    this.showMemberForm = true;
  }

  cancel(){
    this.showMemberForm = false;
  }

  updateMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
    this.showMemberForm = false;
  }
}

import { Injectable } from '@angular/core';
import { Member } from "./member.model";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers(){
    return this.members;
  }

  getMemberById(memberId){
    return this.database.object('members/' + memberId);
  }

  addMember(member){
    this.members.push(member);
  }

  updateMember(updatedMember){
    var memberInFirebase = this.getMemberById(updatedMember.$key);
    memberInFirebase.update({
      name:updatedMember.name,
      description: updatedMember.description,
      favoriteBird: updatedMember.favoriteBird,
      recentBirdSighting: updatedMember.recentBirdSighting,
      role: updatedMember.role
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Member } from "./member.model";

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(input: Member[], role) {
    var output: Member[] = [];
    if(role === "all"){
      return input;
    } else {
      for(var i = 0; i < input.length; i++){
        if(input[i].role === role){
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}

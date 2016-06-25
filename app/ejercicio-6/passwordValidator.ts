import {Control, ControlGroup} from 'angular2/common';

export class PasswordValidator{
    static shouldBeEqual (group: ControlGroup){
        var newpass = group.find('newpass').value;
        var confirmpass= group.find('confirmpass').value;
        
        if(confirmpass.length >0 && newpass.length >0 && newpass != confirmpass){
            return {shouldBeEqual: true}
        }
               
        return null;
    }
}
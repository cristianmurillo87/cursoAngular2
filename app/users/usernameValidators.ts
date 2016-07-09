
import {Control, ControlGroup} from 'angular2/common';

export class UsernameValidators {
    
    static shouldBeUnique(control: Control){
        return new Promise((resolve, reject)=>{
            setTimeout(function (){
                if(control.value=="cristian")
                    resolve({shouldBeUnique: true});
                else
                    resolve(null);
            }, 1000)
        });
    }
    
    static shouldNotBeEmpty(control: Control){
        return new Promise((resolve, reject)=>{
            setTimeout(function(){
                if(control.value.length==0)
                    resolve({shouldNotBeEmpty: true});
                else
                    resolve(null)
            },1000)   
        })
    }
    
    static shouldBeEqual (group: ControlGroup){
        var newpass = group.find('newpass');
        var confirmpass= group.find('confirmpass');
        
        if(newpass.value != confirmpass.value){
            return {shouldBeEqual: true}
        }
               
        return null;
    }
    
    static cannotContainSpace(control: Control){
        if (control.value.indexOf(' ')>=0) {
            return { cannotContainSpace: true}
        }
        
        return null;
    }
}
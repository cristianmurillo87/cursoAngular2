
import {Control} from 'angular2/common';

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
    
    static cannotContainSpace(control: Control){
        if (control.value.indexOf(' ')>=0) {
            return { cannotContainSpace: true}
        }
        
        return null;
    }
}
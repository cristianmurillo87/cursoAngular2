import {ControlGroup} from 'angular2/common';

export class EmailValidator{
   static emailValid(control: ControlGroup){
            var email = control.find('email').value;
            var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!filter.test(email)){
                return {emailValid: true};
            }
            
            return null;       
   }
    /*static emailValid(control:Control){
        return new Promise((resolve, reject)=>{
            var email = control.find('email').value;
            var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!filter.test(email))
                resolve({emailValid: true})
            else
                resolve(null);
        });
    }*/
}


export class PasswordService{
    changePassword(form: any): boolean{
        var oldpass = form.currentpass;

        if(oldpass == '12345')
            return true;
        else
            return false;

    }
}
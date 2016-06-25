export class LoginService{
    
    doLogin(login: any): boolean{
        var username = login.nombreusuario;
        var password = login.contrasena;
        
        if( username != "cristian" || password != "123456")
            return false;
        else
            return true;
        
    }
}
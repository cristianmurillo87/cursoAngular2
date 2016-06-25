export class ArchiveService {
        
    constructor(){
    }
    
    getArchives() {
           var archives = [
                        {title:'2016/1', year:'2016', month: '1'},
                        {title:'2016/2', year:'2016', month: '2'},
                        {title:'2016/3', year:'2016', month: '3'}
                        ];

        return archives;
    }
    
    getArchive(year, month): string{
        return year + '/' + month ;
    }
}
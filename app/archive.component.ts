import {Component, OnInit} from 'angular2/core';
import {ArchiveService} from './archive.service';
import {RouteParams} from 'angular2/router';

@Component({
    template : `
        <h1>Archivos</h1>
        <div>{{archive}}</div>
    `,
    providers:[ArchiveService]
})
export class ArchiveComponent implements OnInit{

    archive;

    constructor(private _archiveService: ArchiveService, private _routeParams: RouteParams){
    }
    
    ngOnInit(){
       this.archive =  this._archiveService.getArchive(
           this._routeParams.get("year"), 
           this._routeParams.get("month")
           );
   }
}
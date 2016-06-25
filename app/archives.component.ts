import {Component, OnInit} from 'angular2/core';
import {ArchiveService} from './archive.service';
import {RouterLink} from 'angular2/router';


@Component({
    template: `
        <div>
            <h1>Inicio</h1>
            <ul >
                <li *ngFor="#archive of archives">
                    <a [routerLink]="['Archive',{year: archive.year, month: archive.month}]">
                        {{archive.title}}
                    </a>
                </li>
            </ul>
        </div>
    `,
    directives:[RouterLink],
    providers: [ArchiveService]
})
export class ArchivesComponent implements OnInit {
    archives;

    constructor(private _archiveService: ArchiveService){
    }
    
    ngOnInit(){
        this.archives= this._archiveService.getArchives();
    }
}
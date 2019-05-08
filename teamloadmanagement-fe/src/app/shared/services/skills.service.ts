import { Injector, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, AsyncSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SkillsService extends ApiService{

    constructor(injector: Injector) {
        super(injector);
      }
    
      public skillsArray: Array<string> = new Array<string>();
    
    
      public getSkills(): Observable<string[]> {
        let skills = new AsyncSubject<string[]>();
    
        this.httpGet(`${this.apiUrl}/skills`).subscribe(result => {
          this.skillsArray = result;
          skills.next(this.skillsArray);
          skills.complete();
        });
    
        return skills;
      }
    
      public getSkill(id: any): Observable<string> {
        let skill = new AsyncSubject<string>();
    
        this.httpGet(`${this.apiUrl}/skills/${id}`).subscribe(result => {
          skill.next(result);
          skill.complete();
        });
    
        return skill;
      }
    
}

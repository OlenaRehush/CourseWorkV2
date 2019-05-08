import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-skills-filter',
  templateUrl: './skills-filter.component.html',
  styleUrls: ['./skills-filter.component.scss']
})
export class SkillsFilterComponent implements OnInit{

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillsCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  skills: string[] = ['Lemon'];
  allSkills: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('skillsInput') skillsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    
  }

  ngOnInit(){
    // this.filteredSkills = this.skillsCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.allSkills.slice()));

  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.skills.push(value.trim());
      }

      if (input) {
        input.value = '';
      }

      this.skillsCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.skills.indexOf(fruit);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.skills.push(event.option.viewValue);
  //   this.fruitInput.nativeElement.value = '';
  //   this.fruitCtrl.setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  // }
  
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-asfaltare',
  templateUrl: './asfaltare.component.html',
  styleUrls: ['./asfaltare.component.css'],
})
export class AsfaltareComponent implements OnInit {
  @ViewChild(MatTabGroup) matTabGroup!: MatTabGroup;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  tabStates: boolean[] = [false, true, true];

  constructor(private fb: FormBuilder) {
    this.form1 = this.fb.group({
      descriere: ['', Validators.minLength(5)],
      durata: [''],
      judet: [{ value: 'Arges', disabled: true }]
    });

    this.form2 = this.fb.group({
      details: ['', Validators.minLength(10)],
      place: ['', Validators.required],
      ready: ['', Validators.required],
      type: ['', Validators.required],
      surface: ['', Validators.required],
    });

    this.form3 = this.fb.group({
      field2: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form1.statusChanges.subscribe(status => {
      this.tabStates[1] = status !== 'VALID';
      this.tabStates[2] = true; // Always disable the third tab when the first form is invalid
    });
  
    this.form2.statusChanges.subscribe(status => {
      if (this.form1.valid) {
        this.tabStates[2] = status !== 'VALID';
      } else {
        this.tabStates[2] = true; // Disable the third tab when the first form is invalid
      }
    });
  }

  goToNextTab(tabIndex: number) {
    this.matTabGroup.selectedIndex = tabIndex;
  }
}
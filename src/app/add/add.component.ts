import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  @Input() onSubmit!: (form: NgForm) => void;
}

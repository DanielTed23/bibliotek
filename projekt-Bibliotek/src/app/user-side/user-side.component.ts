import { Component } from '@angular/core';

@Component({
  selector: 'app-user-side',
  imports: [],
  templateUrl: './user-side.component.html',
  styleUrl: './user-side.component.css'
})
export class UserSideComponent {


  ngOnInit(): void {
    console.log('Du er blevet ført til User siden');
  }
}

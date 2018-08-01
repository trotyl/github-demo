import { Component } from '@angular/core';
import { JitCompiler } from '@angular/compiler';

console.log(JitCompiler);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = 'foo';

  unused() {
    console.log(42);
  }
}

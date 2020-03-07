import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="form-group">
    <div class="col-sm-offset-4 col-sm-3">
    <cgdm-lib-test>Connexion</cgdm-lib-test>
    </div>
  <div>
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lib-test-app';
}

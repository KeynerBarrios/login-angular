import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-layput',
  standalone: true,
  imports: [],
  template: `<p>authLayput works!</p>`,
  styleUrl: './authLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent { }

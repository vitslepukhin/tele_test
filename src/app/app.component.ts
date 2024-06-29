import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiAlertService,
  TuiButtonModule,
  TuiDialogModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent {
  title = 'tele-test';
  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService
  ) {}

  showNotification(): void {
    this.alerts
      .open('Basic <strong>HTML</strong>', { label: 'With a heading!' })
      .subscribe();
  }
}

import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
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
import WebApp from '@twa-dev/sdk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TuiAlertModule,
    TuiButtonModule,
    TuiDialogModule,
    TuiRootModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent implements OnInit {
  title = 'tele-test';
  initData = WebApp.initDataUnsafe;
  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService
  ) {}

  ngOnInit(): void {
    WebApp.ready();
    WebApp.enableClosingConfirmation();
  }

  showNotification(): void {
    this.alerts
      .open('Basic <strong>HTML</strong>', { label: 'With a heading!' })
      .subscribe();
  }

  clickTwaButton(): void {
    WebApp.showAlert(`Hello World from TWA WebApp`);
  }

  expand(): void {
    WebApp.expand();
  }
}

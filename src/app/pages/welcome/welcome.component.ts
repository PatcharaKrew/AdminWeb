import { Component, OnInit, inject } from '@angular/core';
import { NgZorroModule } from '../../../shared/ng-zorro.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [NgZorroModule,CommonModule],
})
export class WelcomeComponent implements OnInit {

  passwordVisible = false;
  password?: string;
  private router = inject(Router);

  constructor() {}

  ngOnInit() {}

  onClickLogin(): void{
    this.router.navigate(['home']);
  }
}

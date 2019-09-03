import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ThemeService } from 'src/app/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  isDarkTheme: Observable<boolean>;

  constructor(
    public dialogRef: MatDialogRef<SettingsComponent>, private themeService: ThemeService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}

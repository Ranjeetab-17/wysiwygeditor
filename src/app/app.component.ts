import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { SettingsComponent } from './modals/settings/settings.component';
import { ThemeService } from './services/theme.service';
import { SelecttemplateComponent } from './modals/selecttemplate/selecttemplate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isDarkTheme: Observable<boolean>;
  user: any;

  username: string;
  mytheme: string;
  showprogressbar: boolean = false;
  isAdmin: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );
  title = 'wysiwyg';

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.themeService.setDarkTheme(true);
  }


  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
      return true;
    } else {
      return false;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '500px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  selectNewTemplateDialog(): void {
    const dialogRef = this.dialog.open(SelecttemplateComponent, {
      width: '500px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RouterModule, Routes } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularSplitModule } from 'angular-split';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MAT_RADIO_DEFAULT_OPTIONS,
  MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
  MatTreeModule,
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';
import { DomSanitizer } from '@angular/platform-browser';
import 'hammerjs';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { EditorComponent } from './Templates/editor/editor.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { SettingsComponent } from './modals/settings/settings.component';
import { SelecttemplateComponent } from './modals/selecttemplate/selecttemplate.component';
import { SelectnewtemplateComponent } from './components/selectnewtemplate/selectnewtemplate.component';
//import { DragDropModule } from '@angular/cdk/drag-drop';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const appRoutes: Routes = [
  { path: '', redirectTo: 'editor', pathMatch: 'full' },
  { path: 'new', component: SelectnewtemplateComponent },
  { path: 'selecttemplate', component: SelectnewtemplateComponent },
  { path: 'editor', component: EditorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SettingsComponent,
    SelecttemplateComponent,
    SelectnewtemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    AngularSplitModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    PdfViewerModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    PerfectScrollbarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    CdkTableModule,
    EditorModule,
    FlexLayoutModule,
    NgxDocViewerModule,
    DragDropModule,
    MatTreeModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    {
      provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    }
  ],
  entryComponents: [SettingsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, overlayContainer: OverlayContainer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    overlayContainer.getContainerElement().classList.add('light-theme');
    // Or whatever path you placed mdi.svg at
  }
}

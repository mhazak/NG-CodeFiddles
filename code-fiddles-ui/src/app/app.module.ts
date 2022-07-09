import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'material.module';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { reducers } from './app.reducer';
import { HomeComponent } from './pages/home/home.component';
import { CodingComponent } from './pages/coding/coding.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    CodingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	ReactiveFormsModule,
	MaterialModule,
	HttpClientModule,
	StoreModule.forRoot(reducers),
	MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

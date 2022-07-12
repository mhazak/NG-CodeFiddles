import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'material.module';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { reducers } from './app.reducer';
import { HomeComponent } from './pages/home/home.component';
import { CodingComponent } from './pages/coding/coding.component';
import { FiddleEffects } from './services/fiddle/fiddle.effects';
import { FiddleComponent } from './pages/home/fiddle/fiddle.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    CodingComponent,
    FiddleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	ReactiveFormsModule,
	FormsModule,
	MaterialModule,
	HttpClientModule,
	StoreModule.forRoot(reducers),
	MonacoEditorModule.forRoot(),
	EffectsModule.forRoot([FiddleEffects]),
	StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

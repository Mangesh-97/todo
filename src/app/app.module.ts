import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DeleteConfirmationComponent } from './shared/components/delete-confirmation/delete-confirmation.component';
import { ToDoFormComponent } from './shared/components/to-do-form/to-do-form.component';
import { ToDoListComponent } from './shared/components/to-do-list/to-do-list.component';
import { MaterialModule } from './shared/material/material.module';

import { AngularFireModule } from '@angular/fire/compat'  //(4)
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    DeleteConfirmationComponent,
    ToDoFormComponent,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

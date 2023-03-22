import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { SearchPipe } from './search.pipe';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [AppComponent, PostComponent, SearchPipe, AddComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

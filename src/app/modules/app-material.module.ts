import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
    imports: [
      MatToolbarModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatPaginatorModule
    ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatPaginatorModule
    ]
  })

  export class MaterialModule { };
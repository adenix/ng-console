# ng-console

## Installation

To install this library, run:

```bash
$ npm install @adenix/ng-console --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { AxConsoleModule } from '@adenix/ng-console';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    AxConsoleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<ax-console shadow>
  <ax-console-exec *ngFor="let console of consoles">
    <ax-console-command>{{console.command}}</ax-console-command>
    <ax-console-return [values]="console.response"></ax-console-return>
  </ax-console-exec>
</ax-console>
```

## License

MIT © [Austin Nicholas](mailto:austin@adenix.io)

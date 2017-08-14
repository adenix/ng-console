import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleComponent, ConsoleShadowDirective } from './console.component';
import { CommandComponent } from './execution/command/command.component';
import { ReturnComponent } from './execution/return/return.component';
import { ExecutionComponent } from './execution/execution.component';

export * from './console.component';
export * from './execution/execution.component';
export * from './execution/command/command.component';
export * from './execution/return/return.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConsoleComponent,
    ConsoleShadowDirective,
    ExecutionComponent,
    CommandComponent,
    ReturnComponent
  ],
  exports: [
    ConsoleComponent,
    ConsoleShadowDirective,
    ExecutionComponent,
    CommandComponent,
    ReturnComponent
  ]
})
export class AxConsoleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AxConsoleModule,
      providers: []
    };
  }
}

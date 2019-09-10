import { Type } from '@angular/core';

export class Activity {
  constructor(public component: Type<any>, public data: any) {}
}
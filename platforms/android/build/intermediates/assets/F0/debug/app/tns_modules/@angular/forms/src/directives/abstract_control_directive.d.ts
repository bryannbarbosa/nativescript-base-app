/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs/Observable';
import { AbstractControl } from '../model';
import { ValidationErrors } from './validators';
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * @stable
 */
export declare abstract class AbstractControlDirective {
    readonly control: AbstractControl;
    readonly value: any;
    readonly valid: boolean;
    readonly invalid: boolean;
    readonly pending: boolean;
    readonly errors: ValidationErrors | null;
    readonly pristine: boolean;
    readonly dirty: boolean;
    readonly touched: boolean;
    readonly untouched: boolean;
    readonly disabled: boolean;
    readonly enabled: boolean;
    readonly statusChanges: Observable<any>;
    readonly valueChanges: Observable<any>;
    readonly path: string[];
    reset(value?: any): void;
    hasError(errorCode: string, path?: string[]): boolean;
    getError(errorCode: string, path?: string[]): any;
}

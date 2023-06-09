/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵRuntimeError as RuntimeError } from '@angular/core';
import { formControlNameExample, formGroupNameExample, ngModelGroupExample, ngModelWithFormGroupExample } from './error_examples';
export function modelParentException() {
    return new RuntimeError(1350 /* RuntimeErrorCode.NGMODEL_IN_FORM_GROUP */, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
export function formGroupNameException() {
    return new RuntimeError(1351 /* RuntimeErrorCode.NGMODEL_IN_FORM_GROUP_NAME */, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
export function missingNameException() {
    return new RuntimeError(1352 /* RuntimeErrorCode.NGMODEL_WITHOUT_NAME */, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
export function modelGroupParentException() {
    return new RuntimeError(1353 /* RuntimeErrorCode.NGMODELGROUP_IN_FORM_GROUP */, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfZHJpdmVuX2Vycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3RlbXBsYXRlX2RyaXZlbl9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGFBQWEsSUFBSSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJNUQsT0FBTyxFQUFDLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLDJCQUEyQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFHaEksTUFBTSxVQUFVLG9CQUFvQjtJQUNsQyxPQUFPLElBQUksWUFBWSxvREFBeUM7Ozs7TUFJNUQsc0JBQXNCOzs7Ozs7TUFNdEIsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxNQUFNLFVBQVUsc0JBQXNCO0lBQ3BDLE9BQU8sSUFBSSxZQUFZLHlEQUE4Qzs7Ozs7TUFLakUsb0JBQW9COzs7O01BSXBCLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsTUFBTSxVQUFVLG9CQUFvQjtJQUNsQyxPQUFPLElBQUksWUFBWSxtREFFbkI7Ozs7NEZBSXNGLENBQUMsQ0FBQztBQUM5RixDQUFDO0FBRUQsTUFBTSxVQUFVLHlCQUF5QjtJQUN2QyxPQUFPLElBQUksWUFBWSx5REFBOEM7Ozs7O01BS2pFLG9CQUFvQjs7OztNQUlwQixtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge8m1UnVudGltZUVycm9yIGFzIFJ1bnRpbWVFcnJvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7UnVudGltZUVycm9yQ29kZX0gZnJvbSAnLi4vZXJyb3JzJztcblxuaW1wb3J0IHtmb3JtQ29udHJvbE5hbWVFeGFtcGxlLCBmb3JtR3JvdXBOYW1lRXhhbXBsZSwgbmdNb2RlbEdyb3VwRXhhbXBsZSwgbmdNb2RlbFdpdGhGb3JtR3JvdXBFeGFtcGxlfSBmcm9tICcuL2Vycm9yX2V4YW1wbGVzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gbW9kZWxQYXJlbnRFeGNlcHRpb24oKTogRXJyb3Ige1xuICByZXR1cm4gbmV3IFJ1bnRpbWVFcnJvcihSdW50aW1lRXJyb3JDb2RlLk5HTU9ERUxfSU5fRk9STV9HUk9VUCwgYFxuICAgIG5nTW9kZWwgY2Fubm90IGJlIHVzZWQgdG8gcmVnaXN0ZXIgZm9ybSBjb250cm9scyB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBUcnkgdXNpbmdcbiAgICBmb3JtR3JvdXAncyBwYXJ0bmVyIGRpcmVjdGl2ZSBcImZvcm1Db250cm9sTmFtZVwiIGluc3RlYWQuICBFeGFtcGxlOlxuXG4gICAgJHtmb3JtQ29udHJvbE5hbWVFeGFtcGxlfVxuXG4gICAgT3IsIGlmIHlvdSdkIGxpa2UgdG8gYXZvaWQgcmVnaXN0ZXJpbmcgdGhpcyBmb3JtIGNvbnRyb2wsIGluZGljYXRlIHRoYXQgaXQncyBzdGFuZGFsb25lIGluIG5nTW9kZWxPcHRpb25zOlxuXG4gICAgRXhhbXBsZTpcblxuICAgICR7bmdNb2RlbFdpdGhGb3JtR3JvdXBFeGFtcGxlfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybUdyb3VwTmFtZUV4Y2VwdGlvbigpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgUnVudGltZUVycm9yKFJ1bnRpbWVFcnJvckNvZGUuTkdNT0RFTF9JTl9GT1JNX0dST1VQX05BTUUsIGBcbiAgICBuZ01vZGVsIGNhbm5vdCBiZSB1c2VkIHRvIHJlZ2lzdGVyIGZvcm0gY29udHJvbHMgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXBOYW1lIG9yIGZvcm1BcnJheU5hbWUgZGlyZWN0aXZlLlxuXG4gICAgT3B0aW9uIDE6IFVzZSBmb3JtQ29udHJvbE5hbWUgaW5zdGVhZCBvZiBuZ01vZGVsIChyZWFjdGl2ZSBzdHJhdGVneSk6XG5cbiAgICAke2Zvcm1Hcm91cE5hbWVFeGFtcGxlfVxuXG4gICAgT3B0aW9uIDI6ICBVcGRhdGUgbmdNb2RlbCdzIHBhcmVudCBiZSBuZ01vZGVsR3JvdXAgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSk6XG5cbiAgICAke25nTW9kZWxHcm91cEV4YW1wbGV9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXNzaW5nTmFtZUV4Y2VwdGlvbigpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgUnVudGltZUVycm9yKFxuICAgICAgUnVudGltZUVycm9yQ29kZS5OR01PREVMX1dJVEhPVVRfTkFNRSxcbiAgICAgIGBJZiBuZ01vZGVsIGlzIHVzZWQgd2l0aGluIGEgZm9ybSB0YWcsIGVpdGhlciB0aGUgbmFtZSBhdHRyaWJ1dGUgbXVzdCBiZSBzZXQgb3IgdGhlIGZvcm1cbiAgICBjb250cm9sIG11c3QgYmUgZGVmaW5lZCBhcyAnc3RhbmRhbG9uZScgaW4gbmdNb2RlbE9wdGlvbnMuXG5cbiAgICBFeGFtcGxlIDE6IDxpbnB1dCBbKG5nTW9kZWwpXT1cInBlcnNvbi5maXJzdE5hbWVcIiBuYW1lPVwiZmlyc3RcIj5cbiAgICBFeGFtcGxlIDI6IDxpbnB1dCBbKG5nTW9kZWwpXT1cInBlcnNvbi5maXJzdE5hbWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RlbEdyb3VwUGFyZW50RXhjZXB0aW9uKCk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBSdW50aW1lRXJyb3IoUnVudGltZUVycm9yQ29kZS5OR01PREVMR1JPVVBfSU5fRk9STV9HUk9VUCwgYFxuICAgIG5nTW9kZWxHcm91cCBjYW5ub3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuXG5cbiAgICBPcHRpb24gMTogVXNlIGZvcm1Hcm91cE5hbWUgaW5zdGVhZCBvZiBuZ01vZGVsR3JvdXAgKHJlYWN0aXZlIHN0cmF0ZWd5KTpcblxuICAgICR7Zm9ybUdyb3VwTmFtZUV4YW1wbGV9XG5cbiAgICBPcHRpb24gMjogIFVzZSBhIHJlZ3VsYXIgZm9ybSB0YWcgaW5zdGVhZCBvZiB0aGUgZm9ybUdyb3VwIGRpcmVjdGl2ZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KTpcblxuICAgICR7bmdNb2RlbEdyb3VwRXhhbXBsZX1gKTtcbn1cbiJdfQ==
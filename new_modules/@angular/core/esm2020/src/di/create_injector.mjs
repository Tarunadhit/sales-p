/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EMPTY_ARRAY } from '../util/empty';
import { stringify } from '../util/stringify';
import { importProvidersFrom } from './provider_collection';
import { getNullInjector, R3Injector } from './r3_injector';
/**
 * Create a new `Injector` which is configured using a `defType` of `InjectorType<any>`s.
 *
 * @publicApi
 */
export function createInjector(defType, parent = null, additionalProviders = null, name) {
    const injector = createInjectorWithoutInjectorInstances(defType, parent, additionalProviders, name);
    injector.resolveInjectorInitializers();
    return injector;
}
/**
 * Creates a new injector without eagerly resolving its injector types. Can be used in places
 * where resolving the injector types immediately can lead to an infinite loop. The injector types
 * should be resolved at a later point by calling `_resolveInjectorDefTypes`.
 */
export function createInjectorWithoutInjectorInstances(defType, parent = null, additionalProviders = null, name, scopes = new Set()) {
    const providers = [
        additionalProviders || EMPTY_ARRAY,
        importProvidersFrom(defType),
    ];
    name = name || (typeof defType === 'object' ? undefined : stringify(defType));
    return new R3Injector(providers, parent || getNullInjector(), name || null, scopes);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX2luamVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvZGkvY3JlYXRlX2luamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBSTVDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBQyxlQUFlLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzFEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUMxQixPQUFvQyxFQUFFLFNBQXdCLElBQUksRUFDbEUsc0JBQTZDLElBQUksRUFBRSxJQUFhO0lBQ2xFLE1BQU0sUUFBUSxHQUNWLHNDQUFzQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkYsUUFBUSxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDdkMsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsc0NBQXNDLENBQ2xELE9BQW9DLEVBQUUsU0FBd0IsSUFBSSxFQUNsRSxzQkFBNkMsSUFBSSxFQUFFLElBQWEsRUFDaEUsU0FBUyxJQUFJLEdBQUcsRUFBaUI7SUFDbkMsTUFBTSxTQUFTLEdBQUc7UUFDaEIsbUJBQW1CLElBQUksV0FBVztRQUNsQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7S0FDN0IsQ0FBQztJQUNGLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFOUUsT0FBTyxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxJQUFJLGVBQWUsRUFBRSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0VNUFRZX0FSUkFZfSBmcm9tICcuLi91dGlsL2VtcHR5JztcbmltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICcuLi91dGlsL3N0cmluZ2lmeSc7XG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHtTdGF0aWNQcm92aWRlcn0gZnJvbSAnLi9pbnRlcmZhY2UvcHJvdmlkZXInO1xuaW1wb3J0IHtpbXBvcnRQcm92aWRlcnNGcm9tfSBmcm9tICcuL3Byb3ZpZGVyX2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtnZXROdWxsSW5qZWN0b3IsIFIzSW5qZWN0b3J9IGZyb20gJy4vcjNfaW5qZWN0b3InO1xuaW1wb3J0IHtJbmplY3RvclNjb3BlfSBmcm9tICcuL3Njb3BlJztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgYEluamVjdG9yYCB3aGljaCBpcyBjb25maWd1cmVkIHVzaW5nIGEgYGRlZlR5cGVgIG9mIGBJbmplY3RvclR5cGU8YW55PmBzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluamVjdG9yKFxuICAgIGRlZlR5cGU6IC8qIEluamVjdG9yVHlwZTxhbnk+ICovIGFueSwgcGFyZW50OiBJbmplY3RvcnxudWxsID0gbnVsbCxcbiAgICBhZGRpdGlvbmFsUHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdfG51bGwgPSBudWxsLCBuYW1lPzogc3RyaW5nKTogSW5qZWN0b3Ige1xuICBjb25zdCBpbmplY3RvciA9XG4gICAgICBjcmVhdGVJbmplY3RvcldpdGhvdXRJbmplY3Rvckluc3RhbmNlcyhkZWZUeXBlLCBwYXJlbnQsIGFkZGl0aW9uYWxQcm92aWRlcnMsIG5hbWUpO1xuICBpbmplY3Rvci5yZXNvbHZlSW5qZWN0b3JJbml0aWFsaXplcnMoKTtcbiAgcmV0dXJuIGluamVjdG9yO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaW5qZWN0b3Igd2l0aG91dCBlYWdlcmx5IHJlc29sdmluZyBpdHMgaW5qZWN0b3IgdHlwZXMuIENhbiBiZSB1c2VkIGluIHBsYWNlc1xuICogd2hlcmUgcmVzb2x2aW5nIHRoZSBpbmplY3RvciB0eXBlcyBpbW1lZGlhdGVseSBjYW4gbGVhZCB0byBhbiBpbmZpbml0ZSBsb29wLiBUaGUgaW5qZWN0b3IgdHlwZXNcbiAqIHNob3VsZCBiZSByZXNvbHZlZCBhdCBhIGxhdGVyIHBvaW50IGJ5IGNhbGxpbmcgYF9yZXNvbHZlSW5qZWN0b3JEZWZUeXBlc2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbmplY3RvcldpdGhvdXRJbmplY3Rvckluc3RhbmNlcyhcbiAgICBkZWZUeXBlOiAvKiBJbmplY3RvclR5cGU8YW55PiAqLyBhbnksIHBhcmVudDogSW5qZWN0b3J8bnVsbCA9IG51bGwsXG4gICAgYWRkaXRpb25hbFByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXXxudWxsID0gbnVsbCwgbmFtZT86IHN0cmluZyxcbiAgICBzY29wZXMgPSBuZXcgU2V0PEluamVjdG9yU2NvcGU+KCkpOiBSM0luamVjdG9yIHtcbiAgY29uc3QgcHJvdmlkZXJzID0gW1xuICAgIGFkZGl0aW9uYWxQcm92aWRlcnMgfHwgRU1QVFlfQVJSQVksXG4gICAgaW1wb3J0UHJvdmlkZXJzRnJvbShkZWZUeXBlKSxcbiAgXTtcbiAgbmFtZSA9IG5hbWUgfHwgKHR5cGVvZiBkZWZUeXBlID09PSAnb2JqZWN0JyA/IHVuZGVmaW5lZCA6IHN0cmluZ2lmeShkZWZUeXBlKSk7XG5cbiAgcmV0dXJuIG5ldyBSM0luamVjdG9yKHByb3ZpZGVycywgcGFyZW50IHx8IGdldE51bGxJbmplY3RvcigpLCBuYW1lIHx8IG51bGwsIHNjb3Blcyk7XG59XG4iXX0=
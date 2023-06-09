/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import '../environment/dev';
/* g3_import_pure from './pure' */
import { ensureTokenIsValid, secretToken } from './secrets';
import { getTrustedTypes, getTrustedTypesPolicy } from './trusted_types';
/**
 * Runtime implementation of `TrustedScript` in browswers that don't support it.
 * script element.
 */
class ScriptImpl {
    privateDoNotAccessOrElseWrappedScript;
    constructor(script, token) {
        if (process.env.NODE_ENV !== 'production') {
            ensureTokenIsValid(token);
        }
        this.privateDoNotAccessOrElseWrappedScript = script;
    }
    toString() {
        return this.privateDoNotAccessOrElseWrappedScript.toString();
    }
}
function createScriptInternal(script, trusted) {
    return (trusted ?? new ScriptImpl(script, secretToken));
}
const GlobalTrustedScript = (typeof window !== undefined) ? window.TrustedScript : undefined;
/**
 * Also exports the constructor so that instanceof checks work.
 */
export const SafeScript = (GlobalTrustedScript ?? ScriptImpl);
/**
 * Builds a new `SafeScript` from the given string, without enforcing
 * safety guarantees. It may cause side effects by creating a Trusted Types
 * policy. This shouldn't be exposed to application developers, and must only be
 * used as a step towards safe builders or safe constants.
 */
export function createScript(script) {
    /** @noinline */
    const noinlineScript = script;
    return createScriptInternal(noinlineScript, getTrustedTypesPolicy()?.createScript(noinlineScript));
}
/**
 * An empty `SafeScript` constant.
 * Unlike the functions above, using this will not create a policy.
 */
export const EMPTY_SCRIPT = 
/* #__PURE__ */ (() => createScriptInternal('', getTrustedTypes()?.emptyScript))();
/**
 * Checks if the given value is a `SafeScript` instance.
 */
export function isScript(value) {
    return value instanceof SafeScript;
}
/**
 * Returns the value of the passed `SafeScript` object while ensuring it
 * has the correct type.
 *
 * Returns a native `TrustedScript` or a string if Trusted Types are disabled.
 */
export function unwrapScript(value) {
    if (getTrustedTypes()?.isScript(value)) {
        return value;
    }
    else if (value instanceof ScriptImpl) {
        return value.privateDoNotAccessOrElseWrappedScript;
    }
    else {
        let message = '';
        if (process.env.NODE_ENV !== 'production') {
            message = 'Unexpected type when unwrapping SafeScript';
        }
        throw new Error(message);
    }
}

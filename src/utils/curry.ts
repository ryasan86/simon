// prettier-ignore
export function curry
<T extends any[], R>(fn: (...args: T) => R): 
<T extends any[]>(...args: T) => any {
    const arity = fn.length

    return function $curry (...args) {
        if (args.length < arity) {
            return $curry.bind(null, ...args)
        }

        return fn.call(null, ...args)
    }
}

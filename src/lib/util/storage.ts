import { writable, type Writable } from "svelte/store";

type ToStringImplementor = { toString: () => string };

/**
 * A function that returns a writable store with type T. The value will be saved/loaded from localStorage with the given key.
 * @param key The key to use when saving/loading to localStorage
 * @param defaultValue The default value
 * @param deserialize A function to convert a string to T. Defaults to `JSON.parse(val)`, and if that fails, the value itself
 * @param serialize A function to convert T to a string. Defaults to `val.toString()`
 */
export function storage<T>(
    key: string,
    defaultValue: T,
    deserialize = (val: string) => {
        try {
            return JSON.parse(val) as T;
        } catch (_) {
            return val as T;
        }
    },
    serialize = (val: T) => (val as ToStringImplementor).toString(),
): Writable<T> {
    const store = writable(localStorage.getItem(key) ? deserialize(localStorage.getItem(key)!) : defaultValue);

    store.subscribe((value) => localStorage.setItem(key, serialize(value)));

    return store;
}

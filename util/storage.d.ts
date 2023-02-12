import { type Writable } from "svelte/store";
/**
 * A function that returns a writable store with type T. The value will be saved/loaded from localStorage with the given key.
 * @param key The key to use when saving/loading to localStorage
 * @param defaultValue The default value
 * @param deserialize A function to convert a string to T. Defaults to `JSON.parse(val)`, and if that fails, the value itself
 * @param serialize A function to convert T to a string. Defaults to `val.toString()`
 */
export declare function storage<T>(key: string, defaultValue: T, deserialize?: (val: string) => T, serialize?: (val: T) => string): Writable<T>;

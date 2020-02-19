//from https://higsch.me/2019/06/22/2019-06-21-svelte-local-storage/
import {writable} from 'svelte/store';

//export const store = writable( {} ); //without localStorage

const createWritableStore = (key, startValue) => {
    const { subscribe, set } = writable(startValue);

    return {
        subscribe,
        set,
        useLocalStorage : () => {
            const json = localStorage.getItem(key);
            if (json) {
                set(JSON.parse(json));
            }

            subscribe(current => {
                localStorage.setItem(key, JSON.stringify(current));
            });
        }
    };
}

export const store = createWritableStore('workspace', {state: []})

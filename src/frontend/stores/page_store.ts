import { writable } from "svelte/store";

function createPageStore() {
    const { subscribe, set, update } = writable<string>("startup");

    return {
        subscribe,
        set,
        update,
        reset: () => set("startup"),
        get: () => {
            let page_: string;
            subscribe((page) => {
                page_ = page;
            });
            return page_;
        },
    };
}

export const pageStore = createPageStore();
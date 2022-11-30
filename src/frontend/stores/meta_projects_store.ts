import { writable } from "svelte/store";
import type { MetaProject } from "../models/meta_project";

function createMetaProjectsStore() {
    const { subscribe, set, update } = writable<MetaProject[]>([]);

    return {
        subscribe,
        set,
        update,
        reset: () => set([]),
        add: (meta: MetaProject) => update((metaProjects) => {
            return [...metaProjects, meta];
        }),
        remove: (uid: string) => update((metaProjects) => {
            return metaProjects.filter((meta) => meta.uid !== uid);
        }),
        updateMeta: (meta: MetaProject) => update((metaProjects) => {
            return metaProjects.map((oldMeta) => {
                if (oldMeta.uid === meta.uid) {
                    return meta;
                }
                return oldMeta;
            });
        }),
    };
}
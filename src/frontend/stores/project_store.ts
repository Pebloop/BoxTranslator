import { writable } from "svelte/store";
import type { DataNodeProject } from "../models/data_node_project";
import type { MetaProject } from "../models/meta_project";
import type { Project } from "../models/project";

function createProjectStore() {
    const { subscribe, set, update } = writable<Project>();

    return {
        subscribe,
        set,
        update,
        reset: () => set(undefined),
        setMeta: (meta: MetaProject) => update((project) => {
            if (project) {
                project.meta = meta;
            }
            return project;
        }),
        setData: (data: DataNodeProject) => update((project) => {
            if (project) {
                project.data = data;
            }
            return project; 
        }),
        setAuthor: (author: string) => update((project) => {
            if (project) {
                project.meta.author = author;
            }
            return project;
        }),
        setGame: (game: string) => update((project) => {
            if (project) {
                project.meta.game = game;
            }
            return project;
        }),
        setName: (name: string) => update((project) => {
            if (project) {
                project.meta.name = name;
            }
            return project;
        }),
        setLanguage: (language: string) => update((project) => {
            if (project) {
                project.meta.language = language;
            }
            return project;
        }),
        setDescription: (description: string) => update((project) => {
            if (project) {
                project.meta.description = description;
            }
            return project;
        }),
        setUid: (uid: string) => update((project) => {
            if (project) {
                project.meta.uid = uid;
            }
            return project;
        }),
        setCreated: (created: Date) => update((project) => {
            if (project) {
                project.meta.created = created;
            }
            return project;
        }),
        setUpdated: (updated: Date) => update((project) => {
            if (project) {
                project.meta.updated = updated;
            }
            return project;
        }),
        getUid: () => {
            let uid: string;
            subscribe((project) => {
                if (project) {
                    uid = project.meta.uid;
                }
            });
            return uid;
        },
        getAuthor: () => {
            let author: string;
            subscribe((project) => {
                if (project) {
                    author = project.meta.author;
                }
            });
            return author;
        },
        getGame: () => {
            let game: string;
            subscribe((project) => {
                if (project) {
                    game = project.meta.game;
                }
            });
            return game;
        },
        getName: () => {
            let name: string;
            subscribe((project) => {
                if (project) {
                    name = project.meta.name;
                }
            });
            return name;
        },
        getLanguage: () => {
            let language: string;
            subscribe((project) => {
                if (project) {
                    language = project.meta.language;
                }
            });
            return language;
        },
        getDescription: () => {
            let description: string;
            subscribe((project) => {
                if (project) {
                    description = project.meta.description;
                }
            });
            return description;
        },
        getCreated: () => {
            let created: Date;
            subscribe((project) => {
                if (project) {
                    created = project.meta.created;
                }
            });
            return created;
        },
        getUpdated: () => {
            let updated: Date;
            subscribe((project) => {
                if (project) {
                    updated = project.meta.updated;
                }
            });
            return updated;
        },
        getData: () => {
            let data: DataNodeProject;
            subscribe((project) => {
                if (project) {
                    data = project.data;
                }
            });
            return data;
        },
    };
}

export const projectStore = createProjectStore();
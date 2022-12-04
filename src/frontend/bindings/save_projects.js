import {metaProjectsStore} from "../stores/meta_projects_store";

export default function save_projects(metaProjects) {
    window.api.send("save_projects", metaProjects);
    window.api.receive("save_projects", (data) => {
    });
}
import {metaProjectsStore} from "../stores/meta_projects_store";
import {projectStore} from "../stores/project_store";

export default function load_projects(metaProject) {
    window.api.send("load_project", metaProject);
    window.api.receive("load_project", (data) => {
        projectStore.set(data)
    });
}
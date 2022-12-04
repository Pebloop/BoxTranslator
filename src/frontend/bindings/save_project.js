import {metaProjectsStore} from "../stores/meta_projects_store";
import {projectStore} from "../stores/project_store";

export default function save_project(project, verbose = true) {
    window.api.send("save_project", project);
    window.api.receive("save_project", (data) => {

        if (verbose) {
            if (data === true) {
                alert("Project saved successfully");
            } else {
                alert("Project save failed");
            }
        }
    });
}
import {metaProjectsStore} from "../stores/meta_projects_store";

export default function load_projects() {
    window.api.send("load_projects");
    window.api.receive("load_projects", (data) => {

        metaProjectsStore.reset();

        for (let i = 0; i < data.length;i++) {
            let metaProject = data[i]

            metaProjectsStore.add(metaProject);
        }


    });
}
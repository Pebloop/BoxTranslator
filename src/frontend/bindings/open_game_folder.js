import {metaProjectsStore} from "../stores/meta_projects_store";

/**
 * @param {(string)=>void} action
 * @returns {string}
 */
export default function open_game_folder(action) {
    window.api.send("open_game_folder");
    window.api.receive("open_game_folder", (data) => {
        if (data.filePaths.length > 0) {
            action(data.filePaths[0]);
        }
    });
}
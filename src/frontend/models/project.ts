import type { DataNodeProject } from "./data_node_project.js";
import type { MetaProject } from "./meta_project.js";

export interface Project {
    meta: MetaProject;
    data: DataNodeProject;
}
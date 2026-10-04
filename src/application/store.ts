import { Project, ProjectMetadata } from "./project";

export interface StorageBackend {
	getProject(id: string): Project | null;
	writeProject(id: string, project: Project): void;
	listProjects(): string[];
}

export default class Store {
	constructor(backends: StorageBackend[]) {
		this.backends = new Set([...backends])
		for (const backend of backends) {
			for (const project of backend.listProjects()) {
				this.project_ids.add(project)
			}
		}
	}

	private activeProject: Project | null = null;
	private project_ids: Set<string> = new Set();
	private backends: Set<StorageBackend>;

	public getProjectList(): string[] {
		return Array.from(this.project_ids);
	}
}

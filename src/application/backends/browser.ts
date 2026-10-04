import { Project } from "../project";
import { StorageBackend } from "../store";

function getProject(id: string): Project | null {
	const json = localStorage.getItem("project-" + id)
	if (json) {
		const project = JSON.parse(json);
		if (project) {
			return project
		}
	}
	return null
}

function listProjects(): string[] {
	const json = localStorage.getItem("project-list")
	if (json) {
		const arr = JSON.parse(json)
		if (arr) {
			return arr
		}
	}
	return []
}

function writeProject(id: string, project: Project) {
	localStorage.setItem("project-" + id, JSON.stringify(project))
}

export default {
	getProject: getProject,
	listProjects: listProjects,
	writeProject: writeProject
} satisfies StorageBackend

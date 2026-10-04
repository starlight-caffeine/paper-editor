export interface Project {
	meta: ProjectMetadata
	source: string
	files: File[]
}

export interface ProjectMetadata {
	title: string
}

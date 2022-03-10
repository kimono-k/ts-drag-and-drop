import { Project, ProjectStatus } from "../models/project.js";

// Project State Management
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = []; // listeners array of function references

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn); // push function inside listeners array
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = []; // projects array using Project class
  private static instance: ProjectState; // instance itself in a variable

  private constructor() {
    super();
  }

  static getInstance() {
    // If there is an instance then return instance
    if (this.instance) {
      return this.instance;
    }
    // If not create new ProjectState and return instance
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject); // Stop het nieuwe project in projects array
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    // Loop through all function references
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); // copy of array
    }
  }
}

console.log("Running...");

export const projectState = ProjectState.getInstance(); // instance in variable

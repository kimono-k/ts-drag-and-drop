// Component Base Class, any kind of HTMLElement <T><U>

export const something = "...";

export default abstract class Component<
  T extends HTMLElement,
  U extends HTMLElement
> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement; // we have to know the type therefore, do typecasting.
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    ); // content of <template>, deep clone (all nested el inside template accessible)
    this.element = importedNode.firstElementChild as U; // <template><section>...</section></template>
    if (newElementId) {
      this.element.id = newElementId; // control flow based on params active or finished projects
    }
    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    ); // <section></section before <div#app> end tag
  }

  // Child classes are forced to use these methods
  abstract configure(): void;
  abstract renderContent(): void;
}

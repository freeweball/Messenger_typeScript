import {EventBus} from "./EventBus";
import {nanoid} from 'nanoid';

export default class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  } as const;

  public id = nanoid(6);
  protected props: P;
  public children: Record<string, Block> | Record<string, Array<Block>>;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;

  constructor(propsWithChildren: P) {
    const eventBus = new EventBus();
    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this.children = children;
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildrenAndProps(childrenAndProps: P): {props: P, children: Record<string, Block>} {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  private _addEvents(): void {
    const {events = {}} = this.props as P & { events: Record<string, () => void> };

    Object.keys(events).forEach(eventName => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init(): void {
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init(): any {}

  _componentDidMount(): void {
    this.componentDidMount();
  }

  componentDidMount(): any {}

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
  }

  private _componentDidUpdate(oldProps: any, newProps: any): void {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: P, newProps: P): boolean {
    return true;
  }

  public setProps = (nextProps: any): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  public get element(): HTMLElement | null {
    return this._element;
  }

  private _render(): void {
    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;

    this._element?.replaceWith(newElement);
    this._element = newElement;
    this._addEvents();
  }

  protected compile(template: (context: any) => string, context: any): DocumentFragment {
    const contextAndStubs = { ...context };
    
    Object.entries(this.children).forEach(([name, component]) => {
        const arr: Array<string> = [];

        if (Array.isArray(component)) {
          component.forEach(el => {
            arr.push(`<div data-id="${el.id}"></div>`);
        });

        contextAndStubs[name] = arr;

        } else {
            contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
        }

      });

    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, component]) => {
        if (Array.isArray(component)) {
          component.forEach(el => {
            const stub = temp.content.querySelector(`[data-id="${el.id}"]`);
        
            if (!stub) {
              return;
            }
            
            el.getContent()?.append(...Array.from(stub.childNodes));
            stub.replaceWith(el.getContent()!);
          })
        } else {
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
        
            if (!stub) {
            return;
            }

            component.getContent()?.append(...Array.from(stub.childNodes));
            stub.replaceWith(component.getContent()!);
        }
      });

    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  public getContent(): HTMLElement | null {
    return this.element;
  }

  private _makePropsProxy(props: P): any {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },

      set(target, prop: string, value) {
        const oldTarget = { ...target }

        target[prop as keyof P] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  public show(): void {
    this.getContent()!.style.display = "block";
  }

  public hide(): void {
    this.getContent()!.style.display = "none";
  }
}

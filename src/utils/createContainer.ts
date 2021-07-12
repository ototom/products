export default function createContainer(portalId:string, className?:string):HTMLElement {
    let element = document.getElementById(portalId);

    if (element) {
        return element;
    }

    element = document.createElement('div');
    element.setAttribute('id', portalId);

    if (className) element.className = className;

    document.body.appendChild(element);

    return element;
}
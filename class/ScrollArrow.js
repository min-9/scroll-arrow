import { template } from '../template/template.js';

export class ScrollArrow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['direction', 'color'];
  }

  get color() {
    return this.getAttribute('color');
  }

  get direction() {
    return this.getAttribute('direction');
  }

  disconnectedCallback() {
    alert('bye bye');
  }

  render() {
    const arrowTemplate = document.createElement('template');

    arrowTemplate.id = 'arrow-template';
    arrowTemplate.innerHTML = template;

    const [_1, arrow] = arrowTemplate.content.children;

    arrow.style.cssText = `--color:${this.color};`;

    switch (this.direction) {
      case 'up':
        arrow.style.cssText += `--rotate:180deg`;
        break;
      case 'down':
        arrow.style.cssText += `--rotate:0deg`;
        break;
      case 'left':
        arrow.style.cssText += `--rotate:90deg`;
        break;
      case 'right':
        arrow.style.cssText += `--rotate:-90deg`;
        break;
      default:
        break;
    }

    this.shadowRoot.append(arrowTemplate.content.cloneNode(true));
  }
}

import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './my-element.scss';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = styles;

  render() {
    return html`<div>Hello World!</div>`;
  }
}
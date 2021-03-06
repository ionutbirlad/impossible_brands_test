const template = document.createElement('template');
template.innerHTML = `
<style>
#toggle-info {
  background-color: #F3F3F3;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  background-position: center;
  transition: background 0.8s;
}

.active, #toggle-info:hover {
  background: #ccc radial-gradient(circle, transparent 1%, #ccc 1%) center/15000%;
}

#toggle-info:after {
  content: '\\002B';
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

#toggle-info.active:after {
  content: "\\2212";
}

#toggle-info:active {
  background-color: #d4d4d4;
  background-size: 100%;
  transition: background 0s;
}

.info {
  background-color: white;
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s ease-out;
  border-bottom: 1px solid #00000050;
}
.info-padding {
  padding: 10px 18px;
}
</style>
<div class="impossibleBrandsAccordion">
  <button id="toggle-info">Section</button>
  <div class="info">
  </div>
</div>
`;

class ImpossibleBrandsAccordion extends HTMLElement {
  constructor() {
    super();

    this.showInfo = false;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('#toggle-info').innerText = this.getAttribute('section');
    this.shadowRoot.querySelector('.info').innerText = this.getAttribute('content');
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector('.info');
    const toggleTrigger = this.shadowRoot.querySelector('#toggle-info');
    
    if (this.showInfo) {
      this.shadowRoot.querySelector('#toggle-info').classList.add('active');
      info.classList.add('info-padding');
      info.style.maxHeight = info.scrollHeight + "px";
    } else {
      this.shadowRoot.querySelector('#toggle-info').classList.remove('active');
      info.classList.remove('info-padding');
      info.style.maxHeight = null;
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }
}

window.customElements.define('impossible-brands-accordion', ImpossibleBrandsAccordion);
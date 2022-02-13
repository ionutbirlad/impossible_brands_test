const template = document.createElement('tempalte');
template.innerHTML = `
  <style>
  #toggle-info {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  }

  .active, #toggle-info:hover {
    background-color: #ccc;
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
  </style>`;

  class ImpossibleBrandsAccordion extends HTMLElement {
    constructor() {
      super();

    }
  }

  window.customElements.define('impossible-brands-accordion', ImpossibleBrandsAccordion);
// creating a custom html element ~ web components

const template = document.createElement("template")
template.innerHTML = `
<style>
    .navbar{
        background-color:#ebeef1;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        border-radius:1rem;
        box-shadow:0px 0px 10px rgba(0,0,0,0.16);
        height:100px;
        padding:0.4rem;
    }
</style>
<nav class="navbar">
    <slot name="logo">logo</slot>
    <slot name="links">links</slot>
    <slot name="btn">buttons</slot>
</nav>
`

// autonomous web components
class customElement extends HTMLElement{
    constructor(){
        super()
        const shadowRoot = this.attachShadow({mode:"open"})
        const clone = template.content.cloneNode(true)
        console.log(clone.firstChild)
        shadowRoot.append(clone)

    }
}

customElements.define("custom-element", customElement)

// stephan bazaar
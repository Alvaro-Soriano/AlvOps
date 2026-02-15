class mainCard extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
		<div class="card">
			<link rel="stylesheet" href="css/cards.css">
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
			<div class="cardImg">
			</div>
			<div class="cardContent">
				<div class="cardTitle"></div>
				<div class="cardText"></div>
			</div>
		</div>
		`;

	}
	connectedCallback(){
		this.shadowRoot.querySelector('.cardTitle').textContent = this.getAttribute('data-title');
		this.shadowRoot.querySelector('.cardText').textContent = this.getAttribute('data-text');
		if(this.getAttribute('data-icon')){
			const icon = document.createElement('i');
			icon.className='bi '+ this.getAttribute('data-icon');
			this.shadowRoot.querySelector('.cardImg').appendChild(icon);

		}
	}
}
customElements.define('main-card', mainCard);

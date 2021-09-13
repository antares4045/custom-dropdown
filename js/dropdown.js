

function Dropdown(element, toggleSelector=".dropdown-toggle", menuSelector=".dropdown-menu", menuItemSelector=".dropdown-item"){
    this.element = element
    this.toggler = element.querySelector(toggleSelector)
    this.menu = element.querySelector(menuSelector)

    this.toggleHandler =  (event) => this.toggle(event)

    this.toggler.addEventListener('click', this.toggleHandler)




}

Dropdown.prototype.toggle = function(event){
    const isexpanded = this.menu.dataset.expanded == 'true'

    console.log(this, this.element, isexpanded, event)
    if(isexpanded){
        this.menu.classList.remove('dropdown-menu-visible')
        document.removeEventListener('click', this.toggleHandler)
        
    }else{
        this.menu.classList.add('dropdown-menu-visible')
        setTimeout(() => document.addEventListener('click', this.toggleHandler), 10)

    }
    this.menu.dataset.expanded = '' + (!isexpanded)


}
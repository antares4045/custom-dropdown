document.addEventListener('DOMContentLoaded', () =>{


    document.querySelectorAll('.dropdown').forEach(element => {
        new Dropdown(element)
    })
})
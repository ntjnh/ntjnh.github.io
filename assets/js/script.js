const skills = document.querySelectorAll('#skills ul li')

for (let i = 0; i < skills.length; i++) {
    let skill = skills[i]
    
    skill.addEventListener('mouseenter', function(e) {
        let id = skill.getAttribute('id')
        this.classList.add(id)
    })

    skill.addEventListener('mouseleave', function(e) {
        let id = skill.getAttribute('id')
        this.classList.remove(id)
    })
}

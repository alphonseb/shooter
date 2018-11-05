const shooter = {}

/**
 * Set up 
 */
shooter.$container = document.querySelector('.shooter')
shooter.$targets = shooter.$container.querySelector('.targets')
shooter.$timer = shooter.$container.querySelector('.timer')
shooter.$score = shooter.$container.querySelector('.score .value')
shooter.score = 0

/** 
 * Methods
 */
shooter.addTarget = ()=>{
    const $target = document.createElement('div')
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 100}%`
    $target.style.left = `${Math.random() * 100}%`
    shooter.$targets.appendChild($target)

    $target.addEventListener('mousedown', ()=>{
        shooter.shootTarget($target)
    })
}

shooter.shootTarget = (_$target)=>{
    //Remove target
    _$target.remove()
    //Add new
    shooter.addTarget()
    //Increment score
    shooter.score++
    shooter.$score.textContent = shooter.score
    //Play Sound
    
}

shooter.addTarget()


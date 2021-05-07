
    const btn1 = document.querySelector('.firstBtn')
    const text = document.querySelector('.active')
    

    btn1.addEventListener('click' , function () {
        text.classList.add('one')
        text2.classList.remove('two')
       
    })

    const btn2 = document.querySelector('.secondBtn')
    const text2 = document.querySelector('.active2')

    btn2.addEventListener('click' , function () {
        text2.classList.add('two')
        text2.classList.remove('one')
       
    })

    const btn3 = document.querySelector('.closeBtn')

    btn3.addEventListener('click' , function () {
        text2.classList.remove('two')
        text.classList.remove('one')
       
    })
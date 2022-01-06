import gsap from 'gsap'
import { SplitText } from 'gsap/all';
import { Power3 } from 'gsap'

gsap.registerPlugin(SplitText);


const hideLine = () => {
    console.log('INIT')
    gsap.set('._text-on-load .split-line .split-line', {
        y: '150%',
        rotate: 15,
        opacity: 0
    })
    gsap.set('._text-on-scroll .split-line .split-line', {
        y: '150%',
        rotate: 15,
        opacity: 0
    })
}

class splitText {
    constructor () {
        this.textOnLoad = document.querySelectorAll('._text-on-load')
        this.textOnScroll = document.querySelectorAll('._text-on-scroll')
        this.allText = [...this.textOnLoad, ...this.textOnScroll]

        this.init()
    }
    
    init () {

        this.splitAllText()
    }

    splitAllText () {

        this.allText.forEach(item => {
            item.classList.add('splited')
        })
    
        this.splitInstance = new SplitText(this.allText, {
            type: 'lines, words',
            linesClass: 'split-line'
        })
        this.splitInstance = new SplitText(this.allText, {
            type: 'lines, words',
            linesClass: 'split-line'
        })
        
    }
}

class fadeInOnLoad {
    constructor () {
        this.init()
    }

    init () {
        this.textOnLoad = document.querySelectorAll('._text-on-load .split-line')

        gsap.timeline({defaults: {duration: 1.2, ease: 'expo'}})
            .to(this.textOnLoad, {
                y: '0%',
                rotate: 0,
                stagger: 0.04,
                opacity: 1
            }) 
    }
}

class fadeInScroll {
    constructor () {
        this.init()
    }

    init () {
        this.textOnScroll = document.querySelectorAll('._text-on-scroll')
        this.lineOnScroll = document.querySelectorAll('._line-on-scroll')
        this.textFillOnScroll = document.querySelectorAll('._text-fill')

        this.createObserver(this.textOnScroll, this.textAnimationIn, { threshold: 0.5 })
        this.createObserver(this.lineOnScroll, this.lineAnimationIn)
        this.createObserver(this.textFillOnScroll, this.textFillAnimation)
    }

    createObserver (elem, anim, options = {}) {

        this.observer = new window.IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anim(entry.target)
                } else {
                    //console.log('out')
                    //this.animationOut(entry.target)
                }
            })
        }, options)

        if(elem instanceof NodeList) {
            elem.forEach(el => {
                this.observer.observe(el)
            })
        } else {
            this.observer.observe(elem)
        }

    }

    textAnimationIn (text) {

        const lines = text.querySelectorAll('.split-line')

        gsap.timeline({defaults: { duration: 1.5, ease: 'none', }})
            gsap.to(lines, { 
                y: '0%',
                rotate: 0,
                stagger: 0.02,
                opacity: 1
            }) 
    }

    lineAnimationIn(line) {

        gsap.to(line, {
            duration: 1.2,
            scaleX: 1,
            ease: Power3.easeOut
        })
    }

    textFillAnimation(text) {
        gsap.utils.toArray(text).forEach(el => {

            const back = el.querySelector('.back')
            const backSpan = el.querySelector('.back span')

            gsap.to(back, {
                duration: 2,
                ease: Power3.easeOut,
                transform: 'translateY(0)'
            })
            gsap.to(backSpan, {
                duration: 2,
                ease: Power3.easeOut,
                transform: 'translateY(0)'
            })
        })
    }
}

export { splitText, fadeInOnLoad, fadeInScroll, hideLine }


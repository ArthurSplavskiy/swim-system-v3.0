import React, { useRef,useEffect } from 'react'

const FaqSpoller = ({ data, arr }) => {

    const spollerButton = useRef()

    useEffect(() => {

        // SPOLLERS
        const spollersArray = document.querySelectorAll('[data-spollers]');
        if (spollersArray.length > 0) {
            // Получение обычных слойлеров
            const spollersRegular = Array.from(spollersArray)
            // Инициализация обычных слойлеров
            if (spollersRegular.length > 0) {
                initSpollers(spollersRegular);
            }
            // DELETE CODE
            // Инициализация
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add('_init');
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove('_init');
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            // Работа с контентом
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
                if (spollerTitles.length > 0) {
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute('tabindex');
                            if (!spollerTitle.classList.contains('_active')) {
                                spollerTitle.nextElementSibling.hidden = true;
                            }
                        } else {
                            spollerTitle.setAttribute('tabindex', '-1');
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
                    const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
                    const spollersBlock = spollerTitle.closest('[data-spollers]');
                    const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
                    
                    if (!spollersBlock.querySelectorAll('._slide').length) {
                        if (oneSpoller && !spollerTitle.classList.contains('_active')) {
                            hideSpollersBody(spollersBlock);
                        }
                        spollerTitle.classList.toggle('_active');
                        _slideToggle(spollerTitle.nextElementSibling, 500);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
                if (spollerActiveTitle) {
                    spollerActiveTitle.classList.remove('_active');
                    _slideUp(spollerActiveTitle.nextElementSibling, 500);
                }
            }
        }
        //SlideToggle
        let _slideUp = (target, duration = 500) => {
            if (!target.classList.contains('_slide')) {
                target.classList.add('_slide');
                target.style.transitionProperty = 'height, margin, padding';
                target.style.transitionDuration = duration + 'ms';
                target.style.height = target.offsetHeight + 'px';
                target.style.height = target.offsetHeight;
                target.style.overflow = 'hidden';
                target.style.height = 0;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = true;
                    target.style.removeProperty('height');
                    target.style.removeProperty('padding-top');
                    target.style.removeProperty('padding-bottom');
                    target.style.removeProperty('margin-top');
                    target.style.removeProperty('margin-bottom');
                    target.style.removeProperty('overflow');
                    target.style.removeProperty('transition-duration');
                    target.style.removeProperty('transition-property');
                    target.classList.remove('_slide');
                }, duration);
            }
        }
        let _slideDown = (target, duration = 500) => {
            if (!target.classList.contains('_slide')) {
                target.classList.add('_slide');
                if (target.hidden) {
                    target.hidden = false;
                }
                let height = target.offsetHeight;
                target.style.overflow = 'hidden';
                target.style.height = 0;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.style.height = target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + 'ms';
                target.style.height = height + 'px';
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                window.setTimeout(() => {
                    target.style.removeProperty('height');
                    target.style.removeProperty('overflow');
                    target.style.removeProperty('transition-duration');
                    target.style.removeProperty('transition-property');
                    target.classList.remove('_slide');
                }, duration);
            }
        }
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) {
                return _slideDown(target, duration);
            } else {
                return _slideUp(target, duration);
            }
        }
    }, [])

    const mouseHandlerEnter = () => {
        spollerButton.current.classList.add('_active-hover')
        spollerButton.current.nextElementSibling.classList.add('_active-hover')
    }
    const mouseHandlerLeave = () => {
        spollerButton.current.classList.remove('_active-hover')
        spollerButton.current.nextElementSibling.classList.remove('_active-hover')
    }

    return (
        <>
            <div className="_line-on-scroll"></div>
            <div className="faq-spoller">
                <button 
                    ref={spollerButton}
                    tabIndex="-1"
                    type="button" 
                    className="faq-spoller__button"
                    onMouseEnter={() => mouseHandlerEnter()}
                    onMouseLeave={() => mouseHandlerLeave()}
                    data-spoller
                >
                    <div className="faq-spoller__count">{data.id < 10 ? '0' + data.id : data.id}</div>
                    <div className="faq-spoller__title">{data.title}</div>
                    <div className="faq-spoller__times"></div>
                </button>
                <div className="faq-spoller__body">{data.body.map((pContent, inx) => <p className="_text-on-action" key={data.body[inx]}>{pContent}</p>)}</div>
            </div>
            {data.id === arr.length ? <div className="_line-on-scroll"></div> : null}
        </>
    )
}

export default FaqSpoller
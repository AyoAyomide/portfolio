function scrollEffect(elmArray, funcObject) {
    const checkvisible = (el) => {
        let rect = el.getBoundingClientRect(),
            showElem = rect.top,
            hideElem = rect.top,
            elemBottom = rect.bottom;
        return {
            show: showElem < window.innerHeight && elemBottom >= 0,
            hide: hideElem < window.innerHeight && elemBottom >= 0,
        };
    };
    //this function run when mouse is scrolled
    const handleScroll = () => {
        elmArray.forEach((elm) => {
            if (checkvisible(elm).show == true) {
                funcObject.show(elm);
            } else if (checkvisible(elm).hide == false) {
                funcObject.hide(elm);
            }
        });
    };
    document.addEventListener("scroll", handleScroll);
}

export {scrollEffect }
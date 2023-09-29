function scrollToElement(elementID) {
    const element = document.getElementById(elementID);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
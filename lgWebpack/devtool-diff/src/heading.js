export default() => {
    const element = document.createElement('h2');
    element.textContent = 'Hello WebPack';
    element.addEventListener('click',()=> alert('Hello WebPack'));
    return element;
}
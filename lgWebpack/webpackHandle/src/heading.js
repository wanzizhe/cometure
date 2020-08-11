export default() => {
    const element = document.createElement('h2');
    element.textContent = 'Hello WebPack111';
    element.addEventListener('click',()=> alert('Hello WebPack'));
    return element;
}
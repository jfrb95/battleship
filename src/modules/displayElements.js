export function displaySquare() {
    const element = document.createElement('div');
    element.classList.add('empty-square');

    return {
        element,
        render(parent=null) {
            let target = parent || document.body;
            target.appendChild(element);
            
            return this;
        }
    }
}

export function displayBoard() {
    const element = document.createElement('div');
    element.classList.add('display-board');

    return {
        element,
        render(parent=null) {
            let target = parent || document.body;
            target.appendChild(element);
            
            return this;
        }
    }
}
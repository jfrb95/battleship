export function displaySquare() {
    const element = document.createElement('div');
    element.classList.add('empty-square');

    return {
        element,
        render(parent=null) {

            let target = document.body;

            if (parent) {
                if (parent.element) {
                    target = parent.element;
                }
                else {
                    target = parent;
                }
            }
            target.appendChild(element);
            
            return this;
        },
    }
}

export function displayBoard() {
    const element = document.createElement('div');
    element.classList.add('display-board');

    for (let i = 0; i < 100; i+=1) {
        wrap(displaySquare());
    }

    function wrap(...childComponents) {
        for (const child of childComponents) {
            element.appendChild(child.element);
        }
        return this;
    }

    return {
        element,
        render(parent=null) {

            let target = document.body;

            if (parent) {
                if (parent.element) {
                    target = parent.element;
                }
                else {
                    target = parent;
                }
            }
            target.appendChild(element);
            
            return this;
        },
        wrap,
    }
}
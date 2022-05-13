

export const Button = (text = '', className = '') => {
    const button = document.createElement('button');
    button.innerText = text;
    button.classList.add('button')
    button.classList.add(className)

    return button;
}


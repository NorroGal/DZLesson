

export const Button = (text = '') => {
    const button = document.createElement('button');
    button.innerText = text;
    button.classList.add('button')

    return button;
}


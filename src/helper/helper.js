const shortenText = (text) => {
    const newTitle = text.split(' ', 5).join(' ').trim();
    return newTitle;
}
export {shortenText}
class Render {

    static renderElementById(elementId, content, styleClass = null) {
        const element = document.getElementById(elementId);
        if (element) {
            const sanitizedContent = DOMPurify.sanitize(content);

            element.innerHTML = sanitizedContent;

            if (styleClass) {
                element.classList.add(styleClass);
            }
        } else {
            console.error(`Elemento con ID ${elementId} no encontrado.`);
        }
    }
}

export default Render;

class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const listItem = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        listItem.append(h4);
        const paragraph = document.createElement('p');
        paragraph.innerText = item.format();
        listItem.append(paragraph);
        if (position === 'start')
            this.container.prepend(listItem);
        else
            this.container.append(listItem);
    }
}
export default ListTemplate;

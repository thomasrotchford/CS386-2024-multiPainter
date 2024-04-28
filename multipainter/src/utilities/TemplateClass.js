export class boardSettings {
    constructor(boardSize, dragSetting) {
        this.boardSize = boardSize;
        this.dragSetting = dragSetting;
    }
}

export class BoardTemplate {
    constructor(colorGrid, numberGrid, author, date, title, creationMessage, tags) {
        this.colorGrid = colorGrid;
        this.numberGrid = numberGrid;
        this.author = author;
        this.date = date;
        this.title = title;
        this.creationMessage = creationMessage;
        this.tags = tags;
    }
}
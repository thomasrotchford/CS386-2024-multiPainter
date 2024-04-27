import * as DataBaseQueries from '../utilities/DataBaseQueries'; // Import the query function

export class boardSettings
{
    constructor(boardSize, DragSetting, )
    {
        this.boardSize = boardSize;
        this.DragSetting = DragSetting;
    }
}

export class Template
{
    constructor(boardSettings, colorGrid, numberGrid, author, date, title)
    {
        this.boardSettings = boardSettings;
        this.colorGrid = colorGrid;
        this.numberGrid = numberGrid;
        this.author = author;
        this.date = date;
        this.title = title;
    }
}
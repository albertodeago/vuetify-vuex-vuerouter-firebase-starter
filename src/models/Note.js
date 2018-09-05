const NOTE_TYPES = {
    'TODO': 'TODO',
    'TEXT': 'TEXT'
}

const ICON_TYPE = {
    'TODO': 'list_alt',
    'TEXT': 'note'
}

export default class Note {
    constructor(params = {title: 'title'}) {
        this._id = params.id
        this._title = params.title || 'Note title'
        this._favorite = params.favorite
        this._creationDate = Date.now()
        this._lastUpdate = Date.now()
        
        this._type
    }

    get id() {
        return this._id
    }
    set id(id) {
        if(this._id === undefined) 
            this._id = id
    }

    get title() {
        return this._title
    }
    set title(title) {
        this._title = title
    }

    get favorite() {
        return this._favorite
    }
    set favorite(favorite) {
        this._favorite = favorite
    }

    get type() {
        return this._type
    }
    // set type(type) {
    //     this._type = type
    // }

    get iconType() {
        return ICON_TYPE[this._type]
    }
}

export { ICON_TYPE, NOTE_TYPES, Note }
class FilmItem extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set film(film) {
        this._film = film;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            align:center;
        }
       
        .film-pic {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
            padding=12px;
        }
       
        .film-info {
            padding: 24px;
        }
        
        .film-info > h2 {
            font-weight: lighter;

        }
       
        .film-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
        </style>
        <img class="film-pic" src="${this._film.Poster}" alt="Film Pic">
        <div class="film-info">
            <h2>${this._film.Title}</h2>
            <p>Tahun ${this._film.Year}</p>
            <p>${this._film.Type}</p>
            </div>`;
    }
 }
  
 customElements.define("film-item", FilmItem);
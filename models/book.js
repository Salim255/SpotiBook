class Book {
  constructor(
    id,
    title,
    author,
    cover,
    originalTitle,
    translator,
    country,
    language,
    genre
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.cover = cover;
    this.originalTitle = originalTitle;
    this.translator = translator;
    this.country = country;
    this.language = language;
    this.genre = genre;
  }
}

export default Book;

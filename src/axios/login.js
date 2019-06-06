const query = `
  query {
    Page {
      media(isAdult: false, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
      }
    }
  }
  `;
export default query;

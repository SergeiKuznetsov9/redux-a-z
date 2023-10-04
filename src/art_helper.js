import Axios from "axios";

export const searchArt = ({ title }) => {
  const params = {
    q: title,
    limit: 5,
    fields: "id,title,image_id,artist_display",
  }; // sample set of params, limits the number of results to 5, and only returns the id, title, image_id, and artist_display fields

  return Axios.request({
    url: "https://api.artic.edu/api/v1/artworks/search",
    params,
  })
    .then((res) => {
      const { config, data } = res.data;
      const artPieces = data.map((artPiece) =>
        ArtPiece({ config, ...artPiece })
      ); // map the data to an array of HTML strings where each HTML string is an art piece (see ArtPiece function below)
      return { artPieces };
    })
    .catch((err) => {
      console.log(err);
    });
};

// Takes a config and the data for an art piece and returns an HTML string
const ArtPiece = ({ config, title, image_id, id, artist_display }) => {
  const image_url = `${config.iiif_url}/${image_id}/full/843,/0/default.jpg`;
  console.log(image_url);
  return `<div class='art_piece'>
        <img src="${image_url}" />    
        <h3>${title}</h3>
        <p>- ${artist_display}</p>
    </div>`;
};

/**
 * Fetches art from The Art Institute of Chicago API ( https://api.artic.edu/docs )
 * First queries the API for art pieces with the given title ( https://api.artic.edu/api/v1/artworks/search )
 * Then returns an array of ArtPiece objects
 * The image URL for each ArtPiece is constructed from the IIIF URL ( config.iiif_url ) and the image_id
 */

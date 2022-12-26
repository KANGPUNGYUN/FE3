import ItemImg from "./ItemImg";

function ListImg({ images }) {
  const renderImages = images.map((image, index) => {
    return <ItemImg key={image.id} image={image} />;
  });

  return <ul>{renderImages}</ul>;
}

export default ListImg;

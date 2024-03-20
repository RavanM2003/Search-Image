import ImageItem from "./ImageItem";

function ImageList({ image }) {
  return (
    <div className="images">
      {image.map((item) => {
        return <ImageItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ImageList;

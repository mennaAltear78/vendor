function TrashIcon({ key, setImages, setHotalImages, images, id, img }) {
  const removeImageHandeler = () => {
    img === images
      ? setImages((prevImages) => prevImages.filter((image) => image.id !== id))
      : setHotalImages((prevImages) =>
          prevImages.filter((image) => image.id !== id)
        );
  };
  return (
    <p
      className="absolute top-[-18px] left-[-8px] cursor-pointer  "
      onClick={removeImageHandeler}
      key={key}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hover:animate-bounce absolute top-[-10px] w-6 h-6 text-red-500 "
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 6h18v2H3V6zm2 4h14v12H5V10zm2 2v8h10v-8H7zM9 2h6v2H9V2z" />
      </svg>
    </p>
  );
}

export default TrashIcon;

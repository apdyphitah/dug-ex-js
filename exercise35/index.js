function changeImage() {
  const image = document.querySelector("#myImage");

  const newImageUrl = prompt("Enter a new image URL:");
  const borderColor = prompt("Enter a border color:");
  const width = prompt("Enter the image width in pixels:");
  const height = prompt("Enter the image height in pixels:");
  const borderRadius = prompt("Enter the border radius in pixels:");

  image.src = newImageUrl;
  image.style.borderColor = borderColor;
  image.style.width = width + "px";
  image.style.height = height + "px";
  image.style.borderRadius = borderRadius + "px";

  console.log("New image URL:", newImageUrl);
  console.log("Border color:", borderColor);
  console.log("Width:", width + "px");
  console.log("Height:", height + "px");
  console.log("Border radius:", borderRadius + "px");
  console.log("Updated image:", image);
}
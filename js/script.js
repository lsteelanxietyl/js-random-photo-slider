// -----------------------------------------------------------------------

// // offset = 0;

// // function nextPicture() {
// //   if (offset == -3072) {
// //       imgContainer.style.transform = `translateX(${offset + 3072}px)`;
// //       offset += 3072;
// //   } else {
// //     offset -= 768;
// //     imgContainer.style.transform = `translateX(${offset}px)`;
// //   }
// // }

// // function prevPicture() {
// //    if (offset == 0) {
// //       imgContainer.style.transform = `translateX(${offset - 3072}px)`;
// //       offset -= 3072;
// //   } else {
// //     offset += 768;
// //     imgContainer.style.transform = `translateX(${offset}px)`;
// //   }
// // }

// ----------------------------------------------------------------

const imgContainer = document.querySelector(".img-container");

const imgWrapper = document.querySelector(".img-wrapper");

const left = document.getElementById("arrow-left");
const right = document.getElementById("arrow-right");

for (let x = 1; x < 101; x++) {
  let img = document.createElement("img");
  img.setAttribute("src", `https://picsum.photos/seed/${x}/768/432`);
  if (x > 2) {
    img.setAttribute("loading", "lazy");
  }
  imgContainer.appendChild(img);
}

left.addEventListener("click", prevPicture);

right.addEventListener("click", nextPicture);

function getPictureWidth() {
  return imgWrapper.clientWidth;
}

let index = 0;
// const pictureWidth = 768;
const pictures = imgContainer.children.length;

window.addEventListener("resize", () => {
  imgContainer.style.transform = `translateX(${-index * getPictureWidth()}px)`;
});

function nextPicture() {
  if (index < pictures - 1) {
    index++;
    imgContainer.style.transform = `translateX(${
      -index * getPictureWidth()
    }px)`;
  }
}

function prevPicture() {
  if (index > 0) {
    index--;
    imgContainer.style.transform = `translateX(${
      -index * getPictureWidth()
    }px)`;
  }
}

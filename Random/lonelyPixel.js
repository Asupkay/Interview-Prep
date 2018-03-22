/*Lonely Pixel 
Given an N x M image with black pixels and white pixels, if a pixel is the only one in its color throughout its entire row and column, then it is a lonely pixel. Find the number of lonely pixels in black from the image. (O(NM))*/

let image = [["W", "W"],["B", "B"]]

let lonelyPixel = (image) => {

  let lonelypixel = []
  for(let i = 0; i < image.length; i++) {
    lonelypixel[i] = [];
    for(let x = 0; x < image[0].length; x++) {
      lonelypixel[i][x] = true;
    }
  }

  for(let line = 0; line < image.length; line++) {
    let position = {
      W: -1,
      B: -1
    }
    for(let i = 0; i < image[0].length; i++) {
      if(image[line][i] == "W") {
        if(position.W == -1) {
          position.W = i;
        } else {
          lonelypixel[line][i] = false;
          lonelypixel[line][position.W] = false;
        }
      } else {
        if(position.B == -1) {
          position.B = i;
        } else {
          lonelypixel[line][i] = false;
          lonelypixel[line][position.B] = false;
        }
      }
    }   
  }
  return lonelypixel;
}

console.log(lonelyPixel(image));

const findDuplicate = (array) => {
  let start = array[array.length - 1];

  for(let i = 0; i < array.length; i++) {
    start = array[start - 1];
  }

  let pointer = start;
  let runAround = array[start - 1];
  let counter = 1;
  while(runAround !== pointer) {
    runAround = array[runAround - 1];
    counter++;
  }

  let trailer = array[array.length - 1];
  let forward = array[array.length - 1];
  for(let i = 0; i < counter; i++) {
    trailer = array[trailer - 1];
  }

  while(trailer != forward) {
    trailer = array[trailer - 1];
    forward = array[forward - 1];
  }

  return trailer;
}

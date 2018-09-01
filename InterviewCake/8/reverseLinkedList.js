const reverse = (head) => {

  let prev = null;
  let current = head;
  let next = null;

  while(current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  console.log('apples', prev);
  return prev;
}

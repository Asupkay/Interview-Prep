const kthToLast = (head, k) => {

  if(k < 1) {
    throw new Error('K must be 1 or more');
  }

  let current = head;
  let ahead = head;
  for(let i = 0; i < k; i++) {
    ahead = ahead.next;
  }

  while(ahead != null) {
    current = current.next;
    ahead = ahead.next;
  }

  return current;
}

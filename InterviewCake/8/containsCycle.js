const containsCycle = (node) => {
  let pointer1 = node;
  let pointer2 = node.next;
  while(pointer2 != null && pointer2.next != null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
    if(pointer1 === pointer2) {
      return true;
    }
  }
  return false;
}

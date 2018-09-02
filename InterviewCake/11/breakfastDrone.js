const findUniqueDeliveryId = (deliveryIds) => {
  let uniqueDeliveryId = 0;

  deliveryIds.forEach(function(deliveryId) {
    console.log(uniqueDeliveryId);
    uniqueDeliveryId ^= deliveryId;
  });

  return uniqueDeliveryId;
}

console.log(findUniqueDeliveryId([1,3,1,2,2]));

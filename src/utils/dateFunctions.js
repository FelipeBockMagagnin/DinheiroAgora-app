function TimestampToDayMounth(timestamp){
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  return new Date(timestamp * 1000);
}

export {TimestampToDayMounth}
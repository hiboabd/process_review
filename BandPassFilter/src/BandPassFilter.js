function bandPassFilter(track, lowerLimit, upperLimit){
  var newTrack = []

  track.forEach((frequency, i) => {
    if(frequency < lowerLimit){
      newTrack.push(lowerLimit)
    } else if (frequency > upperLimit) {
      newTrack.push(upperLimit)
    } else {
      newTrack.push(frequency)
    }
  });
  return newTrack
}

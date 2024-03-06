window.onload = function () {
  let svgObject = document.getElementById('logo').contentDocument;
  let circleA1 = svgObject.getElementById('circleA1');
  let circleA2 = svgObject.getElementById('circleA2');
  let circleA3 = svgObject.getElementById('circleA3');
  let rectA1 = svgObject.getElementById('rectA1');
  let rectA2 = svgObject.getElementById('rectA2');
  let circleT1 = svgObject.getElementById('circleT1');
  let circleT2 = svgObject.getElementById('circleT2');
  let circleT3 = svgObject.getElementById('circleT3');
  let rectT1 = svgObject.getElementById('rectT1');
  let rectT2 = svgObject.getElementById('rectT2');

  let cLength = circleA1.getTotalLength();
  let cLengthT1 = circleT1.getTotalLength();
  let rLength = rectA1.getTotalLength();
  let rLength2 = rectA2.getTotalLength();
  let rLengthT = rectT1.getTotalLength();
  let rLengthT2 = rectT2.getTotalLength();

  circleA1.style.strokeDasharray = cLength;
  circleA1.style.strokeDashoffset = cLength;

  circleA2.style.strokeDasharray = cLength;
  circleA2.style.strokeDashoffset = cLength;

  circleA3.style.strokeDasharray = cLength;
  circleA3.style.strokeDashoffset = cLength;

  rectA1.style.strokeDasharray = rLength;
  rectA1.style.strokeDashoffset = rLength;

  rectA2.style.strokeDasharray = rLength2;
  rectA2.style.strokeDashoffset = rLength2;

  circleT1.style.strokeDasharray = cLengthT1;
  circleT1.style.strokeDashoffset = cLengthT1;

  circleT2.style.strokeDasharray = cLength;
  circleT2.style.strokeDashoffset = cLength;

  circleT3.style.strokeDasharray = cLength;
  circleT3.style.strokeDashoffset = cLength;

  rectT1.style.strokeDasharray = rLengthT;
  rectT1.style.strokeDashoffset = rLengthT;

  rectT2.style.strokeDasharray = rLengthT2;
  rectT2.style.strokeDashoffset = rLengthT2;

  let animation = anime.timeline({
    loop: true,
    direction: 'alternate' 
  });

  animation.add({
    duration: 500,
  });

  const targets1 = [circleA1, circleA2, circleA3];

  targets1.forEach(target => {
    animation.add({
      targets: target,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 500,
    });
  });

  const targets2 = [rectA1, rectA2];

  animation.add({
    targets: targets2,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
  });

  const targets3 = [circleT1, circleT2, circleT3];

  targets3.forEach(target => {
    animation.add({
      targets: target,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 500,
    });
  });

  const targets4 = [rectT1, rectT2];

  animation.add({
    targets: targets4,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
  });
}
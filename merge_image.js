const joinImages = require("join-images");
var merge = new joinImages();

const mergeImages = async (p1, p2) => {
  await merge.add(p1);
  await merge.add(p2);
  let d = new Date().getTime();
  await merge.save(`public/${d}.png`);
  return d;
};

module.exports = { mergeImages };

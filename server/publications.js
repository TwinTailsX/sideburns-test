Meteor.publish("testSub", function (num) {
  console.log(num);
  return BooHoo.find();
});

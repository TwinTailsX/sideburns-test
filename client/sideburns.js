// Material-ui component
injectTapEventPlugin();

//Destructure/globalise MUI properties
({
  Styles,
  RaisedButton,
  DatePicker
} = MUI);

//Styles = MUI.Styles;
//RaisedButton = MUI.RaisedButton;
//DatePicker = MUI.DatePicker;

({ThemeManager, LightRawTheme} = Styles);
//ThemeManager = Styles.ThemeManager;
//LightRawTheme = Styles.ThemeManager;
  // counter starts at 0
  //Session.setDefault('counter', 0);
var counter = new ReactiveDict("counter");

counter.setDefault("count", 0);

doogly = new ReactiveDict("name");

doogly.setDefault("name", "Bob");

Template.hello.helpers({
  counter: function () {
    return counter.get('count');
  }
});

Template.hello.events({
  'click #btn-count': function () {
    // increment the counter when button is clicked
    counter.set('count', counter.get('count') + 1);
  }
});

//Template.hello

Template.hello.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Template.hello.getChildContext = function () {
  return {
    muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
  };
};

Template.hello.onCreated(function () {
  this.autorun(function () {
    console.log(doogly.get());
  });
  console.log("Component created.");
});

Template.hello.onRendered(function () {
  console.log("Component rendered.");
});

Template.hello.onDestroyed(function () {
  console.log("Component died.");
});

Template.hello.autorun(function () {
  console.log(doogly.get());
});

Template.hello.subscribe("testSub", 1, {
  onReady: function () {console.log("Sub is ready!");},
  onStop: function () {console.log("Sub stopped!");}
});

Template.registerHelper("thingy", function () {
  return doogly.get();
});

/*Template.body.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Template.body.getChildContext = function () {
  return {
    muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
  };
};*/

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

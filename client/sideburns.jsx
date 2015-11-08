/*// jshint ignore:start

<template name = "hello">
  <RaisedButton label="Click Me" primary={true}/>
  <p>You've pressed the button {{counter}} times.</p>

  <DatePicker hintText="Portrait Dialog"/>
</template>

counter = new ReactiveDict("counter", 0);

injectTapEventPlugin();

// Destructure/globalise MUI properties
var {
  Styles,
  RaisedButton,
  DatePicker
} = MUI;

var {ThemeManager, LightRawTheme} = Styles;

class Hello extends React.Component {
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  helpers: {
    counter: function () {
      return counter.get('counter');
    }
  },
  events: {
    'click button': function () {
      // increment the counter when button is clicked
      counter.set('counter', counter.get('counter') + 1);
    }
  },
  render () {
    return Template.hello.template;
  }
});*/

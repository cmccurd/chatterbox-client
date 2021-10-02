// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    App.fetch(RoomsView.render);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    var rooms = {};

    for (var i = 0; i < Messages._data.length; i ++) {
      if (!rooms[Messages._data[i].roomname]) {
        if (rooms[Messages._data[i].roomname] === null) {
          rooms[Messages._data[i].roomname] = 'lobby';
        }
        rooms[Messages._data[i].roomname] = Messages._data[i].roomname;
      }
    }

    var mySelect = $('#dropDown');
    $.each(rooms, function(val, text) {
      mySelect.append($(`<option class="${text}"></option>`).val(val).html(text));
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    for (var i = 0; i < Messages._data.length; i ++) {
      MessagesView.render(Messages._data[i], roomname);
    }
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    RoomsView.renderRoom('room');
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};

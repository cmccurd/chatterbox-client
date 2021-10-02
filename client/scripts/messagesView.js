// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    App.fetch(MessagesView.render);
  },

  render: function() {
    // TODO: Render _all_ the messages.

    console.log('our test ', Messages.retrieve(0));

    for (var i = 0; i < Messages._data.length; i ++) {
      MessagesView.renderMessage(Messages.retrieve(i));
    }

  },

  renderMessage: function(message, roomname) {
    // TODO: Render a single message.
    if (roomname === undefined) {
      var username = $(`<div class="message">${message.github_handle} ${message.text} ${message.username} ${message.roomname}</div>`);

      $('#chats').append(username);
    } else {
      if (message.roomname === roomname) {
        var username = $(`<div class="message">${message.github_handle} ${message.text} ${message.username} ${message.roomname}</div>`);

        $('#chats').append(username);
      }
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }
};
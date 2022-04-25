export let MessageType = {
  // A message type you send to server, when want to join.
  JOIN: 1,
  // A message type you send to server, when want to disconnect from server.
  DISCONNECT: 2,

  CREATE_GAME: 3,

  // You receive room info as a response for join command. It contains information about
  // the room you joined, and it's users
  GAME: 4,

  START_GAME: 5,
  GAME_INFO: 6,

  // A message type you receive from server when another user want to join.
  USER_JOIN: 7,
  // A message type you receive from server when another user is ready to play.
  USER_READY: 8,
  // A message type you receive from server when another user want to disconnect.
  USER_DISCONNECT: 9,
  USER_SENT_MESSAGE: 10,
  USER_MESSAGE_RECEIVED: 11,
  DISCUSSION_TIMER_INFO: 12,

  // Errors... shit happens
  ERROR_ROOM_IS_FULL: 998,
  ERROR_USER_INITIALIZED: 998,
  ERROR_GAME_ALREADY_EXIST: 999,
}
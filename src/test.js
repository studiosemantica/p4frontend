const messages = [
    {
        "id": 1,
        "sender_name": "suresh",
        "sender": 2,
        "receiver_name": "motiv-a",
        "receiver": 1,
        "message": "A new message from suresh user 2 to motiv-a user 1.",
        "timestamp": "2020-09-16T19:03:51.035829Z",
        "last_update_at": "2020-09-16T19:03:51.035916Z",
        "is_read": false
    },
    {
        "id": 4,
        "sender_name": "motiv-a",
        "sender": 1,
        "receiver_name": "suresh",
        "receiver": 2,
        "message": "A new message from magda 3 to suresh user 2.",
        "timestamp": "2020-09-16T19:14:00.306893Z",
        "last_update_at": "2020-09-16T19:14:00.306936Z",
        "is_read": false
    },
    {
        "id": 5,
        "sender_name": "motiv-a",
        "sender": 1,
        "receiver_name": "motiv-a",
        "receiver": 1,
        "message": "A new message from magda 3 to user 1.",
        "timestamp": "2020-09-16T19:21:58.832091Z",
        "last_update_at": "2020-09-16T19:21:58.832150Z",
        "is_read": false
    },
    {
        "id": 6,
        "sender_name": "motiv-a",
        "sender": 1,
        "receiver_name": "motiv-a",
        "receiver": 1,
        "message": "A new message from suresh 2 to user motiv-a 1.",
        "timestamp": "2020-09-20T16:17:34.730337Z",
        "last_update_at": "2020-09-20T16:17:34.730395Z",
        "is_read": false
    },
    {
        "id": 7,
        "sender_name": "motiv-a",
        "sender": 1,
        "receiver_name": "motiv-a",
        "receiver": 1,
        "message": "A new message from suresh 2 to user motiv-a 1.",
        "timestamp": "2020-09-20T17:48:06.988606Z",
        "last_update_at": "2020-09-20T17:48:06.988661Z",
        "is_read": false
    },
    {
        "id": 8,
        "sender_name": "motiv-a",
        "sender": 1,
        "receiver_name": "motiv-a",
        "receiver": 1,
        "message": "A new message from suresh 2 to user magda 3.",
        "timestamp": "2020-09-20T20:29:48.874689Z",
        "last_update_at": "2020-09-20T20:29:48.874729Z",
        "is_read": false
    },
    {
        "id": 9,
        "sender_name": "motiv-a",
        "sender": 1,
        "receiver_name": "motiv-a",
        "receiver": 1,
        "message": "A new message from suresh 2 to user magda 3.",
        "timestamp": "2020-09-20T20:30:13.080645Z",
        "last_update_at": "2020-09-20T20:30:13.080710Z",
        "is_read": false
    },
    {
        "id": 11,
        "sender_name": "suresh",
        "sender": 2,
        "receiver_name": "motiv-a",
        "receiver": 1,
        "message": "A new message from suresh 2 to user magda 3.",
        "timestamp": "2020-09-20T20:31:16.996023Z",
        "last_update_at": "2020-09-20T20:31:16.996059Z",
        "is_read": false
    }
]

let conversations = {} // this would be this.conversations instead
const user_name = "motiv-a" // this would be dynamically set according to the logged-in user

messages.forEach(message => {
if (message.sender_name != user_name) { // messages sent TO user will be categorized by sender_name
    if (conversations[message.sender_name]) {
        conversations[message.sender_name].push(message)
    } else {
        conversations[message.sender_name] = [message]
    }
} else if (message.receiver_name != user_name) { // messages sent TO anyone else will be categorized by receiver name
    if (conversations[message.receiver_name]) {
        conversations[message.receiver_name].push(message)
    } else {
        conversations[message.receiver_name] = [message]
    }
} else { // base case: user sends message to self
    if (conversations[user_name]) {
        conversations[user_name].push(message)
    } else {
        conversations[user_name] = [message]
    }
}
})

console.log(conversations)

// left-hand of your design:
// <div v-for="conversation in Object.keys(conversations)" v-bind:name="conversation" v-on:click="() => selectedConversation = conversation">
//      <h3>{{conversation}} :: {{conversations[conversation].length}} messages</h3>
//      <p>{{conversations[conversation][0].message}}</p>
// </div>
// right-hand:
// <div v-for="message in conversations[selectedConversation] || []">
//      <h3>{{message.sender_name}}</h3>
//      <p>{{message.message}}
// </div>
// demonstrations:
console.log('left-hand')
Object.keys(conversations).forEach(conversation => {
console.log(`${conversation} :: ${conversations[conversation].length} messages`)
console.log(conversations[conversation][0].message)
})

console.log('\nright-hand with "suresh" selected')
const conversation = "suresh"
conversations[conversation].forEach(message => {
console.log(message.sender_name)
console.log(message.message)
})
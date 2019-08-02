import React from 'react';
import Message from '../Message/Message'

class Chat extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
          messages: [],
          messageInput: ''
        }
    }
        

    changeInputMessage = (e) => {
        this.setState({ messageInput: e.target.value })
    }

    sendMessageOnEnter = (e) => {
        if (e.key === 'Enter') {
            this.setState({ 
                messages: [...this.state.messages, { "text": this.state.messageInput }],
                messageInput: ""
            })
        }
    }

    render () {
        const messages = this.state.messages.map((message) => {
          return (
              <Message text={message.text}/>
          );
        });
        return (
            <div className='chat'>
                <div className="message-list"> 
                  <div className="messages">{messages}</div>
                </div>
               
                <input type="text" className="input-message" 
                  value={this.state.messageInput} 
                  onChange={this.changeInputMessage} 
                  onKeyPress={this.sendMessageOnEnter}></input>
                
            </div>
        )
    }
}

export default Chat;
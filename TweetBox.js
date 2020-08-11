import React,{ useState} from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
      displayName:'iwphox',
      username:'shubham',
      verified:true,
      text:tweetMessage,
      image:tweetImage,
      avatar:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/29/687611-660132-hrithik-roshan-03.jpg"
    });
    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="http://d.ibtimes.co.uk/en/full/1436518/zayn-malik.jpg" />
          <input 
           onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            placeholder="What's happening" 
            type="text" 
          />
        </div>
        <input 
          className="tweetBox__imageInput" 
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Enter image URL" 
          type="text" />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

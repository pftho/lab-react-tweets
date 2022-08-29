import User from "../components/User";
import Actions from "../components/Actions";
import Message from "../components/Message";
import ProfileImage from "../components/ProfileImage";
import Timestamp from "../components/Timestamp";

function Tweet({ tweet }) {
  console.log("TWEET", { tweet });
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

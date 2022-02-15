import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <div className="youtube">
        <div className="youtube-background">
          <img src={props.background} alt="welwel"></img>
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="welwel" className="youtube-avatar" />
          <div className="youtube-description">
            <div className="youtube-title">
              welcome to tú welcome to tú welcome to tú welcome to tú
            </div>
            <div className="youtube-author">{props.author}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;

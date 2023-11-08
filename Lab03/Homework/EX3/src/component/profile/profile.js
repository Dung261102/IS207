import * as React from "react";
import experience from "../experience/experience";

const profile = () => {
  return (
    <div className="container">
      <div className="profile-bg">
        <header className="profile">
          <h2>Profile</h2>
        </header>
        <p>I'am a student</p>
        <experience />
      </div>

      <div>
        <div className="about">
          <h2>About me</h2>
          <p>
            I am a lovely cat. I have passion in IT and I want to become data
            analyst.
          </p>
        </div>

        <div className="img">
        <img src="Nguyễn Dung.jpg"
          />
        </div>

        <div className="details">
          <h2>Details</h2>
          <p>
            <b>Name:</b> <br />
            Nguyen Thi Dung <br />
            <b>Age:</b> <br />
            21 years <br />
            <b>Location:</b> <br />
            UIT, VNU-HCM
          </p>
        </div>
      </div>
    </div>
  );
};

export default profile;
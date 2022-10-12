import React from "react";
import "../styles/components.scss";

export default function Tabs() {
  return (
    <div className="tabs">
      <div className="inner">
        <div className="logo">
          <img src="/assets/icons/logo.svg" alt="" />
        </div>
        {/* <div className="tab-wrapper">
          <i className="fas fa-home"></i>
          <img src="/assets/icons/playlist.png" alt="" />
          <img src="/assets/icons/radio.png" alt="" />
          <img src="/assets/icons/videos.png" alt="" />
        </div>
        <div className="tab-wrapper">
          <img src="/assets/icons/profile.png" alt="" />
          <img src="/assets/icons/logout.png" alt="" />
        </div> */}
      </div>
    </div>
  );
}

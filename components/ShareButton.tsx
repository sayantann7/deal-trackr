"use client";
import React from "react";
import Image from "next/image";

const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: 'DealTrackr',
      text: 'Check out this product on DealTrackr',
      url: window.location.href
    })
  }
}

function ShareButton() {
  return (
    <button className="p-2 bg-white-200 rounded-10" onClick={handleShare}>
      <Image src="/assets/icons/share.svg" alt="share" width={20} height={20} />
    </button>
  );
}

export default ShareButton;

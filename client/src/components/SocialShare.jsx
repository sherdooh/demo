import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedinIn,
  FaWhatsappSquare,
} from "react-icons/fa";

const SocialShare = ({ url, title, content, image }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedContent = encodeURIComponent(content);
  const encodedImage = encodeURIComponent(image);

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send/?text=${encodedUrl}`;
  

  return (
    
    
    <div className="w-full flex justify-left">
        <div className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[20px]">Share on Socials:</div>
       
        
      <a
        target="_blank"
        rel="noreferrer"
        href={facebookShareUrl}
        className="text-[#3b5998] text-4xl w-12 h-auto"
      >
        <FaFacebookSquare />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={twitterShareUrl}
        className="text-[#00acee] text-4xl w-12 h-auto"
      >
        <FaTwitterSquare />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={linkedinShareUrl}
        className="text-[#0072b1] text-4xl w-12 h-auto"
      >
        <FaLinkedinIn />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={whatsappShareUrl}
        className="text-[#25D366] text-4xl w-12 h-auto"
      >
        <FaWhatsappSquare />
      </a>
    </div>
  );
};

export default SocialShare;

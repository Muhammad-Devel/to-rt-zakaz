import React from "react";

const MapEmbed = () => {
  return (
    <div id="map" style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16861.61375994434!2d60.266210123427015!3d41.66135152795727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41de490ad15d56cf%3A0x974cb1dc4c6b388b!2sUZTEX%20KATQALA!5e0!3m2!1sru!2s!4v1726644997270!5m2!1sru!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapEmbed;

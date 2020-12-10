import React from 'react';
import coverImage from "../../assets/cover/swEng.jpg";
function Cover() {
  return (
    <section>
     
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default Cover;
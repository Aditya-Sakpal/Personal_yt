import React from 'react'
import Youtube from 'react-youtube'

function Home(props) {
  return (
    <div>
      {
        props.data.urls.map((vi)=>(
          <Youtube 
          key={vi} 
          videoId={vi}
          width="50"
          height="50"
          />
        ))
      }
    </div>
  )
}

export default Home

// import React, { useState, useEffect } from "react";

// const Home = (props) => {
//   const [player, setPlayer] = useState(null);

//   useEffect(() => {
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";

//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     window.onYouTubeIframeAPIReady = () => {
//       const players = [];
//       props.data.urls.forEach((url, index) => {
//         const newPlayer = new window.YT.Player(`player-${index}`, {
//           height: "390",
//           width: "640",
//           videoId: url.split("=")[1],
//         });
//         players.push(newPlayer);
//       });
//       setPlayer(players);
//     };
//   }, [props.data.urls]);

//   return (
//     <div>
//       {props.data.urls.map((url, index) => (
//         <div key={`player-${index}`} id={`player-${index}`} />
//       ))}
//     </div>
//   );
// };

// export default Home;

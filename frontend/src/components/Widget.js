import { useState } from "react";

function Widget( props ) {
    const [isLarge, setIsLarge] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const toggleSize = () => {
      setIsLarge((prev) => !prev);
    };

    const handleVisibilityChange = (event) => {
        setIsVisible(event.target.value === 'show');
      };

    let section = props.data
    console.log(`section`, section)

    return (
        <div className="dgs-video">
            <div className="flex c-gap-10 dgs-video-controls">
                <div onClick={toggleSize}>
                    <svg  width="20" viewBox="0 0 463 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 1">
                        <rect id="Rectangle 1" x="20" y="20" width="423" height="298" rx="20" stroke="#2E2B24" stroke-width="40"/>
                        <path id="Union" d="M142 63V89H91V140H65V63H142Z" fill="#2E2B24"/>
                        <path id="Union_2" d="M321 269L321 243L372 243L372 192L398 192L398 269L321 269Z" fill="#2E2B24"/>
                        </g>
                    </svg>
                </div>
            </div>
            <video 
                 width={isLarge ? 800 : 300} 
                 style={{ transition: "width 0.3s ease" }}
                 controls src={`${process.env.REACT_APP_BACKEND}${section.Video.url}`} />
        </div>
    );
}

export default Widget;

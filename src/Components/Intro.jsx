import VideoEmbed from "./VideoEmbed"

export const Intro = () => {
  return (
    <div className="content">
        <h3 className="name">
            I'm Beau Beaumont
        </h3>
        <div className="flex justify-between px-2">
            <div className="intro-text-container">
                <p className="intro-text">
                A Film and Moving Image Production graduate from Norwich University of the Arts, with a specialism in cinematography. My vision is to create professional and consistent content, elevating worlds and narratives within film, television and advertising through creative and technical use of camera and lighting. I am available for film and videography work, with experience in events, brand advertising, 1st and 2nd AC roles.
                </p>
            </div>
            <div className="video">
                <VideoEmbed embedId={"73d3sSm0E-Q"} />
            </div>
        </div>
        <div className="content intro-extra">
            <p className="intro-text">
            See my showreel here, or check out some of my other projects!
            </p>
        </div>
    </div>
  )
}

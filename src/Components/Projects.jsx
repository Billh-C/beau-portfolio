import VideoEmbed from "./VideoEmbed"

export const Projects = () => {
  return (
    <div className="content">
        <h3 className="name self-center mt-3 bg-accent2">
            Projects
        </h3>
        {films.map(film => {
            return <div key={film.ID}>
            <div className="content intro-extra mt-24">
                <p className="film-title">{film.Name}</p>
            </div>
            {console.log(isEven(film.ID))}
            {isEven(film.ID) === true ? 
            (<LeftVideoPair film={film} />) :
            (<RightVideoPair film={film} />)
            }
            </div>
        })}
    </div>
  )
}


const LeftVideoPair = (props) => {
    return (
        <div className="flex justify-center px-2 mt-16 mb-28 bg-white/10 backdrop-blur-xl py-24 mx-44 rounded-md">
            <div className="intro-text-container">
                <p className="intro-text">
                {props.film.desc}
                </p>
            </div>
            <div className="video">
            <VideoEmbed embedId={props.film.embedId} />
            </div>
        </div>
    )
}
const RightVideoPair = (props) => {
    return (
        <div className="flex justify-center px-2 mt-16 mb-28 bg-white/10 backdrop-blur-xl py-24 mx-44 rounded-md">
            <div className="video">
            <VideoEmbed embedId={props.film.embedId} />
            </div>
            <div className="intro-text-container">
                <p className="intro-text ml-16">
                {props.film.desc}
                </p>
            </div>
        </div>
    )
}

function isEven(n) {
    return n % 2 == 0;
 }

export const films = [
    {ID: 1, Name: "The Party", desc: "a young man sets up a rehearsal for a difficult conversation with his ex-partner, but when his anxiety and paranoia get the better of him, the rehearsal begins to crumble.", embedId: "vL_lfQHvbiY"},
    {ID: 2, Name:"Nuero", desc: "An exploration of neurodivergency and its ramifications on every day life.", embedId: "HFmpfR2kjY0"},
    {ID: 3, Name:"Erika", desc: "Struggling to survive in the Nazi regime, Erika finds herself in a dangerous situation when she befriends a Russian prisoner of war.", embedId: "V2H5UlLwe0k"},
    {ID: 4, Name:"Trench", desc: "A short film for a small actor's group to showcase their range and talents", embedId: "mELCaWTIyc4"},
    {ID: 5, Name:"Casablanca", desc: "An exercise in producing content for fashion brand 'Matches Fashion.' (University project)", embedId: "eTLQ0O61RdU"},
    {ID: 6, Name:"Animals In War", desc: "Short video for 'Animals in War' charity, celebrating and remembering the animals that saved lives in the war.", embedId: "DFEMETDdxuU"},
    {ID: 7, Name:"E.L.F", desc: "Test promotional video for E.L.F cosmetics waterproof mascara.", embedId: "1A306K9BXVE"}
]

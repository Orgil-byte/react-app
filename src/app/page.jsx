export default function hello() {
  return (
    <div className="flex gap-7 w-full h-screen items-center justify-center">
      <Bye
        img="/Profile.svg"
        name="Sofia Bennet"
        desc="Hello world"
        scores="674"
        reviews="346"
        themeColor="bg-[#eb4034]"
        descColor="text-[#f57878]"
      />
      <Bye
        img="/unnamed.jpg"
        name="Orgil"
        desc="Bye world"
        scores="638"
        reviews="3298"
        themeColor="bg-[#2f2f2f]"
        descColor="text-[#929292]"
      />
      <Bye
        img="/lebron.jpg"
        name="Lebron"
        desc="Basketball"
        scores={6383}
        reviews={32987}
        themeColor="bg-[#3498eb]"
        descColor="text-[#a2d9de]"
      />
      <Main />
    </div>
  );
}
const Bye = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex flex-col items-center w-70 h-119.75 pt-2 rounded-[40px] border border-transparent ${props.themeColor} opacity-95`}
      >
        <img
          className="w-66 h-70 rounded-4xl  object-cover object-center"
          src={props.img}
          alt="profile"
        />
        <div className="flex flex-col justify-center w-70 h-30.75 py-7 px-5 gap-1">
          <p className="font-sans text-white text-[18px] font-medium leading-[150%]">
            {props.name}
          </p>
          <p
            className={`font-sans ${props.descColor} text-[15px] font-normal leading-[150%]`}
          >
            {props.desc}
          </p>
        </div>
        <div className="flex w-70 h-17 justify-between border-t-1.5 px-6 pb-6 items-center">
          <div className="font-sans text-[#f9f9f9] text-[14px] font-normal leading-[150%]">
            ⛯ {props.scores}
          </div>
          <div className="font-sans text-[#f9f9f9] text-[14px] font-normal leading-[150%]">
            ⌅ {props.reviews}
          </div>
          <div className="font-sans flex w-27.25 h-11 py-[11.5px] px-5.5 gap-1 rounded-4xl border bg-[#343434] border-solid border-[#1818180d] inset-shadow-sm inset-shadow-indigo-500 ">
            <div className="font-sans text-[#f9f9f9]">Follow</div>
            <div className="font-sans text-[#f9f9f9]">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Main = () => {
  const value = "Hello World!";
  return <Comp1 props1={value} />;
};

const Comp1 = (props) => {
  return <Comp2 props2={props.props1} />;
};

const Comp2 = (props) => {
  return <Comp3 props3={props.props2} />;
};

const Comp3 = (props) => {
  return <Comp4 props4={props.props3} />;
};

const Comp4 = (props) => {
  return <Comp5 props5={props.props4} />;
};

const Comp5 = (props) => {
  return <Comp6 props6={props.props5} />;
};

const Comp6 = (props) => {
  return <Comp7 props7={props.props6} />;
};

const Comp7 = (props) => {
  return <Comp8 props8={props.props7} />;
};

const Comp8 = (props) => {
  return <Comp9 props9={props.props8} />;
};

const Comp9 = (props) => {
  return <Comp10 props10={props.props9} />;
};

const Comp10 = (props) => {
  return <Comp11 props11={props.props10} />;
};

const Comp11 = (props) => {
  return <Comp12 props12={props.props11} />;
};

const Comp12 = (props) => {
  return <Comp13 props13={props.props12} />;
};

const Comp13 = (props) => {
  return <Comp14 props14={props.props13} />;
};
const Comp14 = (props) => {
  return <Comp15 props15={props.props14} />;
};
const Comp15 = (props) => {
  return <Comp16 props16={props.props15} />;
};
const Comp16 = (props) => {
  return <Comp17 props17={props.props16} />;
};
const Comp17 = (props) => {
  return <Comp18 props18={props.props17} />;
};
const Comp18 = (props) => {
  return <Comp19 props19={props.props18} />;
};
const Comp19 = (props) => {
  return <Comp20 props20={props.props19} />;
};
const Comp20 = (props) => {
  return <Comp21 props21={props.props20} />;
};

const Comp21 = (props) => {
  return <Comp22 props22={props.props21} />;
};

const Comp22 = (props) => {
  return <Comp23 props23={props.props22} />;
};

const Comp23 = (props) => {
  return <Comp24 props24={props.props23} />;
};

const Comp24 = (props) => {
  return <Comp25 props25={props.props24} />;
};

const Comp25 = (props) => {
  return <Comp26 props26={props.props25} />;
};

const Comp26 = (props) => {
  return <Comp27 props27={props.props26} />;
};

const Comp27 = (props) => {
  return <Comp28 props28={props.props27} />;
};

const Comp28 = (props) => {
  return <Comp29 props29={props.props28} />;
};

const Comp29 = (props) => {
  return <Comp30 props30={props.props29} />;
};

const Comp30 = (props) => {
  return <Comp31 props31={props.props30} />;
};

const Comp31 = (props) => {
  return <Comp32 props32={props.props31} />;
};

const Comp32 = (props) => {
  return <Comp33 props33={props.props32} />;
};
const Comp33 = (props) => {
  return <Comp34 props34={props.props33} />;
};
const Comp34 = (props) => {
  return <Comp35 props35={props.props34} />;
};
const Comp35 = (props) => {
  return <Comp36 props36={props.props35} />;
};
const Comp36 = (props) => {
  return <Comp37 props37={props.props36} />;
};
const Comp37 = (props) => {
  return <Comp38 props38={props.props37} />;
};
const Comp38 = (props) => {
  return <Comp39 props39={props.props38} />;
};

const Comp39 = (props) => {
  return <Comp40 props40={props.props39} />;
};

const Comp40 = (props) => {
  return <Comp41 props41={props.props40} />;
};

const Comp41 = (props) => {
  return <Comp42 props42={props.props41} />;
};

const Comp42 = (props) => {
  return <Comp43 props43={props.props42} />;
};

const Comp43 = (props) => {
  return <Comp44 props44={props.props43} />;
};

const Comp44 = (props) => {
  return <Comp45 props45={props.props44} />;
};

const Comp45 = (props) => {
  return <Comp46 props46={props.props45} />;
};

const Comp46 = (props) => {
  return <Comp47 props47={props.props46} />;
};

const Comp47 = (props) => {
  return <Comp48 props48={props.props47} />;
};

const Comp48 = (props) => {
  return <Comp49 props49={props.props48} />;
};

const Comp49 = (props) => {
  return <Comp50 props50={props.props49} />;
};

const Comp50 = (props) => {
  return <Comp51 props51={props.props50} />;
};

const Comp51 = (props) => {
  return <Comp52 props52={props.props51} />;
};
const Comp52 = (props) => {
  return <Comp53 props53={props.props52} />;
};
const Comp53 = (props) => {
  return <Comp54 props54={props.props53} />;
};
const Comp54 = (props) => {
  return <Comp55 props55={props.props54} />;
};
const Comp55 = (props) => {
  return <Comp56 props56={props.props55} />;
};
const Comp56 = (props) => {
  return <Comp57 props57={props.props56} />;
};
const Comp57 = (props) => {
  return <Comp58 props58={props.props57} />;
};

const Comp58 = (props) => {
  return <Comp59 props59={props.props58} />;
};

const Comp59 = (props) => {
  return <Comp60 props60={props.props59} />;
};

const Comp60 = (props) => {
  return <Comp61 props61={props.props60} />;
};

const Comp61 = (props) => {
  return <Comp62 props62={props.props61} />;
};

const Comp62 = (props) => {
  return <Comp63 props63={props.props62} />;
};

const Comp63 = (props) => {
  return <Comp64 props64={props.props63} />;
};

const Comp64 = (props) => {
  return <Comp65 props65={props.props64} />;
};

const Comp65 = (props) => {
  return <Comp66 props66={props.props65} />;
};

const Comp66 = (props) => {
  return <Comp67 props67={props.props66} />;
};

const Comp67 = (props) => {
  return <Comp68 props68={props.props67} />;
};

const Comp68 = (props) => {
  return <Comp69 props69={props.props68} />;
};

const Comp69 = (props) => {
  return <Comp70 props70={props.props69} />;
};

const Comp70 = (props) => {
  return <Comp71 props71={props.props70} />;
};
const Comp71 = (props) => {
  return <Comp72 props72={props.props71} />;
};
const Comp72 = (props) => {
  return <Comp73 props73={props.props72} />;
};
const Comp73 = (props) => {
  return <Comp74 props74={props.props73} />;
};
const Comp74 = (props) => {
  return <Comp75 props75={props.props74} />;
};
const Comp75 = (props) => {
  return <Comp76 props76={props.props75} />;
};
const Comp76 = (props) => {
  return <Comp77 props77={props.props76} />;
};

const Comp77 = (props) => {
  return <Comp78 props78={props.props77} />;
};

const Comp78 = (props) => {
  return <Comp79 props79={props.props78} />;
};

const Comp79 = (props) => {
  return <Comp80 props80={props.props79} />;
};

const Comp80 = (props) => {
  return <Comp81 props81={props.props80} />;
};

const Comp81 = (props) => {
  return <Comp82 props82={props.props81} />;
};

const Comp82 = (props) => {
  return <Comp83 props83={props.props82} />;
};

const Comp83 = (props) => {
  return <Comp84 props84={props.props83} />;
};

const Comp84 = (props) => {
  return <Comp85 props85={props.props84} />;
};

const Comp85 = (props) => {
  return <Comp86 props86={props.props85} />;
};

const Comp86 = (props) => {
  return <Comp87 props87={props.props86} />;
};

const Comp87 = (props) => {
  return <Comp88 props88={props.props87} />;
};

const Comp88 = (props) => {
  return <Comp89 props89={props.props88} />;
};

const Comp89 = (props) => {
  return <Comp90 props90={props.props89} />;
};
const Comp90 = (props) => {
  return <Comp91 props91={props.props90} />;
};
const Comp91 = (props) => {
  return <Comp92 props92={props.props91} />;
};
const Comp92 = (props) => {
  return <Comp93 props93={props.props92} />;
};
const Comp93 = (props) => {
  return <Comp94 props94={props.props93} />;
};
const Comp94 = (props) => {
  return <Comp95 props95={props.props94} />;
};
const Comp95 = (props) => {
  return <Comp96 props96={props.props95} />;
};

const Comp96 = (props) => {
  return <Comp97 props97={props.props96} />;
};

const Comp97 = (props) => {
  return <Comp98 props98={props.props97} />;
};

const Comp98 = (props) => {
  return <Comp99 props99={props.props98} />;
};

const Comp99 = (props) => {
  return <Comp100 props100={props.props99} />;
};

const Comp100 = (props) => {
  console.log(props);
  return (
    <div className="text-5xl text-amber-200 bg-amber-800">{props.props100}</div>
  );
};

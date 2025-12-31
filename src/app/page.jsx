export default function hello() {
  return (
    <div>
      <Bye />
    </div>
  );
}
const Bye = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center w-70 h-119.75 pt-2 rounded-[40px] border border-transparent bg-[#2f2f2f] opacity-95">
        <img
          className="w-66 h-70 rounded-4xl border-2 bg-center bg-contain bg-no-repeat"
          src="/Profile.svg"
          alt="profile"
        />
        <div className="flex flex-col justify-center w-70 h-30.75 py-7 px-5 gap-1">
          <p className="font-sans text-white text-[18px] font-medium leading-[150%]">
            Sophie Bennett ✔
          </p>
          <p className="font-sans text-[#929292] text-[15px] font-normal leading-[150%]">
            Product Designer who focuses on simplicity & usability.
          </p>
        </div>
        <div className="flex w-70 h-17 justify-between border-t-1.5 px-6 pb-6 items-center">
          <div className="font-sans text-[#f9f9f9] text-[14px] font-normal leading-[150%]">
            ⛯ 312
          </div>
          <div className="font-sans text-[#f9f9f9] text-[14px] font-normal leading-[150%]">
            ⌅ 48
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

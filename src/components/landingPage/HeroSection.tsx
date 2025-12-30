import Spline from "@splinetool/react-spline";

// export default function App() {
//   return (
//     <Spline scene="https://prod.spline.design/DU2jhIycaITSD7zl/scene.splinecode" />
//   );
// }

export function HeroSection() {
  return (
    <div className="h-screen w-full bg-radial-[at_50%_75%] from-white to-sky-100 to-90% ">
      <div className="flex flex-col justify-center items-center gap-10 p-10 ">
        <h1 className="text-2xl text-[#003160] font-bold">Minimal Landing Page</h1>
        <div className="flex flex-row justify-around w-screen p-30">
          <div className="bg-[#90C5F7] flex flex-col rounded-2xl h-85 w-80 p-10 gap-10 justify-center items-center">
            <form
              className="flex flex-col gap-5 h-75 w-70 justify-center text-white"
              action=""
            >
              <label>Email</label>
              <input className="bg-white rounded-md w-70 py-1" type="text" />
              <label>password</label>
              <input className="bg-white rounded-md w-70 py-1 " type="text" />
            </form>
            <button className="bg-[#0442F3] rounded-md px-15 py-2 text-white hover:bg-[#002ba0]">
              submit
            </button>
          </div>
          <div className="flex flex-col gap-5 items-center content-center">
            <div className="w-200 h-100">
              <Spline
                className=""
                scene="https://prod.spline.design/DU2jhIycaITSD7zl/scene.splinecode"
              />
            </div>
            <div className="p-10 bg-[#90C5F7] rounded-2xl h-80 w-120 flex flex-col gap-2 content-center">
              <h4 className="text-white font-semibold">Otions</h4>
              <div className="text-white flex flex-col gap-1">
                <ol className="flex flex-col gap-0.5">
                  <li className="list-disc">Lorem ipsum dolor sit amet.</li>
                  <li className="list-disc">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </li>
                  <li className="list-disc">
                    Lorem ipsum dolor sit amet consectetur.
                  </li>
                  <li className="list-disc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex!
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <h1 className="text-2xl text-[#003160]">Minimal Landing Page</h1>
        <div className="flex flex-row justify-between w-screen p-30">
          <div className="bg-[#90C5F7] flex flex-col rounded-2xl h-85 w-80 p-10 gap-10">
            <form className="flex flex-col gap-5 h-75 w-70" action="">
              <label>Email</label>
              <input className="bg-white rounded-md w-" type="text" />
              <label>password</label>
              <input className="bg-white rounded-md" type="text" />
            </form>
            <button className="bg-[#0442F3] rounded-md">submit</button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-200 h-100">
              <Spline
                className=""
                scene="https://prod.spline.design/DU2jhIycaITSD7zl/scene.splinecode"
              />
              <div className="p-10 bg-[#90C5F7] rounded-2xl h-85 w-80">
                <h4>Otions</h4>
                <div>
                  <ol>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex!
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

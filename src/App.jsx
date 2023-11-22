import './App.css'

function App() {

  return (
    <>
      <div class='h-screen w-100vh flex flex-col items-center justify-center'>
        <form action="" class='w-[500px] h-[75vh] border-2 border-solid border-gray-300 rounded p-4'>
          <fieldset class='flex flex-col  justify-around h-full'>
              <h2 class='font-bold text-[30px] '>Registration form</h2>
              <div class='flex flex-col h-[10vh] justify-around'>
                <label htmlFor="" class=''>First Name <sup>*</sup> </label>
                <input type="text" name="" id="" placeholder='First Name' class='border-2 border-solid w-[65vh] h-[5vh] rounded-md'/>
              </div>
              <div class='flex flex-col h-[10vh] justify-around'>
                <label htmlFor="">Last Name</label>
                <input type="text" name="" id="" placeholder='Last Name' class='border-2 border-solid w-[65vh] h-[5vh] rounded-md'/>
              </div>
              <div class='flex flex-col h-[10vh] justify-around'>
                <label htmlFor="">Email Address <sup>*</sup></label>
                <input type="text" name="" id="" placeholder='Email Address' class='border-2 border-solid w-[65vh] h-[5vh] rounded-md'/>
              </div>
              <div class='flex flex-col h-[10vh] justify-around'>
                <label htmlFor="">Password <sup>*</sup></label>
                <input type="text" name="" id=""  class='border-2 border-solid w-[65vh] h-[5vh] rounded-md'/>
              </div>
              <div class='flex flex-col h-[10vh] justify-around'>
                <label htmlFor="">Role <sup>*</sup></label>
                <select class='border-2 border-solid w-[65vh] h-[5vh] rounded-md bg-gray-100'>
                  <option value="">Role</option>
                  <option value="">Individual</option>
                  <option value="">Business</option>
                </select>
              </div>
              <button type="submit" class="border-2 h-[8vh] w-[20vh] bg-gray-400 text-lg font-bold text-gray-500">Register Now</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default App

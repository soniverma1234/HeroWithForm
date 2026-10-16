import { CircleCheck } from "lucide-react"

const HeroSection = () => {
  return (
    <section  className="bg-blue-50">
        <div className="mx-auto max-w-6xl grid gap-10 py-20 px-6 gap-10 md:grid-cols-2 ">
            <div className=" text-2xl text-gray-900 md:text-5xl">

              <h1 className="font-extrabold leading-tight text-4xl">Start Your Journey <br />Today</h1>  
              
              <p className="mt-4 max-w-md text-lg text-gray-600 ">Create your free account and get access to all features.</p>

              <ul className="mt-6 space-y-3 text-gray-700 text-xl ">
                <li className="flex items-center gap-3">
                 <CircleCheck className="text-blue-600" size={20} />   
                    No credit card required</li>
                    
                <li className="flex items-center gap-3">
                     <CircleCheck className="text-blue-600" size={20} /> 
                    Free 14-day trial</li>

                <li className="flex items-center gap-3">
                    <CircleCheck className="text-blue-600" size={20} /> 
                    Cancel anytime</li>
                 
              </ul>
            </div>

            <div className="w-full max-w-sm rounded-2xl bg-white p-7 shadow-lg md:justify-self-end">
                <h2 className="mb-5 text-xl font-bold text-gray-900">Create Account</h2>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input type="text" id=
                        "name" placeholder="Enter your name" required 
                        className="w-full rounded-lg border text-sm border-gray-200 py-2.5 pl-10 pr-3 pl-" />
                    </div>

                                        <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input type="text" id=
                        "email" placeholder="you@example.com" required 
                        className="w-full rounded-lg border text-sm border-gray-200 py-2.5 pl-10 pr-3 pl-" />
                    </div>

                                        <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input type="password" id=
                        "password" placeholder="Password" required 
                        className="w-full rounded-lg border text-sm border-gray-200 py-2.5 pl-10 pr-3 pl-" />
                    </div>

                    <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white shadow-md hover:bg-blue-950"
            >
              Sign Up
            </button>

                    
                    
                </form>



            </div>
        </div>
      
    </section>
  )
}

export default HeroSection

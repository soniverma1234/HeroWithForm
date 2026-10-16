
const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between px-10 py-4 shadow-sm "> 
        <h1 className="text-2xl font-bold text-blue-500">Logo</h1>
        <ul className="flex gap-6 font-medium text-gray-900">
            <li><a href="home">Home</a></li>
            <li><a href="pricing">Pricing</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
        <button className="rounded-lg bg-blue-600 text-white py-2 px-5 ">Sign Up</button>
    </nav>
  )
}

export default Navbar

import Image from "next/image";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <Image src="/logo.png" alt="Logo" width={200} height={27} />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">How to use</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

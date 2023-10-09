const Footer = ({ info }) => {
  const year = (new Date()).getFullYear();
  return (
    <footer>
        <nav className="mb-3">
            <div className="nav-links-container">
                <ul className="nav-links m-0 p-0">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <p className="mb-3">Copyright &copy; {year} {info?.firstName} {info?.middleInitial} {info?.lastName}. All rights reserved.</p> 
    </footer>
  )
}

export default Footer
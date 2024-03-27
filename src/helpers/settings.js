import cv from '../assets/Ojo_Toba_Rufus_CV.pdf';
export const BASE_URL = 'https://exuberant-lamb-long-underwear.cyclic.app';

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const fe = ["Angular", "Bootstrap", "CSS3", "HTML5", "ReactJS", "SASS", "JavaScript"]

export const shortDateTime = (date) => {
    let dateObject = new Date(date);
    return dateObject.toLocaleDateString('en-US');
}

export const shortLocalTime = (date) => {
    let dateObj = new Date(date);
    return dateObj.toLocaleTimeString("en-US");
}

export const fullYear = (date) => {
    let dateObj = new Date(date);
    return dateObj.getFullYear();
}

export const toYearAndMonth = (date) => {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  return `${months[month]}., ${year}.`;
}

export const setHeaders = (headers) => {
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', BASE_URL);
    headers.append('Access-Control-Allow-Credentials', 'true');
    return headers
}

export const toEmailLink = (address) => {
    return `mailto:${address}`
  }

  export const toPhoneLink = (phone) => {
    return `tel:${phone}`
  }

export const gradCapIconStyles = {
    height: '4.5rem',
    width: '4.5rem',
    lineHeight: '4.5rem',
    fontSize: '1.7rem',
    borderRadius: '50%',
    background: '#00001c',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top:'0',
    left: '-2.5rem'
  }

  export const smIconStyles = {
    fontSize: '3rem',
    color: '#00001c',
    paddingTop: '.5rem'
  }

 export const btnStyles = {
    background: '#00001c',
    padding: '1rem 2rem',
    border: 'none',
    outline: 'none',
    fontSize: '1.7rem'
  }

  export const SKILL_LEVELS = {
    0: "N/A",
    1: "Beginner",
    2: "Novice",
    3: "Proficient",
    4: "Advanced",
    5: "Expert"
  }

  export const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  export const openCV = () => {
    window.open(cv);
  }

  export const goToContact = () => {
    window.location.href='./#contact'
  }

  export const goToExperience = () => {
    window.location.href='./#experience';
  }

  export const goToProject = () => {
    window.location.href='./#projects';
  }

  export const goToGithubPage = () => {
    window.location.href='https://github.com/ojotobar';
  }

  export const goToLinkedInPage = (link) => {
    window.location.href=`${link}`;
  };

  export const internationalizePhone = (num) => {
    if(num != null && num[0] === "0"){
      return `+234${num?.substring(1)}`;
    }
    return num;
  }
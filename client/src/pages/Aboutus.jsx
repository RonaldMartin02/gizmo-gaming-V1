import { Link, useLocation } from 'react-router-dom';
import RPortrait from '../assets/img/Ronald.jpg';
import JPortrait from '../assets/img/Jeremy.jpg';
export default function Aboutus() {
  const currentPage = useLocation().pathname;

  return (
    <div className='About'>
      <h1 className='About_title'>Who are the Creators of Gizmo Gaming</h1>
      <div className='About_div'>
        <div className='About_div_imgs'>
      <img className='About_div_imgs_img' src={RPortrait} alt="" />
      <img className='About_div_imgs_img' src={JPortrait} alt="" />
        </div>
        <div className='About_description_div'>
      <div className='About_description'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quidem tenetur. Mollitia ipsa fuga debitis necessitatibus aspernatur distinctio eum neque dolore atque quisquam. Beatae quaerat deserunt expedita maxime labore commodi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eligendi? Ab ipsam nihil pariatur placeat quidem repudiandae sed numquam eos, maxime, provident corrupti cupiditate officiis sapiente similique. Aperiam, repellat veritatis. </p>
      </div>

      <div className='About_description'><p>My first foray in proper web development started with the 2023 UConn Fullstack coding bootcamp. From this course, with the training staff we had available to us, I was given a solid platform to be able to grow and improve my skills as a developer from. In terms of gamers, I was a pretty shotty one (pun fully intended) being that I only played one or two FPS games.</p><p> The idea behind this project then, was to offer novice gamers like myself a platform to learn specific tactics and character development that would make starting a new game a smoother process. We all know what its like to jump into a AAA title game months after launch just to be demolished. The goal of Gizmo Gaming is to alleviate that and sort of level the playing field, so to speak. Game On, Players!</p></div>
      </div>
      </div>
    </div>
  );
}
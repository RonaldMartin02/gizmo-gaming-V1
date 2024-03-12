import { Link, useLocation } from 'react-router-dom';
import RPortrait from '../assets/img/Ronald.jpg';
import JPortrait from '../assets/img/Jeremy.jpg';
import './scss/Aboutus.scss';
export default function Aboutus() {
  const currentPage = useLocation().pathname;

  return (
    <div className='About'>
      <h1 className='About_title'>Meet the Creators of Gizmo Gaming</h1>
      <h3 className='About_Names'>Ronald and Jeremy</h3>
      <div className='About_div'>
        <div className='About_div_imgs'>
          <img className='About_div_imgs_img' src={RPortrait} alt="" />
          <img className='About_div_imgs_img' src={JPortrait} alt="" />
        </div>
        <div className='About_description_div'>
          <div className='About_description'><p>Hi My Name is Ronald co-Owner of Gizmo Gaming</p> <p>
            I am a full stack developer with a passion for gaming. I have always been a fan of gaming and have always wanted to create a platform for gamers to share their experiences and tips. This why we created Gizmo Gaming. I hope you enjoy the site and find it useful.
          </p>
          </div>

          <div className='About_description'><p>My first foray in proper web development started with the 2023 UConn Fullstack coding bootcamp. From this course, with the training staff we had available to us, I was given a solid platform to be able to grow and improve my skills as a developer from. In terms of gamers, I was a pretty shotty one (pun fully intended) being that I only played one or two FPS games.</p><p> The idea behind this project then, was to offer novice gamers like myself a platform to learn specific tactics and character development that would make starting a new game a smoother process. We all know what its like to jump into a AAA title game months after launch just to be demolished. The goal of Gizmo Gaming is to alleviate that and sort of level the playing field, so to speak. Game On, Players!</p></div>
        </div>
      <div className='About_Us'>
        <h3>About Us</h3>
        <p>As full stack developers deeply immersed in the world of gaming, our passion for this dynamic industry has always fueled our desire to contribute in meaningful ways. Through countless hours spent exploring virtual realms and engaging with gaming communities, We've recognized the immense value in fostering a platform where gamers can freely exchange their insights, experiences, and expertise. It's this vision that inspired the creation of Gizmo Gaming a space dedicated to empowering players to share their gaming journeys, discover new strategies, and connect with like-minded enthusiasts. With Gizmo Gaming, we aim to offer a welcoming environment where gamers can thrive, learn, and forge lasting connections, ultimately enhancing the gaming experience for everyone involved.
        </p>
        <p>
          At Gizmo Gaming, our mission is simple yet profound: to provide a platform that not only entertains but also enriches the lives of gamers worldwide. We believe that every gaming story, tip, and recommendation shared on our platform contributes to a collective tapestry of knowledge and camaraderie. Whether you're a seasoned veteran or a novice explorer in the gaming universe, we invite you to join us on this exciting adventure. Together, let's celebrate the passion for gaming that unites us all and make Gizmo Gaming a vibrant community where every player feels valued and inspired.</p>
      </div>
    </div>
      </div>
  );
}
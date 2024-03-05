import { Link, useLocation } from 'react-router-dom';
import Portrait from '../assets/img/Classes.jpg';
export default function Aboutus() {
  const currentPage = useLocation().pathname;

  return (
    <div className='About'>
      <h1 className='About_title'>Who are the Creators of Gizmo Gaming</h1>
      <div className='About_div'>
      <img className='About_img' src={Portrait} alt="" />
      <p className='About_desctiption'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quidem tenetur. Mollitia ipsa fuga debitis necessitatibus aspernatur distinctio eum neque dolore atque quisquam. Beatae quaerat deserunt expedita maxime labore commodi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eligendi? Ab ipsam nihil pariatur placeat quidem repudiandae sed numquam eos, maxime, provident corrupti cupiditate officiis sapiente similique. Aperiam, repellat veritatis. </p>
      </div>
    </div>
  );
}
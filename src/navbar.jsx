import './index.css';
import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

class HoverButton {
  constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }
        
  attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
  }
        
  calculatePosition() {
     gsap.set(this.el, {
        x: 0,
        y: 0,
        scale: 1 });
      if(this.el) {
        const box = this.el.getBoundingClientRect();
        this.x = box.left + box.width * 0.5;
        this.y = box.top + box.height * 0.5;
        this.width = box.width;
        this.height = box.height;
      }
  }
        
  onMouseMove(e) {
    let hover = false;
    let hoverArea = this.hover ? 0.7 : 0.5;
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt(x * x + y * y);
    if (distance < this.width * hoverArea) {
      hover = true;
      if (!this.hover) {
        this.hover = true;
      }
      this.onHover(e.clientX, e.clientY);
    }
        
    if (!hover && this.hover) {
      this.onLeave();
      this.hover = false;
    }
  }
        
  onHover(x, y) {
    gsap.to(this.el, {
      x: (x - this.x) * 0.4,
      y: (y - this.y) * 0.4,
      scale: 1.15,
      ease: 'power2.out',
      duration: 0.4 });
        
    this.el.style.zIndex = 10;
  }
  onLeave() {
    gsap.to(this.el, {
      x: 0,
      y: 0,
      scale: 1,
      ease: 'elastic.out(1.2, 0.4)',
      duration: 0.7 });
        
    this.el.style.zIndex = 1;
  }}
        
  function CoolBtns() {
    useEffect(() => {
      const btn1 = document.querySelector('li:nth-child(1) button');
      new HoverButton(btn1);
      const btn2 = document.querySelector('li:nth-child(2) button');
      new HoverButton(btn2);
      const btn3 = document.querySelector('li:nth-child(3) button');
      new HoverButton(btn3);
    }, []); 
  
    return (
      <div className='FunNew'>
        <ul className='Funul'>
          <li className='Funli'>
            <button className='FunBtn F1'><Link to='/login' className='F1'>Login</Link></button>
          </li>
          <li className='Funli'>
            <button className='FunBtn F2'><Link to='/menu' className='F2'>Menu</Link></button>
          </li>
          <li className='Funli'>
            <button className='FunBtn F3'><Link to='/cart' className='F3'><svg className='Cart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart CartImg" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L
                        2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 
                        0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" stroke='currentColor' stroke-width='.5'/>
                    </svg></Link></button>
          </li>
        </ul>
      </div>
    );
  }

  function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
  }

  export default CoolBtns
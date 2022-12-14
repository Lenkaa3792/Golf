import React from "react";
import pic1 from './image/golf.jpg';
export default function About(){
    return( 
<div id="about">
  <img src={pic1} alt=""className='pic1'/>
<p className="p1">Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.
Golf, unlike most ball games, cannot and does not utilize a standardized playing area, and coping with the varied terrains encountered on different courses is a key part of the game. The game at the usual level is played on a course with an arranged progression of 18 holes, though recreational courses can be smaller, often having nine holes. Each hole on the course must contain a teeing ground to start from, and a putting green containing the actual hole or cup 4+1⁄4 inches (11 cm) in diameter. There are other standard forms of terrain in between, such as the fairway, rough (long grass), bunkers (or "sand traps"), and various hazards (water, rocks) but each hole on a course is unique in its specific layout and arrangement.</p>
</div>
    )
}
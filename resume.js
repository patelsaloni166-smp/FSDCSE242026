const root=document.getElementById('root');
const btn=document.getElementById('btn');


function Listen(){
   root.innerHTML=`<div style="width:700px; margin:30px auto; padding:20px; border:2px solid black; font-family:Arial;line-height:1.6" >
   <h1 style=text-align:center margin-bottom:5px>RESUME</h1> <h2 style=text-align:center>Saloni Patel</h2> <p style=text-align:center margin-bottom:0px>Btech-CSE | ABES Engineering College</p>
     <p style="text-align:center;"> 8563024974 | GitHub | LinkedIn </p> <hr> <h2>Career Objective</h2> <p> Motivated Computer Science Engineering student with strong knowledge of Data Structures, Web Development and Programming.Looking
      for opportunities to apply technical skills and grow as a software developer.</p> <h2>Education Information</h2> <p>Btech in Computer Science And Engineering <br> ABES Engineering College <p> <h2>Technical Skills</h2> 
      <ul>
      <li>C,C++</li>
      <li>JAVA</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>HTML and CSS</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <ul>
      <h2>Projects</h2> <h3>DSA Visualiser</h3> <p>Developed a web-based DSA visualizer to demonstrate algorithms such as Bubble Sort, Insertion Sort, Linear Search and Binary Search.</p>
        <h2>Achievements</h2>
           
      <ul>
     <li>Solved 150+ coding problems on LeetCode, CodeChef and GeeksforGeeks.</li>
      <li>Practicing Data Structures and Algorithms regularly.</li></ul>`
     

}


btn.addEventListener('click',Listen);

 let header = document.getElementById("header");
 header.innerHTML=
`<nav class="menu">
    <a id="hhh">Website Name</a>
    <button id='button' class="btn" onclick="press1()">Home</button>
    <button id='button' class="btn" onclick="press2()">games</button>
    <button id='button' class="btn" onclick="press3()">log in</button>
    <button id='button' class="btn" onclick="press4()">About Me</button>
</nav>`

$(document).ready(function() {
    $('#hamburger').click(function() {
      $('#header-menu').toggleClass('show');
    });
  });
  
var gallery = [
    "Images/Photography/_DSC0105.jpg", 
    "Images/Photography/_DSC4463.jpg",
    "Images/Photography/_DSC4727.jpg",
    "Images/Photography/_DSC5055.jpg",
    "Images/Photography/_DSC7185.jpg" 
    ];
    var num = 0;
  
  function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= gallery.length) {
      num = 0;
    }
    slider.src = gallery[num];
    }
  
  function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
      num = gallery.length-1;
    }
    slider.src = gallery[num];
  }

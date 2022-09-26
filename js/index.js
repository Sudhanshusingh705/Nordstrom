var c = 0;
    function changeBGMakeListGrid(str) {
        const app = "https://raw.githubusercontent.com/vibrantachintya/nordstrom/main/images/make_a_list_grid_transition_" + str;
        const images = [app + '_1.jpeg', app + '_2.jpeg', app + '_3.jpeg', app + '_4.jpeg', app + '_5.jpeg'];
        const div = document.querySelector('#make_list_transition_'+str);
        const bg = images[c % 5];
        c++;
        div.style.backgroundImage = 'url("'+bg+'")';
        console.log(bg);
    }
    changeBGMakeListGrid("left");
    setInterval(function() {changeBGMakeListGrid("left")}, 1000);
    changeBGMakeListGrid("right");
    setInterval(function() {changeBGMakeListGrid("right")}, 1000);
    changeBGMakeListGrid("center");
    setInterval(function() {changeBGMakeListGrid("center")}, 1000);

    var topTransition = 0;
    function changeTopTransition() {
        document.querySelector('#top_transition_div_'+(topTransition%3)).style.display = 'none';
        topTransition++;
        document.querySelector('#top_transition_div_'+(topTransition%3)).style.display = 'block';
        
    }
    changeTopTransition();
    setInterval(changeTopTransition, 2000);

    var b = 0;
    function changeBGJacketGrid() {
        const images = ['url("./images/bottom_jackets_large_1.jpeg")', 'url("./images/bottom_jackets_large_2.jpeg")'];
        const div = document.querySelector('#jacket-left-large-img');
        const bg = images[b % 2];
        b++;
        div.style.backgroundImage = bg;
    }
    changeBGJacketGrid();
    setInterval(changeBGJacketGrid, 1000);

    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 3000);
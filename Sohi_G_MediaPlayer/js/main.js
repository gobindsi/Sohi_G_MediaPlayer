(function()
{
	
	console.log(bandInfo.playList.length);
	//var
	
	var adTitle= document.querySelector("#title");
	var conAudio = document.querySelector("#myAudio");
	var playAudio = document.querySelector("#playBut");
	var nextTrk = document.querySelectorAll(".trkSelect a");
	var flag=0; //keeps track of playing or paused
	var titleFlag=0; //which title is selected
	var songImage = document.querySelector("#cover");
	var Up = document.querySelector("#up");
	var Down = document.querySelector("#down");
	
	//functions
	function stAudio(){
  
  if (flag===0)
  {
  conAudio.play();

	
	flag=1;
	
	}else{
		
		conAudio.pause();
		playAudio.style.background ="images/bar1.png";
		flag=0;
		}

	}
	
	function checkTime() {
		//console.log(conAudio.currentTime);
	  var percent = Math.floor((100/conAudio.duration) * conAudio.currentTime);
		
		
		}
		
		function goTrk(e)  {
			
		console.log("audio/"+bandInfo.tracks[e.target.id]+".mp3");
		conAudio.src =	"audio/"+bandInfo.tracks[e.target.id]+".mp3";
			
			flag=0;
			stAudio();
			var sIm = nextTrk[e.currentTarget.id];
               
           //console.log(sIm);
          songImage.src = "images/" + bandInfo.playList[sIm.id] +".jpg";
			}
			
	
	
	
	function checkPlay(){
	
	   console.log("Music Playing");
	}
	function volIncrease() {
		if (conAudio.volume <= 1) {//if video volume is less than 1.0 (max volume)
	        conAudio.volume +=0.2; //increase by .2
	    }

	}
	
	
	function volDecrease() {//decrease volume
	if (conAudio.volume >= 0) {//if video volume is more than 0.0 (min volume)
		conAudio.volume -=0.2;//decrease by .2
	}

	}	
	
//Listeners 
playAudio.addEventListener("click",stAudio, false);
conAudio.addEventListener("playing", checkPlay, false);
conAudio.addEventListener("timeupdate", checkTime, false);
Up.addEventListener("click",volIncrease,false);
Down.addEventListener("click",volDecrease,false);
for(var i=0; i<bandInfo.tracks.length; i++){
	nextTrk[i].addEventListener("click", goTrk, false);
}
})();

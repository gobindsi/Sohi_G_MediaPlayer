(function()
{
	
	console.log(bandInfo.playList.length);
	//var
	
	var adTitle= document.querySelector("#title");
	var conAudio = document.querySelector("#myAudio");
	var playAudio = document.querySelector("#playBut");
	var nextTrk = document.querySelectorAll(".trkSelect button");
	var flag=0; //keeps track of playing or paused
	var titleFlag=0; //which title is selected
	
	
	//functions
	function stAudio(){
   adTitle.innerHTML = bandInfo.playList[titleFlag];
  if (flag===0)
  {
  conAudio.play();
  
  playAudio.style.background =  "url(../images/musicicon.svg)";
	
	flag=1;
	
	}else{
		
		conAudio.pause();
		playAudio.innerHTML = "Play";
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
			titleFlag = e.target.id;
			flag=0;
			stAudio();
			
			}
			
	
	
	
	function checkPlay(){
	
	   console.log("Music Playing");
	}
	
	
	
	
//Listeners 
playAudio.addEventListener("click",stAudio, false);
conAudio.addEventListener("playing", checkPlay, false);
conAudio.addEventListener("timeupdate", checkTime, false);

for(var i=0; i<bandInfo.tracks.length; i++){
	nextTrk[i].addEventListener("click", goTrk, false);
}
})();

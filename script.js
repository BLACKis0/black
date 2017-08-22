var updates = new XMLHttpRequest();
var req = new XMLHttpRequest();
var V;

var key = "RGAPI-20b44ba8-7e64-4de2-a328-f7b495297a44";

var submit = document.getElementById('sub');
var sum = document.getElementById('sum');
var lvl = document.getElementById('lvl');
var log = document.getElementById('log');
var img = document.getElementById('img');
var vertion = document.getElementById('v');

submit.addEventListener('click', function() {
	updates.open('GET', 'https://ddragon.leagueoflegends.com/api/versions.json');
	updates.onload = function() {
		var d = JSON.parse(updates.responseText);
		vertion.innerHTML += d[0];
		V = d[0];
		ll();
	};
	updates.send();
});

function ll() {
	var nam = document.getElementById('inputdata');
	req.open('GET', 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+nam.value+'?api_key='+key);

	req.onload = function () {
		var data = JSON.parse(req.responseText);
		sum.innerHTML = data.name;
		lvl.innerHTML = data.summonerLevel;
		console.log(V);
		img.src = 'http://ddragon.leagueoflegends.com/cdn/'+V+'/img/profileicon/'+data.profileIconId+'.png';
		log.style.display = "none";
	}

	req.send();
};
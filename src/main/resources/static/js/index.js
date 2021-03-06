$(document).ready(function () {
    sessionStorage.setItem('curUrl', '/index');
    getMovieList();
	getMovieBoxOffice();
	getPopularMovie();
	function getMovieList(){
		getRequest(
			'/movie/all/exclude/off',
			function(res){
				movieList=res.content;
				renderMovieList(movieList);
			},
			function(error){
				alert(error)
			});
		return;
	}
	function getMovieBoxOffice(){
		getRequest(
		'/statistics/boxOffice/total',
		function(res){
			movieList=res.content;
			showToalBoxOffice(movieList);
		},
		function(error){
			alert(error)
		});
	}
	function getPopularMovie(){
		getRequest(
			'/statistics/popular/movie?days='+7+'&movieNum='+10,
			function(res){
				movieList=res.content;
				showPopularMovie(movieList);
			},
			function(error){
				alert(error)
			}	
		);
	}
});
function showPopularMovie(list){
	for(var i in list){
		if(list[i].recentFare!=0){
			var listBody=$('#top-expectation-list');
			var rank=Number(i)+1;
			var listDomStr='<div class="statistic-item"><span>'+list[i].name+'</span><span class="error-text">No.'+rank+'</span></div>';
			listBody.append(listDomStr);
		}
	}
	return;
}
function showToalBoxOffice(list){
	for(var i in list){
		if(list[i].boxOffice!=null){
			var listBody=$('#top-sell-list');
			var listDomStr='<div class="statistic-item"><span>'+list[i].name+'</span><span class="error-text">'+list[i].boxOffice+'</span></div>';
			listBody.append(listDomStr);
		}
	}
	return;
}
function renderMovieList(list){
	for(var i in list){
		var listBody;
		if(new Date(list[i].startDate)<=new Date()){
			listBody=$('#movie-on-list');
			
		}else{
			listBody=$('#movie-off-list'); 
		}
		var listDomStr='<div class="movie-item"><a class="movie-url" href="/user/movieDetail?id='+list[i].id+'"><div class="movie-poster"><img class="movie-img" src="'+list[i].posterUrl+'" /><div class="movie-name">'+list[i].name+'</div></div></a><div>';
		listBody.append(listDomStr);
	}
	return;
}
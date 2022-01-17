//모든 article 요소들을 변수 items에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

//items의 갯수만큼 반복을 돌면 반복 
for(let el of items){     
    //현재 반복돌고 있는 article요소에 mouseenter 이벤트 발생 시    
    el.addEventListener("mouseenter", e=>{
    });

    //현재 반복돌고 있는 article요소에 mouseleave 이벤트 발생 시 
    el.addEventListener("mouseleave", e=>{
    });

    //현재 반복돌고 있는 article요소에 click 이벤트 발생 시
    el.addEventListener("click", e=>{     
        //제목과 본문의 내용, 그리고 img요소의 src값을 변수에 저장  
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let Src = e.currentTarget.querySelector("img").getAttribute("src");

        //aside 요소 안쪽의 콘텐츠에 위의 변수 내용을 적용
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("img").setAttribute("src", Src);

        //aside 요소 안쪽의 동영상을 재생하고 aside요소에 on을 붙여 팝업 패널 활성화
        aside.classList.add("on");
    });

    //닫기 버튼 클릭 시 
    close.addEventListener("click", ()=>{
        //aside 요소에 클래스 on을 제거해 비활성화 하고 안쪽의 영상을 재생중지
        aside.classList.remove("on");
    });
}    


//페이지 로드 이벤트
window.addEventListener("load", ()=>{
	const grid = new Isotope("section", { //배치할 요소를 감싸고 있는 부모 요소명
		itemSelector: "article", //배치할 요소명
		columnWidth: "article", //넓이값을 구할 요소명
		transitionDuration: "0.5s" //화면 재배치시 요소가 움직이는 속도 
	});	

	//클릭할 모든 버튼 요소 변수에 저장
	const btns = document.querySelectorAll("main ul li");

	//버튼의 갯수만큼 반복을 돌면서 
	for(let el of btns){

		//각 버튼에 클릭 이벤트 연결
		el.addEventListener("click", e=>{
			e.preventDefault();

			//변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 저장
			const sort = e.currentTarget.querySelector("a").getAttribute("href");

			//grid에 저장된 결과값을 불러와 재정렬 기능 연결
			grid.arrange({
				//옵션값으로 sort변수값 지정
				filter : sort
			});

			//다시 모든 버튼의 갯수만큼 반복을 돌면서
			for(let el of btns){
				//각 버튼의 클래스명 "on"을 제거해 비활성화
				el.classList.remove("on");
			}
			
			//클릭한 대상만 선택해서 클래스명 "on"을 추가해 활성화
			e.currentTarget.classList.add("on");
             
		})
	}	
});

//main.js

/* 퀵메뉴 이미지 */
//퀵메뉴 이미지를 저장할 변수 만들기
//for()문 이용해서 <img> 를 quick01_00000~quick01_00019 생성해서
//<span>안에 넣기
/* 각각 설정하는 법
let quick1 = '';//퀵메뉴 이미지를 저장할 변수 만들기

for(let i=0; i<20; i++){//for()문 이용해서 <img> 를 quick01_00000~quick01_00019 생성해서
    if(i<10){
        quick1 +=  `<img src="images/quick01/quick01_0000${i}.png" />`;

    }else{
        quick1 += `<img src="images/quick01/quick01_000${i}.png" />`;
    }
}
document.querySelector("span.quick1").innerHTML = quick1;//<span>안에 넣기
*/
const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');

for(let j=0; j<quickSpan.length; j++){//span 4개 0,1,2,3
    let images=''
    for(let i=0; i<20; i++){ //img 20개 생성
        if(i<10){
            images += `<img src="images/quick0${j+1}/quick0${j+1}_0000${i}.png" />`;
        }else{
            images += `<img src="images/quick0${j+1}/quick0${j+1}_000${i}.png" />`;
        }
    }
    quickSpan[j].innerHTML = images;
}

/* 로그인 이미지 */
let appear="";
for(let k=0;k<57;k++){
    if(k<10){
        appear += `<img src="images/appear/appear_0000${k}.png" />`;
    }else{
        appear += `<img src="images/appear/appear_000${k}.png" />`;
    }
}
    document.querySelector("a.appear").innerHTML = appear;

let loop="";
for(let h=0; h<82;h++){
    if(h<10){
        loop += `<img src="images/loop/loop_0000${h}.png" />`;
    }else{
        loop += `<img src="images/loop/loop_000${h}.png" />`;
    }
}
    document.querySelector("a.loop").innerHTML = loop;

/* 로그인 애니메이션 */
//appear 0~56의 이미지 각각에 animation 속성 적용
//animation: ani 2.85s linear 0s 1 ;
//animation: ani 2.85s linear 0.05s 1 ;
//animation: ani 2.85s linear 0.10s 1 ;

//loop 0~81 이미지 각각에 animation 속성 적용
//animation: ani 4.1s linear 2.85s infinite;
//animation: ani 4.1s linear 2.90s infinite;
//animation: ani 4.1s linear 2.95s infinite;
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for(let i=0; i<appearImgs.length; i++){
    appearImgs[i].style.animation = `ani 2.85s linear ${i*delay}s 1`
}
for(let j=0; j<loopImgs.length; j++){
    loopImgs[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}


/* 고객센터 */
//toggle()
// title="고객센터 열기" ->title="고객센터 닫기"

const topMenuDD = document.querySelectorAll('dl.topMenu >dd');
topMenuDD[4].addEventListener('click', e => {
    e.currentTarget.classList.toggle("on");
    if (e.currentTarget.classList.contains("on")) {
        e.currentTarget.children[0].setAttribute("title", "고객센터 닫기");
    } else {
        e.currentTarget.children[0].setAttribute("title", "고객센터 열기");
    }
})

/* 주메뉴 */
//.header_wrap.on
//nav.gnb>ul>li>ul.on
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll('.gnb>ul>li')//큰 li
var subMenu = document.querySelectorAll('.gnb>ul>li>ul');

for (var i = 0; i < gnbMenu.length; i++) {
    gnbMenu[i].addEventListener('mouseover', () =>{
        //고객센터에 on이 붙어있으면 on 지우기
        if(topMenuDD[4].classList.contains('on')) {
            topMenuDD[4].classList.remove("on");
        }
        //검색박스에 on이 붙어있으면 on 지우기
        if(srchOpen.classList.contains('on')) {
            srchOpen.classList.remove("on");
            srchBox.classList.remove("on");
        }
        headerWrap.classList.add('on');
        subMenu.forEach(item =>{
            item.classList.add("on");
        });


    });//mouseover
    gnbMenu[i].addEventListener('mouseout', () => {
        headerWrap.classList.remove("on");
        subMenu.forEach(item => {
            item.classList.remove("on");
        })
    });//mouseout
    gnbMenu[i].children[0].addEventListener('focus', () =>{
        headerWrap.classList.add('on');
        subMenu.forEach(item =>{
            item.classList.add("on");
        })
    });//focus
    gnbMenu[i].children[0].addEventListener('blur', () => {
        headerWrap.classList.remove("on");
        subMenu.forEach(item => {
            item.classList.remove("on");
        })
    });//blur
};
        
/* 검색박스 */
const srchBox = document.querySelector('form.srch');
const srchOpen = document.querySelector('.srch_open');

srchOpen.addEventListener("click", e =>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
    srchBox.classList.toggle("on");
    
    if (e.currentTarget.classList.contains("on")) {
        e.currentTarget.children[0].setAttribute("title", "검색입력서식 닫기")
    } else {
        e.currentTarget.children[0].setAttribute("title", "검색입력서식 열기")
    }
});

//배너
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');
const bnnFrame = document.querySelector('.banner_frame');
const bnnSection = document.querySelectorAll('.banner_frame>section');//0~11개 섹션

const arrowA = document.querySelectorAll('.banner_arrow > a');
const rollingA = document.querySelectorAll('.banner_rolling a')

const bnn_rollA = document.querySelectorAll('.banner_rolling li a');

let bnnW = document.querySelector('body>section').offsetWidth;
window.addEventListener('resize',()=>{
    bnnW = document.querySelector('body>section').offsetWidth;

});//body section의 가로값을 가져와서 지정해줌


//next버튼을 눌렀을때
//배너번호 1증가
//배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
//배너프레임의 left값 변경해서 배너 움직이게

let bnnNum = 0;
let lastNum = bnnSection.length - 1;

let secWhite = bannerNumer => {//반복적인 소스는 함수로 만들어 줄 것.
    if(bnnSection[bannerNumer].classList.contains('white')) {
        arrowA.forEach(item =>{
            item.classList.add('white');
        })
        rollingA.forEach(item =>{
            item.classList.add('white');
        })
    }else{
        arrowA.forEach(item =>{
            item.classList.remove('white');
        })
        rollingA.forEach(item =>{
            item.classList.remove('white');
        })
    }

    bnn_rollA.forEach(item => {
        item.classList.remove('on');
    });
    bnn_rollA[bannerNumer].classList.add('on');
}
secWhite(0);

btnNext.addEventListener('click', e=> {
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    /*bnnFrame.style.left = `${-bnnNum * 100}%`; //0,-100% -200% ... -1100% 가로값이 100%일떄 사용가능*/
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite(bnnNum);
});
//prev버튼

btnPrev.addEventListener('click', e=> {
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum = lastNum;
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite(bnnNum);
});

//오토배너

let autoBanner = () => {
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite(bnnNum);

    autoBnn = setTimeout(autoBanner, 5000);//재귀함수
};

let autoBnn = setTimeout(autoBanner, 5000);

//재생/멈춤버튼
let flag = true;
const btnPlay = document.querySelector('a.btn_play');
btnPlay.addEventListener('click', e =>{
    e.preventDefault();
    if(flag){
        clearTimeout(autoBnn);
        btnPlay.classList.add('pause');
        flag = false;
    } else {
        autoBnn = setTimeout(autoBanner, 5000);
        btnPlay.classList.remove('pause');
        flag = true;
    }
});

/* 롤링클릭 */
const bnnRollLists = document.querySelectorAll(".banner_rolling li");

for(let i=0;i<bnnRollLists.length;i++){
    bnnRollLists[i].addEventListener("click",e => {
        clearTimeout(autoBnn);
        flag = false;//false값 들어가야 다음 재생 버튼 누르면 바로 작동함
        bnnFrame.style.left = `${-i * bnnW}px`;
        secWhite(i);
        bnnNum = i;
        btnPlay.classList.add('pause');
    })
}

// 롤링 클릭
// for (let i = 0; i < bnnRollA.length; i++) {
//     bnnRollA[i].addEventListener('click', (e) => {
//       e.preventDefault;
//       clearTimeout(autoBnn);
//       flag = false;
//       bnnAction(i);
//       bnnPlayBtn.classList.add('on');
//       bnnNum = i;
//     });
//   }



/*
배너 백그라운드 이미지로를 js로 넣는 소스
tmi지만 배너 백그라운드 사진명 banner0000~0011.jpg 바꾸신 뒤에 아래 코드대로 하면 js로 설정 가능합니당

const sections = document.querySelectorAll(".banner_frame > section");
console.log(sections);
let sectionImg = "";

for(let i=0; i<sections.length; i++){ //0~11
    if(i<10){
        sectionImg = `url(images/banner/banner000${i}.jpg) no-repeat 50% 0`
    }else{
        sectionImg = `url(images/banner/banner00${i}.jpg) no-repeat 50% 0`
    }
    console.log(sectionImg);
    sections[i].style.background = sectionImg;
}
*/

//content1 퀵메뉴
//마우스 올렸을때 이미지에 애니메이션 적용
//마우스 뗏을때 이미지에 애니메이션 삭제

const content1Li = document.querySelectorAll(".content1 ul li");
for(let i=0;i<content1Li.length;i++){
    content1Li[i].addEventListener("mouseover",e=>{
        for(let k = 0; k < 20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`;
        }
    })
}
/*
for each문 사용시
content1Li.forEach(item => {
    item.addEventListener("mouseover",e => {
        for(let k = 0; k < 20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`;
        }
    })
}
*/
for(let i=0;i<content1Li.length;i++){
    content1Li[i].addEventListener("mouseout",e=>{
        for(let k = 0; k < 20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation ="none";
        }
    })
}

/* 스크롤 이벤트 */
const BtnTop = document.querySelector('.top');


window.addEventListener('scroll',() =>{
    let scroll = document.querySelector('html').scrollTop;
    //도넛
    const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
    const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
    const combine_Left = document.querySelector(".combine_Left");
    const doughnut_Center_M = document.querySelector(".doughnut_Center_M");
    const doughnut_Center_s = document.querySelector(".doughnut_Center_s");
    const doughnut_right_M = document.querySelector(".doughnut_right_M");
    const doughnut_right_s = document.querySelector(".doughnut_right_s");
    const combine_right = document.querySelector(".combine_right");

    combine_Left.style.top = `${scroll*0.7}px`;
    doughnut_Left_s.style.top = `${scroll*0.5}px`;
    doughnut_Left_L.style.top = `${1310-scroll*0.8}px`

    doughnut_Center_s.style.top = `${scroll*0.3}px`;
    doughnut_Center_M.style.top = `${1200 - scroll * 0.7}px`;

    combine_right.style.top = `${scroll * 0.7}px`;
    doughnut_right_s.style.top = `${850 + scroll * 0.7}px`;
    doughnut_right_M.style.top = `${scroll*0.8}px`;

    //top버튼
    if(scroll <= 0){
        BtnTop.classList.remove("on","ab");
    }else if(scroll > 0 && scroll <2700){
        BtnTop.classList.remove("ab");
        BtnTop.classList.add("on");
    }else{
        BtnTop.classList.add("ab");
    }
});


//content3
//li 하나 하나에 마우스오버 하면 모든 li에 .on을 지우고 마오스 오바한 li만 .on이 붙어라
const content3Li = document.querySelectorAll(".content3_inner>div>ul>li");

var all = document.querySelectorAll('.content3_inner>div>ul>li');
all.forEach(item => {
    item.addEventListener('mouseover', e => {
        e.currentTarget.classList.add('on');
    });
    item.addEventListener('mouseout', e => {
        e.currentTarget.classList.remove('on');
    });
})

//대분류
//li 하나하나를 클릭했을 때
//class 속성값을 가져와서 변수에 저장한 뒤
//변수값이랑 비교 후 정확하게 일치하는 케이스 찾아서
// 해당 클래스 이름에 해당되는 li만 보이게 설정한다. - 각 클래스 이름에 해당되는 li만 따로 모아서 저장해놓고
const group = document.querySelectorAll(".content3_inner > ul > li>a");//5개

const ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
const shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
const diner = document.querySelectorAll(".content3_inner > div > ul > li.diner");
const box = document.querySelectorAll(".content3_inner > div > ul > li.box");

for(let k=0;k<group.length;k++){
    group[k].addEventListener('click',e =>{
        e.preventDefault();

        group.forEach(item =>{
            item.classList.remove('on');
        });
        e.currentTarget.classList.add('on');

        let className = e.currentTarget.parentElement.getAttribute("class");
        
        all.forEach(item =>{
            item.style.display = "none";
        });

        switch(className){
            case "all" :
                all.forEach(item => {
                    item.style.display = "block";
                });
                break;
            case "ent" :
                ent.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "shop" :
                shop.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "diner" :
                diner.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "box" :
                box.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            default :
                break;
        }
    });
} 

//패밀리 사이트
const familySite = document.querySelector("dd.family_site");
familySite.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");

    if(e.currentTarget.classList.contains("on")) {
        e.currentTarget.children[0].setAttribute("title","닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","열기");
    }
});

//top

BtnTop.addEventListener('click',e =>{
    e.preventDefault();
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    });
});
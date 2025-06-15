console.log("Hello World");

const myName = "Thanks for clicking me!";
const h1 = document.querySelector(".heading-primary");



console.log(myName);
console.log(h1);

// h1.textContent = myName;
// h1.style.backgroundColor = "red";

h1.addEventListener("click", function(){
    h1.textContent = myName;
    h1.style.backgroundColor = "red";
});


// 获取当前年份
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

//制作移动导航
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
    // 当有click事件时，系统会检查header内是否存在nav-open；如不存在则添加该类名；如存在则删除
    headerEl.classList.toggle("nav-open");
});


////////////////////////////////////
// 平滑滑动动画
////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link){
    link.addEventListener("click", function(e){

        console.log(e);
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);

        // 平滑滚动到目标元素
        if(href === "#"){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        if(href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }

        //close mobile nav
        if(link.classList.contains("main-nav-link")){
            headerEl.classList.remove("nav-open");
        }

    })


})



/////////////////////////////////////

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  




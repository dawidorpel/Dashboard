const sideLinks = document.querySelectorAll('.Sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click' , () =>{
        sideLinks.forEach(i =>{
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
    });

    const menuBar = document.querySelector('.content nav .bx.bx-menu');
    const sideBar = document.querySelector('.Sidebar');
    
    menuBar.addEventListener('click', () => {
        sideBar.classList.toggle('close');
    });

   const searchBtn = document.querySelector('.content nav form .form-input button');
   const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
   const searchForm = document.querySelector('.content nav form');

   searchBtn.addEventListener('click', function (e) {
    if(window.innerWidth < 576){
        e.preventDefault;
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchBtnIcon.classList.replace('bx-search-alt', 'bx-x');
        }else{
            searchBtnIcon.classList.replace('bx-x', 'bx-search-alt')
        }
    }
   })

   window.addEventListener('resize', () =>{
    if(window.innerWidth < 768){
        sideBar.classList.add('close');
    }else{
        sideBar.classList.remove('close');
    }
    if(window.innerWidth > 576){
        searchBtnIcon.classList.replace('bx-x', 'bs-search-alt');
        searchForm.classList.remove('show');
    }
   });

   const toggle = document.getElementById('theme-toggle');

   toggle.addEventListener('change', function() {
    if(this.checked){
        document.body.classList.add('dark');
        dmode.classList.replace('bx-sun', 'bx-moon');
    }else{
        document.body.classList.remove('dark');
        dmode.classList.replace('bx-moon', 'bx-sun');
    }
   })

   const dmode = document.querySelector('.content nav .bx.bx-sun');
dmode.addEventListener('click', () =>
{
     sideBar.classList.toggle('close');
})
var carid = null;

const LoadData = (id) => {
    carid = id
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((rep) => rep.json())
    .then((data) => {
        
        if (data.data.length > 0){
            DisplayData(data.data)
        }
        else{
            ErrorNoData();
        }
    });
};

const DisplayData = (data) =>{
    
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    data.forEach((v) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-12");
        card.classList.add("col-md-4");
        card.classList.add("col-lg-3");
        card.classList.add("card-selected");
        const hour = parseInt((v.others.posted_date / 60) / 60);
        const min = parseInt((v.others.posted_date / 60) % 60);
        
        card.innerHTML = `
        <div class="card-body card-box">
            <div class="card-image ">
                <img class="thumbnail" src="${v.thumbnail}" alt="">
                ${v.others.posted_date? `<p class="time">${hour} hours ${min} minutes ago</p>`: '<p></p>'}

            </div>
            
            <div class="d-flex card-body-two">
                <div>
                    <img class="profile_picture" src="${v.authors[0].profile_picture}" alt="">
                </div>
                <div class="ps-3">
                    <h5 class="card-title">${v.title}</h5>
                    <small id="card-small-text">${v.authors[0].profile_name}</small>
                    <small>${v.authors[0].verified? '<i class="fa-solid ps-2 fa-circle-check" style="color: #075ced;"></i>': '<small></small>' }</small>
                    <br>
                    <small id="card-small-text">${v.others.views} views</small>
                </div>
            </div>
        </div>
        `;
        
        cardContainer.appendChild(card);
    });
};

function ErrorNoData(){
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const error = document.createElement("div");
    error.innerHTML = `
        <div class = 'col-12 d-flex justify-content-center'>
        <img class='error-image' src="images/Icon.png" alt="">
        </div>
        <p class="mt-3 fs-1 fw-bold text-center"> Oops!! Sorry, There is no <br> content here. </p>
            
    `;
    cardContainer.appendChild(error);
}

var carentLoadId = null;
function AllData(){
    LoadData(1000);
};
function MusicData(){
    LoadData(1001);
};
function ComedyData(){
    LoadData(1003);
};
function DrawingData(){
    LoadData(1005);
};
function SortData(){

}
AllData();

function SortData() {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${carid}`)
        .then((rep) => rep.json())
        .then((data) => {
            data.data.forEach(item => {
                item.others.views = parseFloat(item.others.views) || 0;
            });

            data.data.sort((a, b) => b.others.views - a.others.views);

            
            if (data.data.length > 0) {
                DisplayData(data.data);
            } else {
                ErrorNoData();
            }
        });
}

function Blog(){
    window.location.href = "blog.html";
}




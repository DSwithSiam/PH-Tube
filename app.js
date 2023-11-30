const LoadData = (id) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((rep) => rep.json())
    .then((data) => DisplayData(data.data));
};

const DisplayData = (data) =>{
    
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    data.forEach((v) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-12");
        card.classList.add("col-md-3");
        card.classList.add("card-selected");

        card.innerHTML = `
        <div class="card-body">
            <div class="card-image">
                <img class="thumbnail" src="${v.thumbnail}" alt="">
            </div>
            
            <div class="d-flex card-body-two">
                <div>
                    <img class="profile_picture" src="${v.authors[0].profile_picture}" alt="">
                </div>
                <div class="ps-3">
                    <h5 class="card-title">${v.title}</h5>
                    <small id="card-small-text">${v.authors[0].profile_name}</small>
                    
                    <i class="fa-solid ps-2 fa-circle-check" style="color: #075ced;"></i>
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
};

ErrorNoData();


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

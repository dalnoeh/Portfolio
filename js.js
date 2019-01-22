class Project {

    constructor(mainSource, description, isVid) {
        this.mainDiv = document.createElement("div");
        this.mainDiv.classList.add("container");
        this.mainDiv.classList.add("content_box");
        this.mainDiv.classList.add("media");

        this.imageDiv = document.createElement("div");
        if (isVid === false || isVid === 'undefined') {
            var mainImg = document.createElement("img");
            mainImg.src = mainSource;
            mainImg.classList.add("content_img");
            mainImg.classList.add("modalImg");
            mainImg.classList.add("bottomPadding");

            mainImg.onclick = function () {
                // Get the modal
                var modal = document.getElementById("modal");
                // Get the image and insert it inside the modal - use its "alt" text as a caption
                var modalImg = document.getElementById("modalImg");

                modal.style.display = "block";
                modalImg.src = this.src;
            };

        } else if (isVid === true) {
            var mainVid = document.createElement("video");
            mainVid.src = mainSource;
            mainVid.height = 360;
            mainVid.classList.add("content_img");
            mainVid.classList.add("bottomPadding");
            mainVid.type = "video/mp4";
            mainVid.innerText = "Your browser does not support the video tag.";

            mainVid.controls = true;
            mainVid.muted = true;
            mainVid.autoplay = true;
            mainVid.loop = true;
            mainVid.load();
        }

        const text = document.createElement("p");
        text.innerHTML = description;

        this.mainDiv.appendChild(this.imageDiv);
        this.mainDiv.appendChild(text);

        if (isVid === false || isVid === 'undefined') {
            this.imageDiv.appendChild(mainImg);
        } else {
            this.imageDiv.appendChild(mainVid);
        }

        this.subImgDiv = document.createElement("div");
        this.subImgDiv.classList.add("content_img_sub_box");
        this.imageDiv.appendChild(this.subImgDiv);
    };

    static modalCounter() {
        if (typeof Project.modalCount == 'undefined') {
            Project.modalCount = 0;
        }
        return Project.modalCount++;
    }

    addImg(source) {
        const img = document.createElement("img");
        img.src = source;
        var modalCount = Project.modalCounter();
        img.classList.add("content_sub_img");
        img.classList.add("modalImg");
        img.classList.add("bottomPadding");

        img.onclick = function () {
            // Get the modal
            var modal = document.getElementById("modal");
            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var modalImg = document.getElementById("modalImg");

            modal.style.display = "block";
            modalImg.src = this.src;
        };
        this.subImgDiv.appendChild(img);
    }

    addToBody() {
        return document.body.appendChild(this.mainDiv);
    }
}

window.onload = function () {

    //region Bachelor Project
    let bachelorProject;
    const bachelorProjectMainImg = "https://res.cloudinary.com/dalnoeh/image/upload/v1533740680/sc_01.png";
    const bachelorProjectDescription = "Bachelor project made for my education in Medialogy. The purpose of the project was to create an improved game for a rehabilitation machine called Happy Rehab made by <a href=\"http://www.iaid.dk\" target=\"_blank\">InnovAid</a>. This machine helps people affected by cerebral palsy or other gross motor function disabilities such as stroke patients. The machine is used as a controller in games made specifically for the machine. This makes users flex whichever body part they are training, which in turn strengthens their muscles and ligaments while also stimulating the motor control centers of the brain. The existing solutions for the machine were found to be lacking in long term motivation, and so the project group’s task was to produce a solution that ran well and improved upon the visual fidelity, while also improving gameplay. The solution was a racing game controlled with weight transfer. The solution ran significantly better on the given hardware than previous solutions, while giving a considerable upgrade to overall visual fidelity and gameplay. The solution was made using the Unity game engine";

    bachelorProject = new Project(bachelorProjectMainImg, bachelorProjectDescription, false);

    bachelorProject.addImg("https://res.cloudinary.com/dalnoeh/image/upload/v1533740680/sc_02.png");
    bachelorProject.addImg("https://res.cloudinary.com/dalnoeh/image/upload/v1533740680/sc_03.png");
    bachelorProject.addImg("https://res.cloudinary.com/dalnoeh/image/upload/v1533740680/sc_04.png");
    bachelorProject.addImg("https://res.cloudinary.com/dalnoeh/image/upload/v1533740680/sc_05.png");

    bachelorProject.addToBody();
    //endregion

    //region 3D Coin
    let _3DCoin;
    const _3DCoinVidSource = "http://res.cloudinary.com/dalnoeh/video/upload/v1533734702/Coin_final_03_compressed.mp4";
    const _3dCoinVidDescription = "A 3D coin I made during an internship at <a href=\"https://venturefusion.io/\">VentureFusion</a>, a tokenized startup incubator. The coin symbolizes VentureFusion's cryptocurrency coin, with the logo on the front and interconnected lines to represent the blockchain. The back shows VenturesFusion's technological connection with an illustration of a circuit board. The coin was created in Adobe Illustrator, Autodesk Maya, and Keyshot.";

    _3DCoin = new Project(_3DCoinVidSource, _3dCoinVidDescription, true);


    _3DCoin.addImg("http://res.cloudinary.com/dalnoeh/image/upload/v1533734554/Keyshot_coin_front_done.43.png");
    _3DCoin.addImg("http://res.cloudinary.com/dalnoeh/image/upload/v1533734554/Keyshot_coin_front_done.44.png");
    _3DCoin.addImg("http://res.cloudinary.com/dalnoeh/image/upload/v1533734554/Coin_01.36.png");
    _3DCoin.addImg("http://res.cloudinary.com/dalnoeh/image/upload/v1533734554/Coin_01.34.png");

    _3DCoin.addToBody();
    //endregion

    //region VentureFusion Graphic
    let ventureFusionGraphic;
    const ventureFusionGraphicMainImg = "https://res.cloudinary.com/dalnoeh/image/upload/v1533727880/Banner_final_01_scaled.png";
    const ventureFusionGraphicDescription = "A social media banner made for an internship at <a href=\"https://venturefusion.io/\">VentureFusion</a>. The banner illustrates the incubation process. I created it using Adobe Illustrator, however the wording was given by the marketing department.";

    ventureFusionGraphic = new Project(ventureFusionGraphicMainImg, ventureFusionGraphicDescription, false);

    ventureFusionGraphic.addToBody();
    //endregion

    //region Elon Musk Tribute page
    let muskTribute;
    const muskTributeMainImg = "https://res.cloudinary.com/dalnoeh/image/upload/v1523428302/elon.png";
    const muskTributeDescription = "A short tribute page to Elon Musk, made as an exercise while learning HTML and CSS through <a href=\"https://www.freecodecamp.com\">freecodecamp.com</a>. The page is accesible at <a href=\"https://codepen.io/Dalnoeh/full/dzVqod\" target=\"_blank\">codepen.io</a>";

    muskTribute = new Project(muskTributeMainImg, muskTributeDescription, false);

    muskTribute.addToBody();
    //endregion

    //region Elderly Bowler's App
    let bowlingApp;
    const bowlingAppMainImg = "https://res.cloudinary.com/dalnoeh/image/upload/v1523428302/p2.png";
    const bowlingAppDescription = "An example of UX design where user involvement in the design process led to a redesign of the UI before the solution was implemented. The top row of images show a mid-fi prototype which was tested on the target group, and based on their feedback the\n" +
        "      design was changed for the implementation. The final design is shown by the bottom row images, and the target group felt that this design was an improvement on the mid-fi prototype. The design was heavily influenced by the target group as this was\n" +
        "      an elderly demographic.";

    bowlingApp = new Project(bowlingAppMainImg, bowlingAppDescription, false);

    bowlingApp.addToBody();
    //endregion

    window.onclick = function (event) {
        if (event.target.id === "modal") {
            document.getElementById("modal").style.display = "none";
        }

        if (event.target.id === "modalClose") {
            document.getElementById("modal").style.display = "none";
        }
    }
};

$(document).ready(function () {
    /* Every time the window is scrolled */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $(".fade_me").each(function (i) {
            var myObject = $(this).position().top;
            var myWindow = $(window).scrollTop() + $(this).outerHeight();

            if (myWindow > myObject) {
                $(this).animate({opacity: "1"}, 500);
            }
        });
    });
});

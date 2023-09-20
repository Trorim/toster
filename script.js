window.addEventListener("DOMContentLoaded", () => {
    //swiper

    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    //timer

    const today = new Date(),
        deadLine = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1
        );

    function getTimeRemaining(endtime) {
        let total = endtime - new Date();
        let hours, minutes, seconds;

        if (total <= 0) {
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            (hours = Math.floor((total / 1000 / 60 / 60) % 24)),
                (minutes = Math.floor((total / 1000 / 60) % 60)),
                (seconds = Math.floor((total / 1000) % 60));
        }

        return {
            total,
            hours,
            minutes,
            seconds,
        };
    }

    function setClock(seclector, endtime) {
        const timer = document.querySelector(seclector),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timerInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            hours.innerHTML = t.hours < 10 ? "0" + t.hours : t.hours;
            minutes.innerHTML = t.minutes < 10 ? "0" + t.minutes : t.minutes;
            seconds.innerHTML = t.seconds < 10 ? "0" + t.seconds : t.seconds;

            if (t.total <= 0) clearInterval(timerInterval);
        }
    }

    setClock(".timer__time", deadLine);

    //menu

    const optionMenuColor = document.querySelector(".select-menu-color"),
        selectBtnColor = optionMenuColor.querySelector(".select-btn-color"),
        optionsColor = optionMenuColor.querySelectorAll(".option-color"),
        selectBtnTextColor = optionMenuColor.querySelector(
            ".select-btn__text-color"
        ),
        optionMenuSize = document.querySelector(".select-menu-size"),
        selectBtnSize = optionMenuSize.querySelector(".select-btn-size"),
        optionsSize = optionMenuSize.querySelectorAll(".option-size"),
        selectBtnTextSize = optionMenuSize.querySelector(
            ".select-btn__text-size"
        );

    function menu(optionMenu, selectBtn, options, selectBtnText) {
        selectBtn.addEventListener("click", () =>
            optionMenu.classList.toggle("active")
        );

        options.forEach((option) => {
            option.addEventListener("click", () => {
                let selectedOption = option.innerText;
                selectBtnText.innerText = selectedOption;

                optionMenu.classList.remove("active");
            });
        });
    }

    menu(optionMenuColor, selectBtnColor, optionsColor, selectBtnTextColor);
    menu(optionMenuSize, selectBtnSize, optionsSize, selectBtnTextSize);

    //price

    const priceOld = document.querySelector(".price__old"),
        priceNew = document.querySelector(".price__new");

    let priceDiscount = (160).toFixed(2);
    let priceFull = ((priceDiscount / 64) * 100).toFixed(2);

    priceOld.textContent = `R ${priceFull}`;
    priceNew.textContent = `R ${priceDiscount}`;

    //stars

    const stars = document.querySelectorAll(".stars svg");

    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            stars.forEach((star, index2) => {
                index1 >= index2
                    ? star.classList.add("active")
                    : star.classList.remove("active");
            });
        });
    });
});

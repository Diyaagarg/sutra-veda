/* ===========================
   SUTRA VEDA SCRIPT
=========================== */

/* PRODUCT FILTER */

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".product-card");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filterText =
                button.textContent.trim();

            cards.forEach(card => {

                const category =
                    card.querySelector(
                    ".product-category"
                    )?.textContent.trim();

                if (
                    filterText === "All" ||
                    category === filterText
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

});

/* FADE IN ON SCROLL */

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
            "show-element"
            );

        }

    });

},

{
    threshold:0.15
}

);

const hiddenElements =
document.querySelectorAll(

".category-card,\
 .why-card,\
 .product-card,\
 .offer-card,\
 .review-card,\
 .feedback-form-container"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden-element");

    observer.observe(el);

});

/* SCROLL TO TOP BUTTON */

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* ACTIVE NAVIGATION */

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    const href =
    link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});

const header =
document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

document.addEventListener("DOMContentLoaded", () => {

    const whatsappNumber = "919829267889";

    document.querySelectorAll(".order-btn-card").forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            const card = button.closest(".product-card");

            const productName =
                card.querySelector("h3").textContent.trim();

            const price =
                card.querySelector(".price").textContent.trim();

            const category =
                card.querySelector(".product-category").textContent.trim();

            const qty = prompt(
                `Enter quantity for ${productName}`,
                "1"
            );

            if (!qty) return;

            const total =
                parseInt(price.replace(/[^\d]/g, "")) *
                parseInt(qty);

            const message =
`🛍️ Sutra Veda Order Request

Product: ${productName}
Category: ${category}
Price: ${price}
Quantity: ${qty}
Total: ₹${total}

Please confirm availability.`;

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.location.href = whatsappURL;
        });

    });

});


/* IMAGE ZOOM */

document.addEventListener("DOMContentLoaded", () => {

    const modal =
        document.getElementById("imageModal");

    const modalImg =
        document.getElementById("modalImage");

    const closeBtn =
        document.querySelector(".close-modal");

    if (!modal || !modalImg || !closeBtn) {
        console.error("Modal elements not found");
        return;
    }

    document
        .querySelectorAll(".product-card img")
        .forEach(img => {

            img.style.cursor = "zoom-in";

            img.addEventListener("click", () => {

                modal.style.display = "flex";

                modalImg.src = img.src;
                modalImg.alt = img.alt;

            });

        });

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("show");
    });
}
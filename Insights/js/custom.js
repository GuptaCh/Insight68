// chatbox related
function openForm() {
    document.getElementById("chatform").style.display = "block";
    document.getElementById("chatInit").style.display = "none";
}

// chatbox related
function closeForm() {
    document.getElementById("chatform").style.display = "none";
    document.getElementById("chatInit").style.display = "block";
}

// Scroll to top
$(document).ready(function () {
    var btn = $('#scroll');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '500');
    });

});

// Menu links related
$(document).ready(function () {

    // Products Menu Script
    $("#navbarDropdown").mouseenter(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css({
            'opacity': '0.4',
        });
        $("#pro-cat").show();
        $("#navbarDropdown").css({
            'border-top': '4px solid #122a88',
            'background-color': '#e2e7fe'
        });

        // Hide for supportandservices
        $("#supportservice").hide();
        $("#dropdownSupport").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

        // hide for resources
        $("#resources").hide();
        $("#dropdownresource").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

        // hide for about us
        $("#about").hide();
        $("#dropdownabout").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

    });

    $("#pro-cat").mouseleave(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '1');
        $("#pro-cat").hide();
        $("#navbarDropdown").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });
    });

    // Service and support
    $("#dropdownSupport").mouseenter(function () {
        $("#supportservice").show();
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '0.4');
        // hide for products
        $("#pro-cat").hide();
        $("#navbarDropdown").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

        // hide for resources
        $("#resources").hide();
        $("#dropdownresource").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

        // hide for about us
        $("#about").hide();
        $("#dropdownabout").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

        $("#dropdownSupport").css({
            'border-top': '4px solid #122a88',
            'background-color': '#e2e7fe'
        });
    });

    $("#supportservice").mouseleave(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '1');
        $("#supportservice").hide();
        $("#dropdownSupport").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });
    });

    // Resources
    $("#dropdownresource").mouseenter(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '0.4');
        $("#resources").show();
        $("#dropdownresource").css({
            'border-top': '4px solid #122a88',
            'background-color': '#e2e7fe'
        });

        // hide for products
        $("#pro-cat").hide();
        $("#navbarDropdown").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

        // Hide for supportandservices
        $("#supportservice").hide();
        $("#dropdownSupport").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

        // hide for about us
        $("#about").hide();
        $("#dropdownabout").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

    });

    $("#resources").mouseleave(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '1');
        $("#resources").hide();
        $("#dropdownresource").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });
    });

    // About
    $("#dropdownabout").mouseenter(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '0.4');
        $("#about").show();
        $("#dropdownabout").css({
            'border-top': '4px solid #122a88',
            'background-color': '#e2e7fe'
        });

        // hide for products
        $("#pro-cat").hide();
        $("#navbarDropdown").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

        // Hide for supportandservices
        $("#supportservice").hide();
        $("#dropdownSupport").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

        // hide for resources
        $("#resources").hide();
        $("#dropdownresource").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });

    });

    $("#about").mouseleave(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '1');
        $("#about").hide();
        $("#dropdownabout").css({
            'border-top': '4px solid #f8f9fa',
            'background-color': '#f8f9fa'
        });
    });
});

$(document).ready(function () {

    // Toggle Button clicked
    $("#toggle").click(function () {
        $(".fixed-top").toggleClass('bar-bottom');
    });

});

// step 5 of 5 sign up process script starts
let predefinedQues = ['How many people work at your company?', 'What field do you work in?', 'Which of the following best describes your role?', 'Which of these sounds most like you?'];

let predefinedAns = [];

function selectQuestion(ans, ansDiv, quesText) {
    const selectedQuesText = document.getElementById(quesText);
    const selectedAnsDiv = document.getElementById(ansDiv);
    const selectedAns = document.getElementById(ans);

    if (ans == 'ans-1' || ans == 'ans-2' || ans == 'ans-3' || ans == 'ans-4') {
        selectedQuesText.innerHTML = `<img src="images/tickfinishbtn.svg" class="pr-3 mb-2" alt=""><span class="text-truncate">` + selectedAns.innerHTML + ' people work at your company?' + `</span>`;
        question('ques2Text', 'ques2');
        predefinedAns[0] = selectedAns.innerHTML;
        selectedAnsDiv.classList.add('hide');
    } else if (ans == 'ans-5' || ans == 'ans-6' || ans == 'ans-7' || ans == 'ans-8' || ans == 'ans-9') {
        selectedQuesText.innerHTML = `<img src="images/tickfinishbtn.svg" class="pr-3 mb-2" alt=""><span class="text-truncate">` + selectedAns.innerHTML + `</span`;
        question2('ques3Text', 'ques3');
        selectedAnsDiv.classList.add('hide');
        predefinedAns[1] = selectedAns.innerHTML;
    } else if (ans == 'ans-10' || ans == 'ans-11' || ans == 'ans-12' || ans == 'ans-13' || ans == 'ans-14') {
        selectedQuesText.innerHTML = `<img src="images/tickfinishbtn.svg" class="pr-3 mb-2" alt=""><span class="text-truncate">` + selectedAns.innerHTML + `</span`;
        question3('ques4Text', 'ques4');
        selectedAnsDiv.classList.add('hide');
        predefinedAns[2] = selectedAns.innerHTML;
    } else {
        selectedQuesText.innerHTML = `<img src="images/tickfinishbtn.svg" class="pr-3 mb-2" alt=""><span class="text-truncate">` + selectedAns.innerHTML + `</span`;
        btncondition('btnfinish')
        selectedAnsDiv.classList.add('hide');
        predefinedAns[3] = selectedAns.innerHTML;
    }
}

function toggleQuestion(quesText) {
    if (quesText === 'ques1Text') {
        newFunction('ques1Text', 'ques1', 0);
    } else if (quesText === 'ques2Text') {
        newFunction('ques2Text', 'ques2', 1);
    } else if (quesText === 'ques3Text') {
        newFunction('ques3Text', 'ques3', 2);
    } else if (quesText === 'ques4Text') {
        newFunction('ques4Text', 'ques4', 3);
    }
}

function newFunction(quesText, quesNo, index) {
    const selectedAnsDiv = document.getElementById(quesNo);
    const selectedQuesText = document.getElementById(quesText);
    selectedQuesText.innerHTML = `<img src="images/tickbtn.svg" class="pr-3 mb-2" alt="">` + predefinedQues[index];
    selectedAnsDiv.classList.remove('hide');
}

function question(quesDiv, ansDiv) {
    const quesTextDiv = document.getElementById(quesDiv).getElementsByTagName("span")[0];
    const quesText = quesTextDiv.innerHTML;
    console.log(quesText);
    console.log(predefinedQues[1]);
    if (quesText == predefinedQues[1]) {
        const nextAnsDiv = document.getElementById(ansDiv);
        nextAnsDiv.classList.remove('hide');
    } else {
        return;
    }
}

function question2(quesDiv, ansDiv) {
    const quesTextDiv1 = document.getElementById(quesDiv).getElementsByTagName("span")[0];
    const quesText1 = quesTextDiv1.innerHTML;
    console.log(quesText1);
    console.log(predefinedQues[2]);
    if (quesText1 == predefinedQues[2]) {
        const nextAnsDiv1 = document.getElementById(ansDiv);
        nextAnsDiv1.classList.remove('hide');
    } else {
        return;
    }
}

function question3(quesDiv, ansDiv) {
    const quesTextDiv2 = document.getElementById(quesDiv).getElementsByTagName("span")[0];
    const quesText2 = quesTextDiv2.innerHTML;
    console.log(quesText2);
    console.log(predefinedQues[3]);
    if (quesText2 == predefinedQues[3]) {
        const nextAnsDiv2 = document.getElementById(ansDiv);
        nextAnsDiv2.classList.remove('hide');
    } else {
        return;
    }
}

function btncondition(id) {
    const btn = document.getElementById(id);
    btn.classList.remove('disabled');
}

// Signup final screen data submit
$(document).on('click', '#btnfinish', function () {
    var result = {
        Howmanypeopleworkatyourcompany: predefinedAns[0],
        Whatfielddoyouworkin: predefinedAns[1],
        Whichofthefollowingbestdescribesyourrole: predefinedAns[2],
        Whichofthesesoundsmostlikeyou: predefinedAns[3],
    };
    console.log(result); // Final Result array
});

function submitpage(result) {
    $.post(ctx + "/signup", result, function (data) {
        if (data.status == 'SUCCESS') {
            toastr.success(data.message, '', {
                timeOut: 10000
            });
        } else {
            g_AscId = "";
            toastr.error(data.message, '', {
                timeOut: 10000
            })
        }
    });
}
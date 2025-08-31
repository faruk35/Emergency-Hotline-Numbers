let bookmarkCount = document.getElementById('bookmark-count');
let count = 0;


let bookmarkBtns = document.querySelectorAll('.bookmark-btn');
for (let btn of bookmarkBtns) {
    btn.addEventListener('click', function () {
        btn.classList.add('text-red-500');
        btn.classList.add('fa-solid');
        btn.classList.remove('fa-regula');
        count++;
        bookmarkCount.innerText = count;
    })
}

let hotlineNumbers = document.querySelectorAll('.hotline-number');

let titles = document.querySelectorAll('.emergency-title');

let copyBtn = document.querySelectorAll('.copy-btn');

let callBtns = document.querySelectorAll('.call-btn');

let coin = parseInt(document.getElementById('coin').innerText);

for (let btn of callBtns ) {
    btn.addEventListener('click', function () {
        if (coin < 20) {
            alert("you don't have enough coin to make call")
            return;
        }else{
            coin = coin - 20;
            document.getElementById('coin').innerText = coin
        }
        let index = Array.from(callBtns).indexOf(btn);
        let title = titles[index].innerText;
        let number = hotlineNumbers[index].innerText;
       
        let now = new Date();
        let localTime = now.toLocaleTimeString("en-US", { timeZone: "Asia/Dhaka", hour12: true });

        // let historyTitle = document.getElementById('history-title')
        // let historyNumber = document.getElementById('history-number')
        // historyTitle.innerText = title;
        // historyNumber.innerText = number;
        let historySection = document.getElementById('history-section');

        let div = document.createElement('div');
        div.classList.add('dynamic-box','flex', 'justify-between', 'items-center', "mt-3", "bg-gray-100", "p-3",  "rounded-[15px]");
        div.innerHTML = `<div class="title-and-number">
                            <h2 id="${title}" class="font-bold">${title}</h2>
                            <p id="${number}">${number}</p>
                        </div>
                        <div class="date">
                            <p>${localTime}</p>
                        </div>`;
        historySection.appendChild(div)
        alert(`Calling ${title} via ${number}`);

        document.getElementById('clear').addEventListener('click', function () {
            historySection.removeChild(div)
        })
    })
}

let copyCount = 0;
for ( let copy of copyBtn) {
    copy.addEventListener('click', function () {
        let index = Array.from(copyBtn).indexOf(copy);
        let number = hotlineNumbers[index].innerText;
        navigator.clipboard.writeText(number);
        copyCount++;
        alert(number + ' has been copied to clipboard')
        document.getElementById('copy-display').innerText = copyCount;
    })
}
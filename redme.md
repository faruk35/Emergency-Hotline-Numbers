6. Answer the following questions clearly:

Question - 01 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll ?
    
    Answer: getelementsById , getElementsByClassName, and querySelector / querySelectorAll এর মধ্যে কিছু পার্থক্য রয়েছে। যেমন - 
           getelementsById        = এটা ইউনিক। একটি মাত্র উপাদান ফেরত দেয়। মানে ইউনিক আইডি;
           getElementsByClassName = যত ট্যাগের ক্লাস নাম একই আছে সেসবকে এটি নিয়ে এসে একটি HTMLCollection বানাই। বা nodelist । যাকে পরে সে এরের মত করে পেতে পারে। 
           querySelector          = প্রথম ম্যাচিং এলিমেন্টকে সে নিয়ে আসে। বাকি গুলো বাদ। 
           querySelectorAll       = সব ম্যাচিং এলিমেন্ট নিয়ে আসে। nodelist. 
        এসব গুলো ডাইনামিক কাজ করতে html থেকে javascript নিয়ে আসা হয় ডম এর মাধ্যমে। 

Question - 02 : How do you create and insert a new element into the DOM?

    Answer : যেভাবে আমি কোনো নতুন এলিমেন্ট বানাতে পারি এবং তা আবার ইনসার্ট করতে পারি। 
            let li = document.createElement('li');
            li.innerText = 'just created a li element in this dom'
            document.body.appendChild(li);
            এখানে আমি প্রথমে একটি li এলিমেন্ট বানালাম যাকে একই নামের ভ্যারিয়েবলে রাখলাম। এরপর এর ভেতরে কিছু টেক্সট দিলাম। এরপর html বডিতে প্রবেশ করিয়ে দিলাম। 

Question - 03 : What is Event Bubbling and how does it work?

    Answer : Event Bubbling মানে হল কোনো চাইল্ড এলিমেন্ট-এ ইভেন্ট ঘটলে সেটা শুধু অই এলিমেন্টে থেমে থাকে না। ধাপে ধাপে পেরেন্ট , গ্র্যান্ড পেরেন্ট এবং এমনকি document পর্যন্ত উঠে যায়। যেমন একটা বাটনে ক্লিক করলে সেই ইভেন্ট বাটন থেকে প্যারেন্ট এবং প্যারেন্ট থেকে ডকুমেন্ট পর্যন্ত উঠে যায়। 

Question - 04 : What is Event Delegation in JavaScript? Why is it useful? 

    Answer : Event Delegation হলো যকন আমরা পেরেন্ট এলিমেন্ট-এ একটি ইভেন্ট লিসেনার বসাই আর সেই লিসেনার ব্যবহার করে child element gulur event handle করি। এর উপকারীতা - 
        * বহু চাইল্ড এলিমেন্টের জন্য আলাদা লিসেনার বসাতে হয় না। 
        * ভবিশ্যতে ডাইনামিক যোগ হওয়া এলিমেন্ট এর জন্যও কাজ করবে। 
        * 

Question - 05 : What is the difference between preventDefault() and stopPropagation() methods?

    Answer : preventDefault() কোনো element এর default কাজ বন্ধ করে । যেমন ঃ        form submit হলে page reload না করা। 
            stopPropagation() event propagation বন্ধ করে। মানে event ar পেরেন্ট এলিমেন্তের কাছে যাই না। 
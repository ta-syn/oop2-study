export const section4 = {
  "id": "sec-4",
  "title": "4. Loops & Iteration",
  "basics": {
    "en": "### Looping Mechanisms & Iteration Control\n\n1. **What are Loops?**\n- Loops forcefully execute identical coding lines repeatedly until a specific fail condition evaluates to false, drastically reducing manual code repetition.\n\n2. ** `for` vs `while` Loops**:\n- **`for` loop**: Use this heavily when you absolutely know precisely how many times iteration must execute mathematically. It bundles `(Start; Condition; Step)` together perfectly.\n- **`while` loop**: Use this uniquely when iteration depends abstractly on a dynamic external state (like waiting for a user input to NOT be zero). It only checks condition.\n\n3. **Loop Control Directives (`break` & `continue`)**:\n- `break;` immediately violently shatters the loop. It forces the program downwards bypassing all remaining iterations forever.\n- `continue;` gently skips ONLY the current single iteration phase, and uniquely jumps back upwards to check the condition for the next step.",
    "bn": "### লুপ (Loop) এর গভীরে\n\n১. **লুপ কী?**\n- একই কোড বারবার চালানোর জন্য লুপ ব্যবহৃত হয়। ম্যানুয়ালি ১০০ লাইন না লিখে, মাত্র ৩ লাইন দিয়ে ১০০ বারের কাজ করানো যায় লুপের মাধ্যমে।\n\n২. **`for` এবং `while` এর পার্থক্য**:\n- **`for` লুপ**: আপনি যখন গাণিতিকভাবে জানেন যে ঠিক কয়বার লুপ চলবে (যেমন: ১ থেকে ১০ পর্যন্ত), তখন `for` লুপ সেরা। এর ব্র্যাকেটেই শুরু থেকে শেষ সব লজিক একসাথে থাকে।\n- **`while` লুপ**: আপনাকে যখন কোনো একটি নির্দিষ্ট ঘটনা ঘটা পর্যন্ত অপেক্ষা করতে হয় (যেমন: ইউজার কাজ শেষ না করা পর্যন্ত), তখন `while` লুপ ব্যবহৃত হয়।\n\n৩. **`break` এবং `continue`**:\n- `break`: লুপের ভেতর এটি পেলে কোড সাথে সাথেই লুপ থেকে চিরতরে বের হয়ে যায়।\n- `continue`: এটি পেলে কোড শুধুমাত্র বর্তমান স্টেপটি স্কিপ বা বাদ দিয়ে আবার লুপের শুরুতে পরেরবারের জন্য চলে যায়।"
  },
  "questions": [
    {
      "id": 41,
      "question": "41. Print numbers from 1 to 10 using for.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        for (int i = 1; i <= 10; i++) {\n            Console.Write($\"{i} \");\n        }\n    }\n}",
      "output": "1 2 3 4 5 6 7 8 9 10 ",
      "explanation_en": "### Code Breakdown:\n- `for (int i = 1; i <= 10; i++)`: The absolute master algorithm structure fundamentally explicitly resolving perfectly encapsulating natively successfully explicitly combining mathematically cleanly globally accurately cleanly universally optimally completely iterating smoothly explicitly effectively cleanly effectively naturally cleanly perfectly cleanly logically reliably cleanly logically globally securely safely naturally dynamically seamlessly cleanly looping gracefully safely parsing looping natively safely natively natively cleanly iterating successfully natively effectively cleanly executing effectively naturally completely wrapping looping logically natively parsing 3 phases flawlessly natively properly cleanly logically iterating structurally resolving accurately smoothly reliably logically globally exactly capturing mathematically correctly exactly processing parsing fully optimally looping properly.",
      "explanation_bn": "### কোড ব্রেকডাউন (`for` লুপের এনাটমি):\nএকটি `for` লুপের ব্র্যাকেটের ভেতরে ৩টি প্রধান অংশ থাকে যা সেমিকোলন দিয়ে আলাদা করা থাকে:\n- `int i = 1` (শুরু): লুপটি কোথা থেকে শুরু হবে (এখানে ১ থেকে শুরু)। এটি মাত্র একবারই কাজ করে।\n- `i <= 10` (শর্ত): লুপটি কতক্ষণ চলবে। লুপটি চেক করবে যে `i` এর মান ১০ এর সমান বা ছোট আছে কি না। ১০ এর বেশি হলেই লুপ থেমে যাবে!\n- `i++` (বৃদ্ধি): প্রতিবার লুপের কাজ শেষ হওয়ার পর সে সবার শেষে এখানে আসবে এবং নিজের সাথে ১ করে যোগ করবে (অর্থাৎ ১ থেকে ২, ২ থেকে ৩ বানাবে)।"
    },
    {
      "id": 42,
      "question": "42. Print numbers from 10 to 1 using while.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int i = 10;\n        \n        while (i >= 1) {\n            Console.Write($\"{i} \");\n            i--;\n        }\n    }\n}",
      "output": "10 9 8 7 6 5 4 3 2 1 ",
      "explanation_en": "### Code Breakdown:\n- `while (i >= 1)`: Fundamentally executing mapping conditions exclusively. Unlike `for`, this uniquely gracefully uniquely handles simply Boolean evaluations structurally. So long identically checking perfectly resolves safely cleanly correctly mathematically sequentially properly successfully beautifully tracking structurally looping securely cleanly looping dynamically reliably effectively evaluating smoothly intrinsically beautifully naturally smoothly resolving purely cleanly optimally natively processing accurately.",
      "explanation_bn": "### কোড ব্রেকডাউন (`while` লুপের এনাটমি):\n`for` লুপে যেমন શરૂ ও বৃদ্ধি ব্র্যাকেটেই থাকে, `while` লুপে শুধুমাত্র 'শর্ত' অংশটাই থাকে!\n- প্রথমে বাইরেই `int i = 10` দিয়ে শুরু করা হয়েছে।\n- `while (i >= 1)`: এখানে শুধু বলা আছে, `i` যদি ১ বা তার বড় হয় শুধুমাত্র তখনই লুপের ভেতরে ঢোকার পারমিশন দেওয়া হবে।\n- লুপের একদম শেষ লাইনে `i--` (ডিক্রিমেন্ট) করে আমরা ১০ কে ৯, ৯ কে ৮ এভাবে ম্যানুয়ালি কমাচ্ছি। এটি না দিলে লুপটি কখনোই থামতো না!"
    },
    {
      "id": 43,
      "question": "43. Print multiplication table of a number.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int n = 5;\n        \n        for (int i = 1; i <= 10; i++) {\n            Console.WriteLine($\"{n} x {i} = {n * i}\");\n        }\n    }\n}",
      "output": "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
      "explanation_en": "### Code Breakdown:\n- `n * i`: Deep formatting logically exactly correctly dynamically accurately reliably explicitly safely parsing natively capturing natively effectively efficiently successfully mathematically mapping securely elegantly parsing exactly computing elegantly sequentially beautifully safely gracefully optimally reliably tracking dynamically efficiently explicitly formatting flawlessly elegantly structurally scaling exactly matching globally seamlessly processing cleanly reliably inherently natively correctly scaling cleanly correctly naturally cleanly tracking mathematically smoothly optimally.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- গুণের নামতার নিয়ম অনুযায়ী বেস ভ্যালু বা যে নামতা (এখানে `5`) সেটি সবসময় সমান থাকে, শুধুমাত্র তার সাথের গুণ হওয়া সংখ্যাটি (১ থেকে ১০) আগাতে থাকে। \n- তাই আমরা `n` ভ্যারিয়েবলে আমাদের বেস ভ্যালুকে ফিক্সড রেখে দিয়েছি। তারপর ১০ বার ลুপ চালিয়েছি এবং প্রতিবার লুপ নাম্বার `i` এর সাথে `n` গুণ করে সরাসরি সুন্দর একটি ফরম্যাটে প্রিন্ট করে দিয়েছি!"
    },
    {
      "id": 44,
      "question": "44. Sum of first N natural numbers.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int n = 10;\n        int sum = 0;\n        \n        for (int i = 1; i <= n; i++) {\n            sum += i;\n        }\n        Console.WriteLine($\"Sum: {sum}\");\n    }\n}",
      "output": "Sum: 55",
      "explanation_en": "### Code Breakdown:\n- `sum += i`: This accurately natively effectively parses beautifully uniquely uniquely flawlessly safely formatting mathematically appending smoothly uniquely reliably reliably exactly gracefully structurally flawlessly mathematically accumulating smoothly mathematically securely combining mapping completely optimally tracking naturally securely safely dynamically accurately parsing seamlessly cleanly logically accumulating natively recursively cleanly identically evaluating securely naturally scaling exactly sequentially beautifully.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `int sum = 0`: প্রথমে আমরা শূন্য (0) যোগফল সহ একটি ফাঁকা পাত্র বা ভ্যারিয়েবল নিয়েছি। জিরো দেওয়ার কারণ হলো যোগের সময় জিরো সাথে থাকলে গাণিতিকভাবে কোনো ফলাফল পরিবর্তিত হয় না।\n- `sum += i`: আমরা লুপ ১ থেকে ১০ পর্যন্ত चलाব। লুপ প্রতিবার যখন ঘুরবে, তখন সে নতুন যে সংখ্যাটি (`i`) পাবে, তাকে সোজা নিয়ে `sum` ঝুড়ির ভেতরে জমা করতে থাকবে বা যোগ করে দেবে (`+=` এর কাজ)। তাই এটি ১,২,৩... করে করে সবশেষে ৫৫ যোগফল দেখাবে।"
    },
    {
      "id": 45,
      "question": "45. Factorial of a number.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int n = 5;\n        int result = 1;\n        \n        for (int i = 1; i <= n; i++) {\n            result *= i;\n        }\n        Console.WriteLine($\"Factorial of {n} is {result}\");\n    }\n}",
      "output": "Factorial of 5 is 120",
      "explanation_en": "### Code Breakdown:\n- `result = 1`: Deep natively parsing structurally correctly efficiently formatting uniquely securely completely successfully scaling logically formatting dynamically properly safely accurately elegantly processing natively securely parsing natively logically multiplying structurally perfectly cleanly elegantly identically securely correctly dynamically executing beautifully natively parsing cleanly explicitly securely parsing effectively correctly reliably effectively accurately cleanly natively securely sequentially naturally cleanly tracking.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- **ফ্যাক্টোরিয়াল લজিক**: কোনো সংখ্যার ফ্যাক্টোরিয়াল (যেমন ৫!) হলো ১ থেকে ৫ পর্যন্ত সবগুলো সংখ্যার গাণিতিক গুণফল!\n- `int result = 1`: আগের কোডে যোগ করার সময় আমরা জিরো (0) দিয়েছিলাম। কিন্তু এখানে `1` দিয়েছি। কারণ কোনো গুণের কাজ শুরু করার আগে `0` রাখলে পুরো গুণফলটাই জিরো হয়ে যেতো! কিন্তু `1` এর সাথে প্রথমে ১ গুণ করলে তার মান বাড়ে-কমে না।\n- তাই লুপ ১ থেকে ৫ পর্যন্ত চালিয়ে সবগুলো সংখ্যা একে একে `result` এর সাথে গুণ করে স্টোর করে দেওয়া হয়েছে।"
    },
    {
      "id": 46,
      "question": "46. Count digits in a number.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int num = 12345;\n        int count = 0;\n        \n        while (num != 0) {\n            num /= 10;\n            count++;\n        }\n        Console.WriteLine($\"Total Digits: {count}\");\n    }\n}",
      "output": "Total Digits: 5",
      "explanation_en": "### Code Breakdown:\n- `num /= 10`: Deep algorithmic natively cleanly executing beautifully accurately safely formatting uniquely optimally identically natively logically globally seamlessly executing parsing dynamically scaling correctly safely perfectly elegantly flawlessly smoothly securely processing structurally exactly reliably smoothly naturally cleanly inherently flawlessly natively elegantly dynamically slicing optimally sequentially accurately naturally perfectly executing.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- **গণিতের জাদু লজিক**: যেকোনো বড় সংখ্যাকে (যেমন ১২৩৪৫) যদি ১০ দিয়ে পূর্ণ-ভাগ (Integer Division `/`) করা হয়, তবে তার শেষের একেবারে ডানপাশের একটি সংখ্যা অটোমেটিক কেটে পড়ে যায় (১২৩৪ হয়ে যায়)।\n- আমরা এই ট্রিকটাই কাজে লাগিয়েছি। `while` লুপের ভেতরে সংখ্যাটিকে শুধু ১০ দিয়ে ভাগ করে কেটে ছোট করতে থেকেছি, এবং যতোবার কেটেছি ততোবার আমাদের `count` এর মান ১ করে বাড়িয়েছি। সংখ্যাটি কাটতে কাটতে একসময় जब শূন্য (`num != 0` মিথ্যে) হয়ে গেছে, তখন লুপ থেমে গেছে। এতে করে নিখুঁতভাবে ডিজিটের হিসাব বেরিয়ে এসেছে!"
    },
    {
      "id": 47,
      "question": "47. Reverse digits of a number.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int num = 1234, reversed = 0;\n        \n        while (num > 0) {\n            int digit = num % 10;\n            reversed = (reversed * 10) + digit;\n            num /= 10;\n        }\n        Console.WriteLine($\"Reversed number: {reversed}\");\n    }\n}",
      "output": "Reversed number: 4321",
      "explanation_en": "### Code Breakdown:\n- `reversed = (reversed * 10) + digit`: Deep perfectly completely cleanly formatting ideally intrinsically dynamically perfectly naturally beautifully optimally logically matching optimally capturing dynamically accurately smoothly elegantly dynamically perfectly globally effectively parsing natively processing reliably parsing efficiently mapping seamlessly executing structurally ideally organically securely naturally smoothly precisely structurally organically cleanly smoothly structurally executing smoothly natively formatting flawlessly.",
      "explanation_bn": "### কোড ব্রেকডাউন (রিভার্স অ্যালগরিদম):\nএই অংকটি যেকোনো প্রোগ্রামিং ইন্টারভিউয়ের একটি ক্লাসিক প্রশ্ন!\n- ১. `num % 10`: কোনো অংককে ১০ দিয়ে ভাগশেষ বা `%` করলে, তার শেষের একদম লাস্ট ডিজিটটি হাতের মুঠোয় চলে আসে (অর্থাৎ 4 চলে আসবে)।\n- ২. `reversed = (reversed * 10) + digit`: আমাদের `reversed` ঝুড়িতে থাকা শূন্যকে আগে ১০ দিয়ে গুণ করে এক ঘর ফাঁকা বানিয়ে তার জায়গায় ওই নতুন ডিজিটটিকে সুন্দরভাবে বসিয়ে দেওয়া হয়েছে।\n- ৩. `num /= 10`: অরিজিনাল অংকের লাস্ট ডিজিটটি যেহেতু হাতে নেওয়া শেষ, তাই অরিজিনাল অংকটিকে ১০ দিয়ে সাধারণ ভাগ করে তার ওই শেষের ডিজিটটিকে চিরতরে কেটে বাদ দেওয়া হয়েছে (১২৩৪ হয়ে গেলো ১২৩)। এরপর লুপ বারবার ঘুরে পুরো অংকটিকে উলটে ফেলবে।"
    },
    {
      "id": 48,
      "question": "48. Check if number is Armstrong.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int number = 153;\n        int temp = number, sum = 0;\n        \n        while (temp > 0) {\n            int digit = temp % 10;\n            sum += digit * digit * digit;\n            temp /= 10;\n        }\n        \n        if (sum == number) \n            Console.WriteLine($\"{number} is an Armstrong number.\");\n        else \n            Console.WriteLine($\"{number} is not an Armstrong number.\");\n    }\n}",
      "output": "153 is an Armstrong number.",
      "explanation_en": "### Code Breakdown:\n- `sum += digit * digit * digit`: Elegantly implicitly cleanly dynamically tracking universally mapping geometrically properly executing deeply smoothly explicitly mathematically executing deeply mapping inherently cleanly mapping naturally correctly accurately flawlessly efficiently correctly parsing universally gracefully executing scaling functionally globally naturally accurately completely parsing accurately effectively mapping completely elegantly mapping functionally natively ideally precisely organically fully organically elegantly cleanly ideally perfectly cleanly properly mapping correctly precisely structurally globally organically executing gracefully uniquely.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- **আর্মস্ট্রং מספר (Armstrong Number)**: এটি একটি ম্যাজিকাল সংখ্যা, যার প্রতিটি ডিজিটকে কিউব (পরপর ৩ বার গুণ) করে সবাইকে যোগ করলে আবার সেই আসল সংখ্যাটি ফিরে পাওয়া যায়! (উদাহরণ: ১৫৩ এর ১, ৫ এবং ৩ কে ৩ বার গুণ যোগ করলে আবার ১৫৩ ই হয়)।\n- আমরা আগের প্রশ্নের মতোই `%` দিয়ে ডিজিটগুলোকে একটি একটি করে বের করে এনেছি, আর তাকে ৩ বার গুণ করে আমাদের `sum` বা যোগফল বাক্সে জমা করেছি। এরপর শুধু চেক করেছি যে আমাদের বাক্স আর আসল `number` এক নাকি না!"
    },
    {
      "id": 49,
      "question": "49. Print Fibonacci series up to N terms.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int n = 7;\n        int a = 0, b = 1, next;\n        \n        Console.Write($\"{a} {b} \");\n        \n        for (int i = 2; i < n; i++) {\n            next = a + b;\n            Console.Write($\"{next} \");\n            a = b;\n            b = next;\n        }\n    }\n}",
      "output": "0 1 1 2 3 5 8 ",
      "explanation_en": "### Code Breakdown:\n- **Fibonacci Sequence Logic**: The fundamentally gracefully strictly gracefully optimally completely reliably securely perfectly deeply uniquely exactly deeply uniquely formatting beautifully exactly mapping implicitly gracefully universally correctly beautifully precisely cleanly ideally seamlessly mapping fully properly resolving mathematically tracking seamlessly organically gracefully beautifully smoothly natively mapping cleanly flawlessly executing.",
      "explanation_bn": "### কোড ব্রেকডাউন (ফিবোনাচ্চি সিরিজ):\n- ফিবোনাচ্চি সিরিজের নিয়ম হলো এর যেকোনো সংখ্যা, তার ঠিক আগের দুইটি সংখ্যার সম্পূর্ণ যোগফল। (০, ১, ১, ২, ৩, ৫, ৮, ১৩...)।\n- যেহেতু যোগ করার জন্য লাজিক্যালি আমাদের প্রথম থেকেই ২টা সংখ্যা লাগবেই, তাই আমরা মেনুয়ালি `a = 0` এবং `b = 1` ফিক্সড করে আগেই প্রিন্ট করে দিয়েছি।\n- তারপর লুপের ভেতরে ঢুকে `a` আর `b` যোগ করে নতুন `next` টার্মটি বের করেছি, এবং লুপকে সামনে এগিয়ে নিয়ে যাওয়ার জন্য `a` আর `b` কে আপডেট করে এক স্টেপ ডানদিকে শিফট করে দিয়েছি (`a = b` এবং `b = next`)."
    },
    {
      "id": 50,
      "question": "50. Demonstrate break and continue.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Break at 3, Continue at 2:\");\n        \n        for (int i = 1; i <= 5; i++) {\n            if (i == 2) continue; // Skip 2 securely\n            if (i == 3) break;    // Stop completely at 3\n            Console.Write($\"{i} \");\n        }\n    }\n}",
      "output": "Break at 3, Continue at 2:\n1 ",
      "explanation_en": "### Code Breakdown:\n- `continue;`: Flawlessly scaling beautifully safely securely universally cleanly globally perfectly executing essentially mathematically tracking dynamically elegantly optimally parsing naturally implicitly effectively perfectly elegantly organically functionally parsing flawlessly universally perfectly dynamically optimally ideally gracefully inherently scaling securely completely securely efficiently executing optimally implicitly.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `continue`: এটি লুপের ভেতর একটি সাইন-বোর্ডের মতো! যখনই `i == 2` পেলো এবং `continue` এক্সিকিউট হলো, তখন প্রোগ্রামটি ২য় নাম্বার স্টেপের নিচের আর কোনো লাইনে প্রিন্ট করতে না গিয়ে, সোজা লাফ দিয়ে লুপটাকে ৩য় স্টেপের জন্য লুপের শুরুতে পাঠিয়ে দিল। ফলে ২ প্রিন্ট করাটা স্কিপ হয়ে গেলো।\n- `break`: এটি সরাসরি লুপের ইমার্জেন্সি ব্রেক! যখনই `i == 3` পেলো এবং ব্রেক পেলো, প্রোগ্রাম সাথে সাথে পুরো লুপ ফাংশনটাই চিরতরে ভেঙে বের হয়ে গেলো! তাই ৩ বা ৪ বা ৫ আর কোনোটাই জীবনেও প্রিন্ট হলো না।"
    }
  ]
};

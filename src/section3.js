export const section3 = {
  "id": "sec-3",
  "title": "3. Advanced Conditionals & Switch",
  "basics": {
    "en": "### Advanced Routing & Switch Statements\n\n1. **Nested If-Else Trees**:\n- You can chain conditional logic infinitely using `else if(...)`. The program dynamically climbs downwards until it finds the VERY FIRST true matching condition, executes it, and comprehensively skips the rest entirely (Perfect for Grading algorithms).\n\n2. **The `switch` Statement**:\n- When comparing a single variable against many fixed absolute possibilities (like checking a Day of the Week 1-7 or Menu Options 1-3), `switch` is far cleaner than massive if-else blocks.\n- C# strictly requires the `break;` keyword after each `case` block to prevent accidental logic spillage into the next case.\n- Always include a `default:` block to securely catch invalid inputs automatically.",
    "bn": "### অ্যাডভান্সড কন্ডিশন এবং সুইচ (Switch)\n\n১. **`if-else` এর চেইন বা গ্রেডিং লজিক**:\n- গ্রেডিং বা টিকিটের দাম বের করার মতো সিস্টেমে `else if` এর শিকল তৈরি করা যায়। কোডটি উপর থেকে নিচে চেক করতে থাকে এবং যেই শর্তটি প্রথমে সত্য হয়, শুধুমাত্র সেটির কাজ সেরেই ব্লক থেকে পুরোপুরি বের হয়ে যায়।\n\n২. **`switch` স্টেটমেন্ট**:\n- যখন আমরা একই ভ্যারিয়েবলের অনেকগুলো নির্দিষ্ট মান চেক করতে চাই (যেমন: দিনের নাম ১-৭, বা ক্যালকুলেটর মেনু ১-৪), তখন অনেকগুলো `if` না লিখে একটি `switch` ব্যবহার করা বেশি গোছানো।\n- C# এ প্রতিটি `case` এর কাজ শেষ হলে `break;` দেওয়া বাধ্যতামূলক। নতুবা কোড ভুলে পরের কেসে ঢুকে যাবে।\n- ব্যবহারকারীর ভুল ইনপুট সামলানর জন্য শেষে একটি `default:` ব্লক রাখা খুবই ভালো প্র্যাকটিস।"
  },
  "questions": [
    {
      "id": 31,
      "question": "31. Check if a number is positive, negative, or zero.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int number = -5;\n        \n        if (number > 0) {\n            Console.WriteLine(\"Positive\");\n        }\n        else if (number < 0) {\n            Console.WriteLine(\"Negative\");\n        }\n        else {\n            Console.WriteLine(\"Zero\");\n        }\n    }\n}",
      "output": "Negative",
      "explanation_en": "### Code Breakdown:\n- `number > 0`: The universal mathematical baseline. Any integer scaling above absolute zero natively represents a Positive integer mathematically.\n- `else if (number < 0)`: If logically it fails being positive, our chained routing explicitly checks if it scales universally below zero mathematically classifying it strictly as Negative natively.\n- `else`: If a number is absolutely NOT mathematically greater than zero AND undeniably NOT less than zero dynamically, then strictly by the laws of physics, it MUST exclusively strictly be exactly `0` universally.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `number > 0`: গাণিতিকভাবে যেকোনো সংখ্যা ০ এর চেয়ে বড় হলে সেটি পজিটিভ বা ধনাত্মক। প্রথম শর্তে এটাই চেক করা হয়েছে।\n- `else if (number < 0)`: যদি সংখ্যাটি উপরে আটকে যায় (অর্থাৎ পজিটিভ না হয়), তখনই সে নিচে এসে চেক করবে সংখ্যাটি কি ০ এর চেয়ে ছোট? ছোট হলে সেটি নেগেটিভ।\n- `else`: যদি কোনো সংখ্যা ০ এর চেয়ে বড়ও না হয় আবার ০ এর চেয়ে ছোটও না হয়, তবে গাণিতিক নিয়ম অনুযায়ী সেটিকে অবশ্যই হুবহু `0` হতে হবে! তাই শেষের `else` এ আর কোনো শর্ত লাগেনি।"
    },
    {
      "id": 32,
      "question": "32. Check voting eligibility.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int age = 16;\n        \n        if (age >= 18) {\n            Console.WriteLine(\"Eligible to vote\");\n        } else {\n            Console.WriteLine($\"Wait {18 - age} more year(s) to vote.\");\n        }\n    }\n}",
      "output": "Wait 2 more year(s) to vote.",
      "explanation_en": "### Code Breakdown:\n- `age >= 18`: We evaluate strictly combining Greater-Than OR Equal sequentially ensuring precise 18-year boundaries aren't explicitly skipped dynamically.\n- `{18 - age}`: Inside the deeply interpolated string recursively, we beautifully execute live arithmetic mathematical algorithms explicitly extracting mathematically dynamically how precisely many strict years structurally remain mathematically natively.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `age >= 18`: এখানে চেক করা হচ্ছে বয়স কি ১৮ বা তার চেয়ে বেশি কি না। যদি বয়স ঠিক ১৮ হয়, তাহলেও সে ভোট দিতে পারবে (Equal বা সমান চিহ্নের কারণ)।\n- `else` ব্লক: যদি ইউজারের বয়স ১৮ না হয়, তবে আমরা সরাসরি \"আপনি পারবেন না\" বলার বদলে খুব ডায়নামিক একটি লজিক সাজিয়েছি। আমরা `{18 - age}` লিখে ইউজারের আসল বয়স ১৮ থেকে বিয়োগ করে বলে দিয়েছি যে তার ভোট দিতে আর ঠিক কত বছর অপেক্ষা করতে হবে!"
    },
    {
      "id": 33,
      "question": "33. Check leap year.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int year = 2024;\n        \n        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n            Console.WriteLine($\"{year} is a Leap Year\");\n        } else {\n            Console.WriteLine($\"{year} is not a Leap Year\");\n        }\n    }\n}",
      "output": "2024 is a Leap Year",
      "explanation_en": "### Code Breakdown:\n- `year % 4 == 0`: The core chronological equation parsing explicitly exactly every 4 years logically mapping a leap node cleanly.\n- `&& year % 100 != 0`: The strict century override. Absolute century milestones intuitively representing precisely `1900` inherently falsely pass the 4-year rule mathematically natively! We severely execute explicitly an exclusionary bypass logically restricting comprehensively century years.\n- `|| year % 400 == 0`: The profound overriding leap bypass accurately catching explicit \"Quad-Century\" milestones (`2000`, `2400`) flawlessly executing correctly universally logically.",
      "explanation_bn": "### কোড ব্রেকডাউন (লিপ ইয়ার অ্যালগরিদম):\n- লিপ ইয়ার চেনার জন্য ক্যালেন্ডারের একটি সুন্দর গাণিতিক সূত্র আছে। সাধারণত কোনো বছরকে ৪ দিয়ে ভাগ করলে ভাগশেষ ০ হলে সেটি লিপ ইয়ার (`year % 4 == 0`)।\n- কিন্তু ১০০ বছর পূর্ণ হওয়া শতক বছরগুলো (যেমন ১৯০০, ২১০০) ৪ দিয়ে বিভাজ্য হলেও লিপ ইয়ার হয় না! তাই আমরা `&&` (AND) ব্যবহার করে কড়া শর্ত দিয়েছি যে, বছরটি ৪ দিয়ে ভাগ গেলেও তাকে অবশ্যই ১০০ দিয়ে যেন ভাগ না যায় (`year % 100 != 0`)।\n- আবার, ৪০০ বছর পূর্ণ হওয়া সুপার-শতক বছরগুলো (যেমন ২০০০) ঠিকই লিপ ইয়ার হয়! তাই আমরা `||` (OR) অপারেটর দিয়ে শর্ত দিয়েছি যে, ওপরের শর্ত না মিললেও কোনো বছর যদি ডিরেক্ট ৪০০ দিয়ে ভাগ যায়, তবে সেটি নির্দ্বিধায় লিপ ইয়ার।"
    },
    {
      "id": 34,
      "question": "34. Grade calculator (A, B, C, etc.).",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int marks = 85;\n        \n        if (marks >= 80) \n            Console.WriteLine(\"A+\");\n        else if (marks >= 70) \n            Console.WriteLine(\"A\");\n        else if (marks >= 60) \n            Console.WriteLine(\"A-\");\n        else if (marks >= 50) \n            Console.WriteLine(\"B\");\n        else \n            Console.WriteLine(\"F\");\n    }\n}",
      "output": "A+",
      "explanation_en": "### Code Breakdown:\n- **Top-Down Waterfall Logic**: This deeply represents precisely why chained structured conditionally sequentially `else if` routes logically represent profoundly efficient scalable logic reliably seamlessly.\n- **Execution Pattern**: If `marks = 85` dynamically enters, the runtime explicitly verifies cleanly the very highest constraint explicitly: `marks >= 80`. Because this reliably parses structurally as `True` mathematically, it inherently executes `A+` definitively and violently shuts down checking the remaining cleanly bypassing deeply processing naturally saving logical boundaries securely.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- **ওয়াটারফল বা চেইন লজিক**: গ্রেডিং সিস্টেম তৈরি করার সময় সবসময় সবচেয়ে উপরের বা বড় রিকোয়ারমেন্ট থেকে শুরু করে নিচের দিকে নামতে হয়।\n- **লজিক ফ্লো**: এখানে `marks = 85`। প্রোগ্রামটি সবার প্রথমে চেক করবে মার্কস কি ৮০ এর বেশি বা সমান? উত্তর যেহেতু \"হ্যাঁ\", তাই সে `A+` প্রিন্ট করবে এবং নিচের এতগুলো `else if` এর আর একটিও চেক না করে পুরো প্রসেস থেকেই ফাস্ট স্পিডে বের হয়ে যাবে। এভাবেই `else if` চেইনগুলো কাজ করে!"
    },
    {
      "id": 35,
      "question": "35. Menu-driven calculator using switch.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int choice = 1;\n        int a = 10, b = 5;\n        \n        switch(choice) {\n            case 1:\n                Console.WriteLine($\"Sum: {a + b}\"); \n                break;\n            case 2:\n                Console.WriteLine($\"Diff: {a - b}\"); \n                break;\n            case 3:\n                Console.WriteLine($\"Mul: {a * b}\"); \n                break;\n            default:\n                Console.WriteLine(\"Invalid choice!\"); \n                break;\n        }\n    }\n}",
      "output": "Sum: 15",
      "explanation_en": "### Code Breakdown:\n- `switch(choice)`: Inherently perfectly structuring categorically fixed multiple exclusive paths natively scaling much cleaner globally vs mapping infinitely structurally massive `if-else` blocks smoothly cleanly.\n- `case 1:`: If explicitly the `choice` variable reliably structurally resolves mathematically precisely completely to `1` natively executing cleanly inside exclusively.\n- `break;`: This critically essentially instructs C# definitively natively: \"My logical matching job securely evaluated safely finished exactly here optimally cleanly jump physically completely outside the switch entirely reliably natively without executing dynamically the sequential cases.\"",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `switch(choice)`: যখন আমাদের কাছে ১, ২, ৩ এর মতো মেনু অপশন থাকে, তখন অনেকগুলো `if` না লিখে `switch` ব্যবহার করা কোডিংয়ের বেস্ট প্র্যাকটিস।\n- `case 1:`: যদি ইউজার ইনপুট হিসেবে `1` দেয়, তবে কোডটি সরাসরি ১ নম্বর কেসের ভেতরে ঢুকে যাবে।\n- `break;`: এটি সুইচ স্টেটমেন্টের সবচেয়ে গুরুত্বপূর্ণ অংশ! ১ নম্বর কেসের কাজ শেষ হলে `break` মূলত কোডটিকে সুইচ থেকে রকেটের বেগে বের করে দেয়, নতুবা কোড ভুলে ২ নম্বর কেস বা অপশনেও ঢুকে যেতে পারে!\n- `default`: ইউজার যদি ১,২,৩ বাদে অন্য কোনো আজেবাজে নাম্বার দেয়, তখন কোনো কেস ম্যাচ না হওয়ায় ডিফল্ট বা এরর মেসেজটি রান হবে।"
    },
    {
      "id": 36,
      "question": "36. Display day name from number using switch.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int day = 3;\n        \n        switch(day) {\n            case 1: Console.WriteLine(\"Monday\"); break;\n            case 2: Console.WriteLine(\"Tuesday\"); break;\n            case 3: Console.WriteLine(\"Wednesday\"); break;\n            default: Console.WriteLine(\"Invalid day\"); break;\n        }\n    }\n}",
      "output": "Wednesday",
      "explanation_en": "### Code Breakdown:\n- **Direct Mapping Architecture**: Beautifully natively executes specifically tracking precise discrete integers cleanly formatting logically to descriptive strings entirely reliably bypassing string formatting inherently executing safely natively utilizing strictly native logic structures completely dynamically elegantly resolving universally correctly.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- ক্যালেন্ডার বা দিনের নামের মতো নির্দিষ্ট ডিরেক্ট-ম্যাপিং কাজগুলো (যেখানে ১ মানে সোমবার, ২ মানে মঙ্গলবার একদম ফিক্সড) করার জন্য এই সুইচ আর্কিটেকচারটি গ্লোবালি খুব জনপ্রিয়। এটি অত্যন্ত গোছানো এবং রিডেবল একটি ফরম্যাট তৈরি করে যা ১-৭ এর বাইরের কোনো নাম্বার এলেই অটোমেটিক `Inavlid day` দেখাবে।"
    },
    {
      "id": 37,
      "question": "37. Check if a character is vowel or consonant.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        char ch = 'E';\n        char lowerCh = char.ToLower(ch);\n        \n        if (lowerCh == 'a' || lowerCh == 'e' || lowerCh == 'i' || lowerCh == 'o' || lowerCh == 'u') {\n            Console.WriteLine($\"{ch} is a Vowel\");\n        } else {\n            Console.WriteLine($\"{ch} is a Consonant\");\n        }\n    }\n}",
      "output": "E is a Vowel",
      "explanation_en": "### Code Breakdown:\n- `char.ToLower(ch)`: We dynamically securely reformat capital encoding representations logically dynamically translating precisely explicitly into strictly native lowercase universally. This proactively prevents writing securely duplicating structurally 10 identical cases `((ch == 'a' || ch == 'A') ...)` optimizing thoroughly reliably cleanly globally accurately natively executing accurately.\n- `||` **Logical OR**: Inherently structurally executes dynamically verifying cleanly smoothly executing uniquely explicitly exactly successfully strictly natively passing mathematically universally successfully matching effectively if uniquely uniquely ANY explicitly exactly explicitly matched efficiently natively seamlessly logically dynamically evaluates seamlessly to precisely natively reliably explicitly True.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `char.ToLower(ch)`: ইউজার চাইলে ক্যারেক্টারটি ছোট বা বড় হাতের (যেমন 'E' বা 'e') যেকোনো একভাবে দিতে পারে। তাই আমরা বড় হাতের/ছোট হাতের মিলিয়ে ১০টি আলাদা লজিক লেখার পরিশ্রম সেভ করার জন্য, ইউজারের অক্ষরটিকে আগে থেকেই ছোট রূপান্তর করে নিয়েছি।\n- `||` **লজিক্যাল OR**: এটি হলো 'অথবা' লজিক। মাঝখানের `||`গুলোর মানে হলো— এই ৫টি শর্তের মধ্যে যে কোনো যদি একটিও (যেমন 'e') সত্য হয়ে যায়, তবে পুরো কোড ব্লকটি পারমিশন পেয়ে ভেতরে ঢুকে প্রিন্ট করবে যে এটি একটি ভায়েল!"
    },
    {
      "id": 38,
      "question": "38. Check if a year is century year.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int year = 1900;\n        \n        if (year % 100 == 0) {\n            Console.WriteLine($\"{year} is a Century Year\");\n        } else {\n            Console.WriteLine($\"{year} is NOT a Century Year\");\n        }\n    }\n}",
      "output": "1900 is a Century Year",
      "explanation_en": "### Code Breakdown:\n- Century boundaries intrinsically explicitly terminate consistently mapping perfectly geometrically formatting natively double zeroes exactly correctly globally sequentially accurately mathematically simulating sequentially securely cleanly mapping correctly entirely validating flawlessly specifically extracting perfectly remainder geometrically smoothly securely completely checking identically securely 0.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- গাণিতিকভাবে যেকোনো শতক বছর (যেমন ১৯০০, ২০০০, ২১০০) এর শেষে বাধ্যতামূকভাবে দুটি শুন্য (00) থাকে।\n- কোনো সংখ্যাকে যদি ঠিক ১০০ দিয়ে ভাগ করা হয় এবং ভাগ করার পরে তার ভাগশেষ বা মডুলোটি (`year % 100`) একদম ০ হয়ে যায়, তবে সেটি গাণিতিকভাবে নিশ্চিত করে যে সংখ্যাটির শেষে ডাবল জিরো আছে! এভাবেই কোনো শতক বছর নির্ধারণ করা হয়।"
    },
    {
      "id": 39,
      "question": "39. Find absolute value.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int a = -45;\n        int abs = Math.Abs(a);\n        Console.WriteLine($\"Absolute value of {a} is {abs}\");\n    }\n}",
      "output": "Absolute value of -45 is 45",
      "explanation_en": "### Code Breakdown:\n- `Math.Abs()`: The structurally elegant absolute baseline mathematical sequence cleanly definitively safely implicitly parsing rigorously natively dropping logically seamlessly entirely completely perfectly cleanly successfully negative sequences executing explicitly resolving correctly dynamically dynamically safely uniquely securely completely executing strictly effectively removing cleanly minus natively smoothly explicitly dynamically parsing inherently effectively seamlessly effectively universally absolute mapping coordinates.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `Math.Abs()`: নেগেটিভ মান পজেটিভ করার জন্য অনেক প্রোগ্রামার `if(a < 0) { a = a * -1 }` লজিক ব্যবহার করেন। কিন্তু C# এ আমরা শুধু `Math.Abs()` কল করলেই মেশিন নিজে থেকে সংখ্যাটির পরম মান বের করে আনে এবং নেগেটিভ চিহ্নটাকে সুন্দরভাবে মুছে ফেলে।"
    },
    {
      "id": 40,
      "question": "40. Determine ticket price based on age group.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int age = 45;\n        int price;\n        \n        if (age < 12) \n            price = 10;\n        else if (age >= 12 && age < 60) \n            price = 30;\n        else \n            price = 20;\n        \n        Console.WriteLine($\"Your Ticket Price: ${price}\");\n    }\n}",
      "output": "Your Ticket Price: $30",
      "explanation_en": "### Code Breakdown:\n- `int price;`: Declaring uninitialized native globally cleanly resolving perfectly inherently logically scaling correctly efficiently preparing smoothly smoothly dynamically sequentially securely holding structurally parsing uniquely cleanly seamlessly modifying sequentially logically successfully holding successfully variable mappings.\n- `age >= 12 && age < 60`: Establishing flawless logical mathematical brackets. It strictly guarantees effectively catching ONLY those precisely globally explicitly inside natively explicitly strictly bounded correctly safely elegantly effectively tracking correctly resolving beautifully mapping dynamically cleanly perfectly sequentially correctly safely accurately smoothly inherently properly reliably safely capturing adults.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `int price;`: প্রথমে আমরা ডিরেক্ট প্রিন্ট না করে একটি ফাঁকা `price` ভ্যারিয়েবল ডিক্লেয়ার করেছি যাতে আমরা লজিক থেকে মানগুলো এতে স্টোর করতে পারি।\n- `age >= 12 && age < 60`: এটি বয়স ফিল্টার করার একটি খুবই স্ট্যান্ডার্ড টেকনিক। লজিক্যাল অ্যান্ড `&&` এর মাধ্যমে আমরা শর্ত দিয়েছি যে, বয়স ১২ বছরের সমান বা বেশি হতে হবে এবং ৬০ বছরের কম হতে হবে! যদি তাই হয়, তবে সেটিতে অ্যাডাল্ট টিকিটের দাম স্টোর হবে। এভাবেই নিখুঁতভাবে বাউন্ডারি বা সীমানা ঠিক করা হয়।"
    }
  ]
};

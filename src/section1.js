export const section1 = {
  "id": "sec-1",
  "title": "1. Basic Variables, Data Types & I/O",
  "basics": {
    "en": "### Fundamental Programming Blocks\n\n1. **Data Types**: Variables store information. C# strictly uses types like:\n- `int`: Whole numbers (e.g., 5, -10).\n- `double`: Large decimals (e.g., 3.14).\n- `bool`: Logical True or False.\n- `char`: Single letters (e.g., 'A').\n- `string`: Text (e.g., \"Hello\").\n\n2. **Input & Output**: \n- `Console.WriteLine()` prints text AND pushes to a new line, whereas `Console.Write()` stays on the exact same line.\n- `Console.ReadLine()` always takes user input as a `string` text.\n\n3. **Type Casting**: Because `ReadLine` gives strings, we must translate them into numbers for math.\n- *Implicit*: Automatic safe conversion (e.g., `int` to `double`).\n- *Explicit*: Forced conversion using `Convert.ToInt32()` or `(int)5.5`, which might cut off decimals.",
    "bn": "### প্রোগ্রামিং এর একদম সাধারণ নিয়ম\n\n১. **ডেটা টাইপ**: ভ্যারিয়েবল হলো ডাটা রাখার পাত্র। C# এ ডাটাগুলো নির্দিষ্ট টাইপ মেনে চলে:\n- `int`: পূর্ণসংখ্যা (যেমন: ৫, -১০)।\n- `double`: দশমিক সংখ্যা (যেমন: ৩.১৪)।\n- `bool`: সত্য (True) বা মিথ্যা (False)।\n- `char`: একটি মাত্র অক্ষর (যেমন: 'A')।\n- `string`: একের বেশি অক্ষর বা বাক্য (যেমন: \"Hello\")।\n\n২. **ইনপুট ও আউটপুট**:\n- `Console.WriteLine()` লেখা প্রিন্ট করে পরের লাইনে চলে যায়, আর `Console.Write()` একই লাইনে থেমে থাকে।\n- `Console.ReadLine()` সবসময় ইউজারের ইনপুটকে `string` টেক্সট হিসেবে নেয়।\n\n৩. **টাইপ কাস্টিং**: যেহেতু ইনপুট টেক্সট হিসেবে আসে, তাই গাণিতিক কাজের জন্য একে নাম্বারে বদলাতে হয়। একেই কাস্টিং বলে। `Convert.ToInt32()` দিয়ে স্ট্রিংকে খুব সহজেই পূর্ণসংখ্যায় বদলানো যায়।"
  },
  "questions": [
    {
      "id": 1,
      "question": "1. Print your details (Name, Age, University)",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Name: Nishan\");\n        Console.WriteLine(\"Age: 21\");\n        Console.WriteLine(\"University: American International University-Bangladesh (AIUB)\");\n    }\n}",
      "output": "Name: Nishan\nAge: 21\nUniversity: American International University-Bangladesh (AIUB)",
      "explanation_en": "### Code Breakdown:\n- `class Program`: Every C# code needs to be inside a class container.\n- `static void Main()`: This is the starting engine of your app. C# looks for this explicitly to begin executing.\n- `Console.WriteLine()`: This is the primary syntax to push output to the screen.\n\n**Core Logic**: Since we are printing hardcoded strings, we wrap the text purely in double-quotes `\"\"`. Using `WriteLine` automatically jumps to a new line after printing, which is why the output stacks neatly vertically instead of joining deeply.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `class Program`: C# এর সম্পূর্ণ কোডটি обов্যই একটি ক্লাসের ভেতরে থাকতে হয়। এটি একটি বক্সের মতো কাজ করে।\n- `static void Main()`: এটি হলো যেকোনো C# প্রোগ্রামের মূল ইঞ্জিন। যখনই প্রোগ্রাম রান হয়, সে সর্বপ্রথম `Main()` কে খোঁজে এবং ভেতর থেকে কোড পড়া শুরু করে।\n- `Console.WriteLine()`: এই ফাংশনটির কাজ হলো স্ক্রিনে লেখা প্রিন্ট করা এবং তার ঠিক পরেই লাইন ব্রেক বা এন্টার দিয়ে পরের লাইনে চলে যাওয়া।\n\n**লজিক**: আমরা যেহেতু ফিক্সড বা নির্দিষ্ট কিছু লেখা দেখাচ্ছি, তাই লেখাগুলোকে ডাবল কোটেশন `\"\"` এর মাঝে রেখেছি।"
    },
    {
      "id": 2,
      "question": "2. Sum, Difference, Product, Quotient",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int a = 20, b = 5;\n        Console.WriteLine($\"Sum: {a + b}\");\n        Console.WriteLine($\"Difference: {a - b}\");\n        Console.WriteLine($\"Product: {a * b}\");\n        Console.WriteLine($\"Quotient: {a / b}\");\n    }\n}",
      "output": "Sum: 25\nDifference: 15\nProduct: 100\nQuotient: 4",
      "explanation_en": "### Code Breakdown:\n- `int a = 20, b = 5;`: We dynamically lock the core integer data inside local memory blocks `a` and `b`.\n- `$` **String Interpolation**: Placing a dollar sign directly before the completely double-quoted string enables writing raw variable equations seamlessly inside `{}` curly braces!\n\n**Core Logic**: Instead of explicitly taking up lines and creating `int sum = a + b`, we simply let the compiler calculate the equation directly inside the `{a + b}` brackets immediately before displaying it, resulting in a tremendously clean architecture.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `int a = 20, b = 5;`: দুটি ইনটিজার ভ্যারিয়েবলে মান স্টোর করা হয়েছে। `int` মানে হলো এটি কোনো দশমিক নিতে পারবে না।\n- `$` **স্ট্রিং ইন্টারপোলেশন**: কোটেশনের আগে একটি ডলার `$` সাইন দিলে আমরা সরাসরি কোটেশনের মাঝেই সেকেন্ড ব্র্যাকেট `{}` দিয়ে ভ্যারিয়েবলের নাম বা অংক লিখতে পারি!\n\n**লজিক**: আলাদা করে কোনো `sum` বা `sub` ভ্যারিয়েবল না বানিয়ে ব্র্যাকেটের ভেতরেই `{a + b}` বা `{a * b}` লিখে দেওয়ায় কোড একদম ছোট ও ফাস্ট হয়ে গেছে।"
    },
    {
      "id": 3,
      "question": "3. Remainder of two numbers",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int num1 = 17, num2 = 5;\n        int remainder = num1 % num2;\n        Console.WriteLine($\"Remainder is: {remainder}\");\n    }\n}",
      "output": "Remainder is: 2",
      "explanation_en": "### Code Breakdown:\n- `%` **Modulo Operator**: This unique operator flawlessly executes classical math division, but uniquely throws away the quotient logic and natively forces out ONLY the exact mathematical remainder!\n\n**Mathematical Execution**: \nWhen C# deeply divides `17` by `5`, it mathematically fits exactly 3 whole times `(15)`. Then C# beautifully grabs the leftover trailing value `(17 - 15 = 2)` and safely stores that into the `int remainder` box.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `%` **মডুলো বা ভাগশেষ অপারেটর**: এই অপারেটরটির কাজ হলো ম্যাথমেটিক্যাল ভাগ করার পর যে ভগ্নাংশ বা অবশিষ্টাংশ নিচে পড়ে থাকে, শুধু সেটিকে বের করে আনা।\n\n**গণিতের লজিক**: \nযখন আপনি ১৭ কে ৫ দিয়ে ভাগ করবেন, তখন ৩ বার ভাগ করা যায় (৩ পাঁচা ১৫)। আর অবশিষ্ট হিসেবে ২ বাকি থাকে। `%` অপারেটরটি ওই ভাগফল ৩ কে ইগনোর করে অবশিষ্টাংশ ২ কে সরাসরি রিসিভ করে `remainder` ভ্যারিয়েবলে রেখে দেয়।"
    },
    {
      "id": 4,
      "question": "4. Average of three numbers",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int x = 10, y = 15, z = 20;\n        double average = (x + y + z) / 3.0;\n        Console.WriteLine($\"Average is: {average}\");\n    }\n}",
      "output": "Average is: 15",
      "explanation_en": "### Code Breakdown:\n- `double average`: We deeply store the resulting average exclusively in a `double` datatype dynamically, because fundamentally dividing numbers routinely introduces complex decimal sequences.\n- `/ 3.0`: We intentionally used exactly `3.0` instead of integer `3`!\n\n**Critical Rule**: If we simply utilized `(x + y + z) / 3`, C# will structurally force an **Integer Division**, maliciously cutting away trailing decimals before the equation completes! Explicitly dividing utilizing `3.0` rigidly forces the processor to gracefully return an uncorrupted floating-point result representing the true arithmetic average.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `double average`: এভারেজ বা গড়ের মান যেকোনো সময় দশমিক হতে পারে, তাই আমরা এটিকে `int` এ না রেখে `double` ডেটা টাইপে রেখেছি।\n- `/ 3.0`: আমরা ৩ দিয়ে ভাগ না করে `3.0` দিয়ে ভাগ করেছি। এটি খুবই গুরুত্বপূর্ণ একটি ট্রিক!\n\n**লজিক**: C# এর একটা নিয়ম আছে, দুটি পূর্ণসংখ্যা (`int`) ভাগ করলে ভাগফলও পূর্ণসংখ্যাই হবে, অর্থাৎ দশমিকের পরের অংশটা অটোমেটিক কেটে যাবে! তাই `3.0` লিখে আমরা কম্পাইলারকে বাধ্য করেছি যেন সে দশমিক হিসাবটাও আউটপুটে নিয়ে আসে।"
    },
    {
      "id": 5,
      "question": "5. Read properties and print",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        /* NOTE: Console.ReadLine() waits for input. \n         We simulate inputs natively. */\n        string name = \"Rahim\"; \n        int age = 22;\n        double cgpa = 3.85;\n        \n        Console.WriteLine($\"Student Info: {name}, {age} years old, CGPA {cgpa}\");\n    }\n}",
      "output": "Student Info: Rahim, 22 years old, CGPA 3.85",
      "explanation_en": "### Code Breakdown:\n- **Comments `/* */`**: This serves strictly as human documentation natively skipped globally by the compiler. It gracefully signals our manual simulator methodology.\n- `string, int, double`: Three distinct variables mathematically demanding distinct memory footprints gracefully initialized sequentially natively.\n\n**Core Logic**: In an interactive setup, we absolutely would rigidly deploy `Console.ReadLine()` exactly 3 times mapping directly into variables. We simulated raw values here cleanly demonstrating cross-type raw data integrations directly inside strings recursively.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- **মাল্টি-লাইন কমেন্ট `/* */`**: এর ভেতরের লেখাগুলো মানুষের পড়ার জন্য, C# কম্পাইলার এই লেখাগুলো ১০০% ইগনোর করবে।\n- তিনটি সম্পূর্ণ ভিন্ন টাইপের ডাটা `string`, `int`, `double` পরপর অ্যাসাইন করা হয়েছে।\n\n**লজিক**: রিয়েল লাইফ সফটওয়ারে আমরা ইউজারের কাছ থেকে `Console.ReadLine()` দিয়ে এই ডাটাগুলো নিতাম। কিন্তু এখানে বেসিক বোঝানোর জন্য ডাটা ম্যানুয়ালি বসিয়ে দেখানো হয়েছে যে কীভাবে ভিন্ন ভিন্ন টাইপের ডাটা একসাথে একটি লাইনে প্রিন্ট করা যায়।"
    },
    {
      "id": 6,
      "question": "6. Convert float to string",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        float pi = 3.14f;\n        string strPi = pi.ToString();\n\n        Console.WriteLine(\"String value: \" + strPi);\n    }\n}",
      "output": "String value: 3.14",
      "explanation_en": "### Code Breakdown:\n- `3.14f`: Floating point variables absolutely require definitively appending precisely `f`. Without it natively, C# securely flags floating numbers strictly as `double` memory constraints.\n- `.ToString()`: The most powerful serialization method organically attached uniquely into all standard C# variables universally natively.\n\n**Conversion Logic**: We explicitly translate highly structured numerical binary memories entirely into textual symbols natively enabling raw string concat logic seamlessly utilizing `+` sequences.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `3.14f`: C# এ যখনই `float` বা ছোট দশমিক ভ্যালু ডিক্লেয়ার করা হয়, তার শেষে অবশ্যই একটি `f` দিতে হয়। નতুবা C# একে অনেক বিশাল `double` টাইপের মান ভেবে মেমোরি নষ্ট করে।\n- `.ToString()`: এটি সি শার্পের অন্যতম জাদুকরী মেথড। যেকোনো ধরণের নাম্বার, বুলিয়ান বা ডাটাকে সরাসরি টেক্সট বা স্ট্রিং বানানোর জন্য ডাটার শেষে এই মেথডটি কল করতে হয়!\n\n**লজিক**: `pi` মূলত একটি গাণিতিক ভ্যারিয়েবল ছিল। কিন্তু `.ToString()` এর কারণে সেটি এখন আক্ষরিক অর্থে \"3.14\" টেক্সটে পরিণত হয়েছে।"
    },
    {
      "id": 7,
      "question": "7. Calculate string length",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string phrase = \"Hello World!\";\n        int len = phrase.Length;\n        Console.WriteLine($\"Length of string is: {len}\");\n    }\n}",
      "output": "Length of string is: 12",
      "explanation_en": "### Code Breakdown:\n- `phrase.Length`: An embedded structural property physically attached specifically exclusively to strings securely executing character count.\n\n**Core Logic**: A `string` fundamentally masks a localized `char[]` sequence invisibly. Property `.Length` strictly counts elements incrementally identically mimicking an array mathematically confirming precisely `12` including explicit empty spaces globally.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `.Length`: এটি স্ট্রিং এর নিজস্ব একটি প্রপার্টি বা বৈশিষ্ট্য। এর কাজ হলো একটি লাইনে কয়টি অক্ষর আছে তা গুনে বের করা।\n\n**লজিক**: স্ট্রিং মূলত অসংখ্য ক্যারেক্টারের একটি মালা। `.Length` ব্যবহার করলে সেটি মাঝখানের স্পেস এবং দাড়ি/কমাগুলোকেও অক্ষর হিসেবে সমানভাবে গোনায় ধরে! তাই `Hello` এর ৫টি, মাঝের স্পেস ১টি, `World` এর ৫টি এবং `!` চিহ্ন ১টি সহ মোট ১২টি ক্যারেক্টার রিটার্ন করেছে।"
    },
    {
      "id": 8,
      "question": "8. Volume of cylinder",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        double r = 5.0, h = 10.0;\n        double volume = Math.PI * Math.Pow(r, 2) * h;\n        Console.WriteLine($\"Volume: {volume:F2}\");\n    }\n}",
      "output": "Volume: 785.40",
      "explanation_en": "### Code Breakdown:\n- `Math.PI`: An internal absolute geometric constant uniquely pre-supplied mapping seamlessly mathematically exactly onto `3.14159...`.\n- `Math.Pow(r, 2)`: The structural formula calculating absolute Powers intrinsically cleanly squaring `r` universally.\n- `volume:F2`: Advanced string modifier definitively instructing the compiler to securely enforce rounding globally onto fixed `2` decimal floating structures.\n\n**Execution Pattern**: Computes flawlessly evaluating geometric sequences recursively `π * r² * h` resolving into formatted standard coordinates natively.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `Math.PI`: পাই এর মান (৩.১৪১৬...) সি শার্পে আগে থেকেই এই ভ্যারিয়েবলে স্টোর করা থাকে, তাই আমাদের ম্যানুয়ালি লেখার দরকার নেই।\n- `Math.Pow`: কোনো কিছুর রুট বা স্কয়ার করার গাণিতিক ফাংশন। এখানে `r` কে ২ বার গুণ (স্কয়ার) করা হয়েছে।\n- `{volume:F2}`: গাণিতিক ক্যালকুলেশনের পর দশমিকের পর অনেকগুলো সংখ্যা আসতে পারে। `F2` এর মানে হলো \"যাই আসুক, শুধুমাত্র দশমিকের পরের ২ ঘর (Fixed 2 decimals) প্রিন্ট করবে।\""
    },
    {
      "id": 9,
      "question": "9. Calculate area of rectangle",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int width = 8, height = 4;\n        int area = width * height;\n        Console.WriteLine($\"Area of rectangle: {area}\");\n    }\n}",
      "output": "Area of rectangle: 32",
      "explanation_en": "### Code Breakdown:\n- Simple arithmetic multiplication effectively bypassing math libraries using basic raw operators globally. Area evaluates precisely by resolving fundamental `w * h` logic intuitively capturing memory natively.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- আয়তক্ষেত্রের ক্ষেত্রফল বের করার সূত্র হলো: দৈর্ঘ্য গুণ প্রস্থ। এখানে `width` এবং `height` গুণ করে গাণিতিক মানটি `area` নামের ভিন্ন একটি ভ্যারিয়েবলে স্টোর করে তারপর প্রিন্ট করা হয়েছে।"
    },
    {
      "id": 10,
      "question": "10. Area of a circle",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        double radius = 7.5;\n        double area = Math.PI * radius * radius;\n        Console.WriteLine($\"Circle area: {area:F2}\");\n    }\n}",
      "output": "Circle area: 176.71",
      "explanation_en": "### Code Breakdown:\n- Mathematical equation natively computing `πr²`. Notice the avoidance of `.Pow` explicitly mathematically simulating it recursively by explicitly chaining `radius * radius` conserving internal processing cycles logically.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- বৃত্তের ক্ষেত্রফলের সূত্র `πr²`। এখানে `Math.Pow` ব্যবহার না করে আমরা সরাসরি `radius * radius` লিখেছি। এটি ছোট ক্যালকুলেশনের জন্য মেশিনকে কম পেইন দেয় এবং অনেক ফাস্ট কোড রান করায়। শেষে `F2` দিয়ে দশমিকের পর ঘর সংখ্যা কাস্টমাইজড করা হয়েছে।"
    },
    {
      "id": 11,
      "question": "11. Simple Interest (I = PRT)",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        double p = 1000, r = 0.05, t = 3;\n        double interest = p * r * t;\n        Console.WriteLine($\"Interest earned: ${interest}\");\n    }\n}",
      "output": "Interest earned: $150",
      "explanation_en": "### Code Breakdown:\n- Mathematical financial translations mapping structurally correctly mapping raw Principal rate explicitly simulating native banking structures.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- ব্যাংকের সরল সুদ বের করার চিরচেনা সূত্র `I = P × R × T`। এখানে `p` হলো মূলধন (১০০০), `r` হলো সুদের হার (৫% মানে ০.০৫) এবং `t` হলো বছর। এগুলো সোজাসাপ্টা গুণ করলেই সুদ বের হয়ে আসে।"
    },
    {
      "id": 12,
      "question": "12. Swap two numbers without third variable",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int a = 10, b = 25;\n        a = a + b;\n        b = a - b;\n        a = a - b;\n        Console.WriteLine($\"Swapped: a={a}, b={b}\");\n    }\n}",
      "output": "Swapped: a=25, b=10",
      "explanation_en": "### Code Breakdown:\n**The Magical Tricking Logic**:\nIt fundamentally sidesteps employing external temporary containers. \n- Step 1: Accumulate both inside the first variable `a = 35`.\n- Step 2: Because `a` uniquely captures the identical combination, subtracting natively existing `b(25)` explicitly maps accurately resolving exclusively original `10` directly inside `b`!\n- Step 3: Now `b` definitively equals original `a`. Bounding original combo `(35) - 10` flawlessly pushes original `b` dynamically back into `a`.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n**ম্যাজিকাল সোয়াপ লজিক**:\nসাধারণত দুই বোতলের পানি অদলবদল করতে ৩য় একটি খালি বোতল (Temp ভ্যারিয়েবল) লাগে। কিন্তু এখানে পিওর ম্যাথ দিয়ে সোয়াপিং বা অদলবদল করা হয়েছে!\n- স্টেপ ১: দুটি মান একসাথে যোগ করে `a` এর পেটে পাঠানো হয়েছে (`a` = ৩৫)।\n- স্টেপ ২: যেহেতু `a` এর কাছে এখন ৩৫ আছে, তার থেকে `b` এর ২৫ বিয়োগ দিলেই ১০ পাওয়া যায়! সেটি `b` এর কাছে পাঠানো হলো। (তাহলে `b` এখন তার জায়গায় ১০ নিয়ে গেলো)।\n- স্টেপ ৩: সবশেষে `a` এর ৩৫ থেকে ওই নতুন ১০ বাদ দিলে ২৫ পাওয়া যায়! সেটি `a` এর পেটে পাঠানো হলো। ডাটা ম্যানিপুলেশন সাকসেসফুল!"
    }
  ]
};

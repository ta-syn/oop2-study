export const section2 = {
  "id": "sec-2",
  "title": "2. Conditionals, Math & Strings",
  "basics": {
    "en": "### Logic, Math & String Manipulations\n\n1. **Core Conditional Logic**:\n- `if (condition)` blocks execute strictly if the boolean passes as `true`.\n- Logical Operators combine rules: `&&` (AND - all must be true), `||` (OR - only one must be true), `!` (NOT - reverses the true/false).\n\n2. **The `Math` Class**: C# gives you built-in mathematical powers.\n- `Math.Pow(base, exponent)` calculates powers quickly.\n- `Math.Sqrt(number)` extracts the precise square root.\n- `Math.Abs(number)` converts any negative figure into absolute positive.\n\n3. **String Functionalities**:\n- Strings are basically hidden arrays of characters.\n- `.Length` counts total letters + spaces.\n- `.ToUpper()` / `.ToLower()` swaps casings instantly.\n- `.Contains(\"word\")` checks existence natively.",
    "bn": "### লজিক, ম্যাথ এবং স্ট্রিং ম্যানিপুলেশন\n\n১. **লজিক বা শর্ত**:\n- `if` শর্ত সত্য হলেই কেবল ভেতরের কোড রান করবে।\n- লজিক্যাল অপারেটর ব্যবহার করে একাধিক শর্ত যুক্ত করা যায়: `&&` (AND - সবগুলো শর্ত সত্যি হতে হবে), `||` (OR - যেকোনো একটি সত্যি হলেই হবে), এবং `!` (NOT - যা আছে তার উল্টো)।\n\n২. **ম্যাথ ক্লাস (`Math`)**: C# আপনাকে ডিফল্ট কিছু গাণিতিক মেথড দেয়।\n- `Math.Pow`: পাওয়ার বা সূচকের জন্য।\n- `Math.Sqrt`: রুট বা বর্গমূল বের করার জন্য।\n- `Math.Abs`: নেগেটিভ মানকে পজেটিভ বা পরম মানে পরিণত করে।\n\n৩. **স্ট্রিং (`String`)**:\n- যেকোনো স্ট্রিং এর শেষে `.Length` দিলে সেটির আকার বা ক্যারেক্টার সংখ্যা বের হয়ে আসে।\n- `.ToUpper()` এবং `.ToLower()` মেথডগুলো দিয়ে অনায়াসেই সব অক্ষর বড় হাতের বা ছোট হাতের করা যায়।"
  },
  "questions": [
    {
      "id": 13,
      "question": "13. Check whether a number is even or odd.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        Console.Write(\"Enter a number: \");\n        int number = 12; // Simulated Input\n        \n        if (number % 2 == 0) {\n            Console.WriteLine($\"{number} is Even\");\n        } else {\n            Console.WriteLine($\"{number} is Odd\");\n        }\n    }\n}",
      "output": "Enter a number: \n12 is Even",
      "explanation_en": "### Code Breakdown:\n- `%` **Modulo Operator**: We utilize this operator to find the geometric remainder. \n- `number % 2 == 0`: This is the universal mathematical logic for recognizing Even numbers. Divide any number by 2; if the remaining trailing fraction is absolutely `0`, it logically HAS to be an even iteration.\n\n**Execution Pattern**: Inside the `if` block, the condition inherently evaluates into a Boolean `true` or `false`. If it passes accurately, we jump precisely inside the first curly braces. Otherwise, C# completely skips that and natively defaults executing the `else` block.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `%` **মডুলো বা ভাগশেষ অপারেটর**: যেকোনো সংখ্যা জোড় নাকি বিজোড় চেক করার ইউনিভার্সাল নিয়ম হলো সেটিকে ২ দিয়ে ভাগ করা।\n- `number % 2 == 0`: যদি সংখ্যাটিকে ২ দিয়ে ভাগ করার পর ভাগশেষ একদম `0` হয়, তার মানেই হলো সংখ্যাটি নিখুঁতভাবে ২ দ্বারা বিভাজ্য বা ইভেন (জোড়) সংখ্যা।\n\n**লজিক ফ্লো**: `if` এর ভেতরের শর্ত যদি `true` বা সত্য হয়, তাহলে প্রথম বক্সের কোডটুকু প্রিন্ট হবে। আর যদি মিথ্যা হয়, তবে সে প্রথম ব্লকটি পুরোপুরি স্কিপ বা এড়িয়ে চলে যাবে এবং ডিফল্টভাবে `else` এর ভেতরে ঢুকে যাবে।"
    },
    {
      "id": 14,
      "question": "14. Find the largest of two numbers.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int num1 = 45, num2 = 89;\n        \n        if (num1 > num2) {\n            Console.WriteLine($\"{num1} is larger.\");\n        } else if (num2 > num1) {\n            Console.WriteLine($\"{num2} is larger.\");\n        } else {\n            Console.WriteLine(\"Both numbers are equal.\");\n        }\n    }\n}",
      "output": "89 is larger.",
      "explanation_en": "### Code Breakdown:\n- `>` **Greater-Than Operator**: Standard algebraic symbol checking explicitly if the left numeric sequence severely overpowers the right structural sequence.\n- `else if`: Crucial chained logic routing system. Instead of explicitly executing multiple isolated `if` blocks, coupling them inherently connects their flow gracefully.\n\n**Execution Pattern**: The compiler queries \"Is `num1` larger?\" (False). It systematically falls downward checking \"Okay, is `num2` larger?\" (True). Since it hits True, it absolutely skips checking the final `else` entirely saving massive RAM cycle timings.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `>` **গ্রেটার-দ্যান অপারেটর**: এটি দিয়ে বামদিকের সংখ্যাটি ডানদিকের চেয়ে বড় কি না তা মাপা হয়।\n- `else if`: যখন আমাদের কাছে ৩টি বা তার বেশি অপশন থাকে, তখন আমরা `if` এর চেইন বা শিকল তৈরি করি।\n\n**লজিক ফ্লো**: কম্পাইলার প্রথমে চেক করে `num1` কি বড়? উত্তর 'না' হওয়ায় সে দ্বিতীয় চেইনে এসে চেক করে `num2` কি বড়? উত্তর 'হ্যাঁ' হওয়ায় সে সাথে সাথেই প্রিন্ট করে দেয় এবং সর্বশেষে থাকা `else` কে গাণিতিকভাবে পুরোপুরি ইগনোর করে ফেলে।"
    },
    {
      "id": 15,
      "question": "15. Find the largest of three numbers.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int a = 15, b = 45, c = 20;\n        \n        if (a >= b && a >= c) {\n            Console.WriteLine($\"{a} is largest.\");\n        }\n        else if (b >= a && b >= c) {\n            Console.WriteLine($\"{b} is largest.\");\n        }\n        else {\n            Console.WriteLine($\"{c} is largest.\");\n        }\n    }\n}",
      "output": "45 is largest.",
      "explanation_en": "### Code Breakdown:\n- `&&` **Logical AND**: We explicitly couple fundamentally independent comparison operators natively into one unified boolean evaluation. `&&` strictly guarantees that BOTH the left logic AND the right logic must comprehensively evaluate correctly natively to allow access inside the curly bracket.\n\n**Strategic Flow**: To prove `a` is fundamentally the undisputed largest, `a` intuitively HAS to beat `b` concurrently AND beat `c` accurately. That's why `a >= b && a >= c` creates the infallible barrier.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `&&` **লজিক্যাল AND**: এটি মূলত দুটি শর্তকে আঠার মতো জুড়ে দেয়। `&&` মানে হলো এর বামদিকের এবং ডানদিকের— উভয় শর্তকেই ১০০% সত্য হতে হবে, নতুবা এটি ভেতরে ঢুকতে দেবে না।\n\n**লজিক ফ্লো**: `a` কে যদি সবথেকে বড় দাবি করতে হয়, তবে লজিক্যালি `a` কে অবশ্যই `b` এর চেয়েও বড় হতে হবে এবং একইসাথে `c` এর চেয়েও বড় হতে হবে! ঠিক এই কথাটিই `a >= b && a >= c` লাইনের মাধ্যমে কোডকে বুঝিয়ে বলা হয়েছে।"
    },
    {
      "id": 16,
      "question": "16. Calculate power of a number using Math.Pow().",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        double baseNum = 5;\n        double exponent = 3;\n        \n        double result = Math.Pow(baseNum, exponent);\n        Console.WriteLine($\"{baseNum} raised to {exponent} is {result}\");\n    }\n}",
      "output": "5 raised to 3 is 125",
      "explanation_en": "### Code Breakdown:\n- `Math.Pow()`: C# packages complex algorithmic calculations definitively inside its globally accessible `Math` library precisely saving developers thousands of lines natively.\n- Parameters `(baseNum, exponent)`: It logically takes two strict `double` data pieces dynamically formatting structural `5³ = 5 * 5 * 5` executing recursively returning purely `125` mathematically.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `Math.Pow()`: C# এর গাণিতিক লাইব্রেরিতে থাকা এটি একটি জাদুকরী মেথড। পাওয়ার বা সূচক (যেমন: ৫ এর উপর পাওয়ার ৩) এর কাজ ম্যানুয়ালি অনেকবার গুণ করে করার বদলে, এই মেথড এক লাইনেই করে দেয়।\n- এটি সর্বদা প্রথম ব্র্যাকেটে ২টি মান নেয়। প্রথমটি হলো বেস (base) বা মূল সংখ্যা এবং পরেরটি হলো সেটির পাওয়ার। এটি সবসময় `double` ডেটা রিটার্ন করে, তাই আমাদের `result` ভ্যারিয়েবলটি `double` দিয়ে ডিক্লেয়ার করা।"
    },
    {
      "id": 17,
      "question": "17. Find square root using Math.Sqrt().",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        double num = 144;\n        double result = Math.Sqrt(num);\n        \n        Console.WriteLine($\"Square root of {num} is {result}\");\n    }\n}",
      "output": "Square root of 144 is 12",
      "explanation_en": "### Code Breakdown:\n- `Math.Sqrt()`: Another core computational sequence fundamentally natively attached strictly to the standard arithmetic `Math` repository class.\n- It mathematically isolates specifically evaluating precisely the exact factor structurally equating natively to the root sequence computationally parsing `144` mathematically returning definitively `12.0` safely.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `Math.Sqrt()`: রুট বা বর্গমূল বের করার জন্য C# এর বিল্ট-ইন ফাংশন হলো এটি।\n- `Math` ক্লাসের ভেতরে অসংখ্য রেডিমেড ইকুয়েশন লেখা আছে, তাই আমাদের এত বড় অংক নিজে করার বদলে জাস্ট `Math.Sqrt(144)` কল করলেই সে অ্যানালিসিস করে নিখুঁত `১২` আউটপুট বের করে নিয়ে আসে।"
    },
    {
      "id": 18,
      "question": "18. Generate a random number between 1 and 100.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        Random rnd = new Random();\n        int randomNum = rnd.Next(1, 101);\n        \n        Console.WriteLine($\"Generated Random Number: {randomNum}\");\n    }\n}",
      "output": "Generated Random Number: 42",
      "explanation_en": "### Code Breakdown:\n- `Random rnd = new Random()`: Unlike static `Math` properties, generating randomization fundamentally requires deploying an exact interactive Object globally instantiated dynamically.\n- `.Next(1, 101)`: We explicitly invoke the method passing boundaries natively mathematically. Crucially, C# limits mathematically are EXCLUSIVE on the uppermost bound! To guarantee grabbing essentially `100`, we MUST force `101` strictly mapping dynamically scaling random numbers comprehensively.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `new Random()`: Math ফাংশনের মতো Random ক্লাসটি ডিরেক্ট কল করা যায় না। এটিকে আগে অবজেক্ট বানিয়ে `rnd` এর ভেতরে নিতে হয় (যাকে বলে Instantiation)।\n- `rnd.Next(1, 101)`: এই মেথডটি যেকোনো এলোমেলো সংখ্যা জেনারেট করে। একটি গোপন নিয়ম হলো— শেষের লিমিটটি সবসময় ১ বেশি দিতে হয়! আপনি যদি ১০০ নম্বরটি পেতে চান, তবে আপনাকে লিমিট হিসেবে ১০১ সেট করতে হবে, কারণ C# শেষের সংখ্যাটাকে কাউন্টে ধরে না!"
    },
    {
      "id": 19,
      "question": "19. Check if a number is divisible by 5 and 11.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int num = 55;\n        \n        if ((num % 5 == 0) && (num % 11 == 0)) {\n            Console.WriteLine($\"{num} is divisible by 5 and 11\");\n        } else {\n            Console.WriteLine($\"{num} is not divisible by both\");\n        }\n    }\n}",
      "output": "55 is divisible by 5 and 11",
      "explanation_en": "### Code Breakdown:\n- Combining structural conditionals powerfully requires explicit `()` bracket architectures perfectly containing their individual sequence dynamically preventing logical bleeding natively. We explicitly evaluate `(num % 5)` dynamically securing its boolean state independently checking against the right block reliably executing dynamically exactly checking comprehensive divisibility.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- একটি মাত্র `if` লাইনের ভেতরে আমরা দুইটি জটিল ভাগশেষ চেক জুড়ে দিয়েছি লজিক্যাল `&&` (AND) এর মাধ্যমে।\n- ৫ দিয়ে বিভাজ্য মানে তার মডুলো বা ভাগশেষ ০ হতে হবে। ব্র্যাকেটে সুন্দরভাবে ৫ এর শর্ত এবং ১১ এর শর্ত আলাদাভাবে চেক করা হয়েছে। যদি দুটিই জিরো আসে, তাহলেই সিস্টেম বুঝবে যে সংখ্যাটি ৫ ও ১১ দুইটা দিয়েই ভাগ করা যায়!"
    },
    {
      "id": 20,
      "question": "20. Compute quotient and remainder.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        int dividend = 25, divisor = 4;\n        \n        int quotient = dividend / divisor;\n        int remainder = dividend % divisor;\n        \n        Console.WriteLine($\"Quotient: {quotient}, Remainder: {remainder}\");\n    }\n}",
      "output": "Quotient: 6, Remainder: 1",
      "explanation_en": "### Code Breakdown:\n- `dividend / divisor`: Since we are executing specifically strictly utilizing native `int` datasets dynamically C# natively ignores all floating outputs structurally parsing ONLY the integer portion executing flawlessly mathematically `6`.\n- `dividend % divisor`: Grabs explicitly strictly what geometrically remained completely unmodified evaluating uniquely onto `1` securely outputting independently inherently solving math equations flawlessly.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `dividend / divisor`: C# এর নিয়ম অনুযায়ী দুটি পূর্ণসংখ্যা (`int`) ভাগ করলে ভাগফল সবসময় পূর্ণসংখ্যাই আসবে, দশমিক আসবে না! ৪ দিয়ে ২৫ কে ভাগ করলে ৬ বার যায় (৪ ছক ২৪), তাই ভাগফল হলো ৬।\n- `dividend % divisor`: এবং গাণিতিক নিয়ম অনুযায়ী ২৪ পর্যন্ত যাওয়ার পর যে ১ অপূর্ণ রয়ে গেলো, সেটিকেই অত্যন্ত নিখুঁতভাবে রিসিভ করলো এই `%` বা মডুলো অংশটি! তাই ভাগশেষ ১।"
    },
    {
      "id": 21,
      "question": "21. Read a string and print its length.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string text = \"Hello Developers!\";\n        Console.WriteLine($\"The length of the string is: {text.Length}\");\n    }\n}",
      "output": "The length of the string is: 17",
      "explanation_en": "### Code Breakdown:\n- **Strings deeply mask char arrays**: A `string` practically hides structural array traits natively enabling deeply analyzing sequences cleanly bypassing loops identically executing property bounds precisely counting uniquely all `whitespace` coordinates and symbols explicitly capturing fundamentally 17 exact logical indices statically.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- **স্ট্রিং লেংথ**: যেকোনো স্ট্রিং বা টেক্সটের একটি ডিফল্ট বৈশিষ্ট্য বা Property থাকে যার নাম `.Length`।\n- স্ট্রিং এর সাথে ওই প্রপার্টি কল করলে তা আমাদের নিখুঁতভাবে গুনে বলে দিতে পারে যে লাইনে কয়টি অক্ষর আছে। খেয়াল রাখবেন, এটি কিন্তু ভেতরের ফাঁকা স্পেস বা যতিচিহ্ন (!) গুলোকেও এক একটি ক্যারেক্টার বা অক্ষর হিসেবে সমানভাবেই গোনায় ধরে!"
    },
    {
      "id": 22,
      "question": "22. Convert string to uppercase and lowercase.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string text = \"Programming in C#\";\n        \n        Console.WriteLine($\"Uppercase: {text.ToUpper()}\");\n        Console.WriteLine($\"Lowercase: {text.ToLower()}\");\n    }\n}",
      "output": "Uppercase: PROGRAMMING IN C#\nLowercase: programming in c#",
      "explanation_en": "### Code Breakdown:\n- `.ToUpper()` / `.ToLower()`: Two beautifully baked structural native string methods globally converting comprehensive alphanumeric sequences statically reordering text encodings seamlessly avoiding creating complex mathematical looping converters natively securely outputting clean mappings flawlessly.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `.ToUpper()` এবং `.ToLower()`: প্রোগ্রামিংয়ের খুবই দরকারী দুটি মেথড! কোনো সেন্টেন্সের সব অক্ষর বড় হাতের করতে হলে ম্যানুয়ালি অনেক লুপ ব্যবহার করে কোড লেখার প্রয়োজন নেই, জাস্ট টেক্সটের সাথে `.ToUpper()` জুড়ে দিলে C# তার অ্যালফাবেট ম্যাপিং দিয়ে পুরো লাইনটাকে মুহুর্তেই ক্যাপিটাল লেটার করে দেয়।"
    },
    {
      "id": 23,
      "question": "23. Check if a string contains a specific word.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string sentence = \"Welcome to Object Oriented Programming\";\n        string word = \"Oriented\";\n        \n        if (sentence.Contains(word)) {\n            Console.WriteLine($\"The sentence contains '{word}'\");\n        } else {\n            Console.WriteLine($\"Word not found!\");\n        }\n    }\n}",
      "output": "The sentence contains 'Oriented'",
      "explanation_en": "### Code Breakdown:\n- `.Contains()`: A dynamically scalable search algorithm intrinsically attached recursively mapping substrings explicitly navigating string blocks dynamically solving structural checks seamlessly reliably evaluating instantly mapping directly dynamically onto boolean exactly representing comprehensive states natively.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `.Contains(\"শব্দ\")`: এটি C# এর স্ট্রিংগুলোতে আগে থেকেই যুক্ত থাকা দারুণ একটি মেথড। এটি খুব ফাস্ট একটি গ্লোবাল সার্চ অ্যালগোরিদম রান করে।\n- এর কাজ হলো বিশাল কোনো বাক্যের ভেতর থেকে একটি নির্দিষ্ট শব্দকে খুঁজে বের করা। যদি শব্দটি কোথাও লুকিয়ে থাকে, তবে সে `true` রিটার্ন করে, আর না থাকলে `false` রিটার্ন করে যা `if/else` এর সাথে চমৎকারভাবে কাজ করে।"
    },
    {
      "id": 24,
      "question": "24. Reverse a string.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string str = \"hello\";\n        string reversed = \"\";\n        \n        for (int i = str.Length - 1; i >= 0; i--) {\n            reversed += str[i];\n        }\n        \n        Console.WriteLine($\"Original: {str}, Reversed: {reversed}\");\n    }\n}",
      "output": "Original: hello, Reversed: olleh",
      "explanation_en": "### Code Breakdown:\n- `str.Length - 1`: Because indexing naturally intrinsically commences from `0` fundamentally counting definitively up to logically `4` directly mapping inherently executing length securely natively preventing out of bounds structurally natively safely reversing sequentially.\n- `reversed += str[i]`: Text manipulation naturally mapping iteratively attaching explicitly string blocks smoothly appending dynamically sequentially exactly mapping characters structurally backward.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- **রিভার্স বা উল্টানো লজিক**: যেকোনো স্ট্রিংকে উল্টানোর সবচেয়ে ভালো উপায় হলো লুপটাকে স্ট্রিংয়ের একেবারে শেষ থেকে উল্টোপথে চালানো।\n- `str.Length - 1`: चूंकि C# জিরো-ইনডেক্সে কাজ করে, তাই ৫ অক্ষরের `hello` এর লাস্ট অক্ষরটির পজিশন মূলত ৪! তাই আমরা লুপটিকে ৪ থেকে শুরু করে (Length-1) কমিয়ে কমিয়ে ০ পর্যন্ত নিয়ে এসেছি, এবং প্রতিবার অক্ষরটিকে একটি ফাঁকা টেক্সটের সাথে যুক্ত করেছি (`+=`)।"
    },
    {
      "id": 25,
      "question": "25. Compare two strings for equality.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string str1 = \"hello\";\n        string str2 = \"Hello\";\n        \n        if (str1.Equals(str2, StringComparison.OrdinalIgnoreCase)) {\n            Console.WriteLine(\"Strings are exactly equal (ignoring case).\");\n        } else {\n            Console.WriteLine(\"Strings are different.\");\n        }\n    }\n}",
      "output": "Strings are exactly equal (ignoring case).",
      "explanation_en": "### Code Breakdown:\n- `.Equals()`: Structurally fundamentally executing byte mapping rigorously exactly comparing string blocks globally recursively verifying structurally identical bytes inherently natively.\n- `StringComparison.OrdinalIgnoreCase`: It natively gracefully commands C# bypassing case encoding globally executing identically matching entirely solving dynamically bypassing upper/lower flaws securely natively accurately.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `.Equals()`: দুটি স্ট্রিং হুবহু এক কি না তা চেক করতে `==` চিহ্নের বদলে `.Equals()` মেথডটি ব্যবহার করা সবচেয়ে বেস্ট প্র্যাকটিস।\n- `StringComparison.OrdinalIgnoreCase`: অনেক সময় ইউজার পাসওয়ার্ড বা নাম ইনপুট দেওয়ার সময় ভুলে বড় হাতের/ছোট হাতের অক্ষর মিলিয়ে ফেলে (যেমন `hello` vs `Hello`)। এই চমৎকার প্যারামিটারটি ব্যবহার করলে কম্পাইলার বড় হাতের-ছোট হাতের ভেদাভেদ ভুলে গিয়ে ২টিকে সমান হিসেবে গণ্য করে!"
    },
    {
      "id": 26,
      "question": "26. Check if a string is palindrome.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string word = \"madam\";\n        string rev = \"\";\n        \n        for (int i = word.Length - 1; i >= 0; i--) rev += word[i];\n        \n        if (word == rev) {\n            Console.WriteLine($\"{word} is a Palindrome\");\n        } else {\n            Console.WriteLine($\"{word} is NOT a Palindrome\");\n        }\n    }\n}",
      "output": "madam is a Palindrome",
      "explanation_en": "### Code Breakdown:\n- **Palindrome Definition**: Structural geometric textual symmetry. Words dynamically mapping mapping exactly reversing structurally resolving flawlessly sequentially equivalently parsing natively solving inherently smoothly identically replicating completely forwards and naturally mapping correctly backwards dynamically naturally.\n- **Algorithm Sequence**: 1. Extrapolate backward seamlessly utilizing iteration. 2. Buffer dynamically onto generic collector securely. 3. Equality gate evaluate dynamically resolving properly identically scaling perfectly resolving reliably natively comparing intrinsically identically.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- **প্যালিনড্রোম (Palindrome)**: এটি এমন একটি শব্দ যা আপনি সোজা দিক থেকে পড়লে যা উচ্চারণ হবে, উল্টোদিক থেকে পড়লেও হুবহু একই উচ্চারণ হবে! যেমন: `madam` অথবা `level`।\n- **লজিক ফ্লো**: আমরা এর আগের প্রশ্নে স্ট্রিং উল্টানো শিখেছি। আমরা স্রেফ আগের লজিকটি কাজে লাগিয়ে স্ট্রিংটিকে উল্টে একটি রিভার্সড (`rev`) বক্সে রাখবো। তারপর `if` চেক করে দেখবো আসল `word` এবং আমাদের বানানো উল্টো `rev` শব্দ দুটি দেখতে হুবহু সমান কি না! সমান হলে সেটি પ্যালিনড্রোম!"
    },
    {
      "id": 27,
      "question": "27. Count vowels in a string.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string text = \"programming\";\n        int count = 0;\n        \n        foreach (char c in text.ToLower()) {\n            if (\"aeiou\".Contains(c)) {\n                count++;\n            }\n        }\n        Console.WriteLine($\"Number of vowels: {count}\");\n    }\n}",
      "output": "Number of vowels: 3",
      "explanation_en": "### Code Breakdown:\n- `foreach (char c)`: We elegantly explicitly map iterating string blocks individually naturally bypassing boundary evaluations structurally iterating completely securely parsing strings globally seamlessly natively iterating safely structurally correctly logically smoothly intrinsically automatically reliably natively tracking internally.\n- `\"aeiou\".Contains(c)`: Efficient algorithm structurally mapping comparing uniquely scaling mapping parsing efficiently evaluating accurately explicitly cleanly evaluating reliably without writing extensive native `if(x=='a' || x=='e'...)` logic dynamically effectively smoothly.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `foreach`: যেহেতু স্ট্রিং মূলত অসংখ্য ক্যারেক্টারের মালা, সেহেতু আমরা `foreach` লুপ চালিয়ে স্ট্রিংটি থেকে একটি একটি করে অক্ষর বের করে নিয়ে আসতে পারি `char c` এর ভেতর।\n- `\"aeiou\".Contains(c)`: এটি প্রো-লেভেলের লজিক! ম্যানুয়ালি বিশাল বড় `if(c == 'a' || c == 'e' ...)` লেখার বদলে, একটি ছোট স্ট্রিং `aeiou` এর কাছে `.Contains()` দিয়ে জিজ্ঞেস করা হয়েছে যে, স্ট্রিং থেকে বের হওয়া নতুন ক্যারেক্টারটি কি তোমার ভেতরে আছে? থাকলেই কাউন্টার `১` করে গুনা শুরু করেছে।"
    },
    {
      "id": 28,
      "question": "28. Replace all spaces with hyphens.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string before = \"OOP is awesome\";\n        string after = before.Replace(' ', '-');\n        Console.WriteLine($\"Result: {after}\");\n    }\n}",
      "output": "Result: OOP-is-awesome",
      "explanation_en": "### Code Breakdown:\n- `.Replace(oldChar, newChar)`: Fundamentally structurally executing natively mapping searching text blocks evaluating globally seamlessly cleanly resolving identical sequences parsing string patterns dynamically smoothly matching dynamically modifying natively parsing completely swapping specifically character nodes elegantly accurately replacing seamlessly natively naturally reliably seamlessly globally.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `.Replace(পুরোনো, নতুন)`: কোনো বিশাল সেন্টেন্স থেকে একটা বিশেষ অক্ষর, চিহ্ন বা শব্দকে সরিয়ে অন্য আরেকটি শব্দ বসানোর জন্য এই জাদুকরী ফাংশনটি ব্যবহার করা হয়।\n- এখানে প্রথম প্যারামিটার হিসেবে আমরা একটি ফাঁকা স্পেস `' '` দিয়েছি এবং গ্লোবালি সব স্পেসকে সরিয়ে সেখানে নতুন হাইফেন `'-'` বসাতে বলেছি। এটি এক নিমিষেই কোডের সব স্পেস ক্লিন করে হাইফেন বসিয়ে দেয়!"
    },
    {
      "id": 29,
      "question": "29. Extract first 5 characters of a string.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string full = \"Information Technology\";\n        string partial = full.Substring(0, 5);\n        Console.WriteLine($\"Extracted: {partial}\");\n    }\n}",
      "output": "Extracted: Infor",
      "explanation_en": "### Code Breakdown:\n- `.Substring(startIndex, length)`: Strongly structured string-slicing method precisely globally slicing text mathematically seamlessly executing natively smoothly traversing strings extracting uniquely exactly reliably mapping indexing safely inherently seamlessly dynamically scaling cleanly extracting natively correctly securely logically extracting smoothly natively.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `.Substring(শুরুর_পজিশন, কয়টি_অক্ষর_নেব)`: কোনো বড় টেক্সট থেকে নির্দিষ্ট অংশ বা স্লাইস কেটে আলদা করার জন্য এই সাব-স্ট্রিং ফাংশনটি কাজ করে।\n- আমরা `0` নং ইনডেক্স বা একদম শুরু থেকে গুণতে বলেছি এবং সেখান থেকে সামনের দিকে ঠিক `5` টি অক্ষর কেটে সাবধানে আলাদা করার কমান্ড দিয়েছি। তাই এটি \"Infor\" পর্যন্ত কেটে বের করে নিয়ে এসেছে।"
    },
    {
      "id": 30,
      "question": "30. Concatenate first and last name.",
      "solve": "using System;\n\nclass Program {\n    static void Main() {\n        string first = \"Nishan\";\n        string last = \"Doe\";\n        string full = string.Concat(first, \" \", last);\n        Console.WriteLine($\"Full Name: {full}\");\n    }\n}",
      "output": "Full Name: Nishan Doe",
      "explanation_en": "### Code Breakdown:\n- `string.Concat()`: Structurally executing appending strings elegantly perfectly joining text logically cleanly merging mapping implicitly cleanly linking dynamically sequentially resolving accurately intrinsically combining efficiently securely globally concatenating inherently effectively linking optimally efficiently smoothly matching exactly logically naturally.",
      "explanation_bn": "### কোড ব্রেকডাউন:\n- `string.Concat()`: কনক্যাটেনেশন বা যুক্ত করা। সাধারণত আমরা `+` চিহ্ন দিয়ে দুটি টেক্সট বা শব্দকে জোড়া লাগাই। কিন্তু প্রফেশনাল লেভেলে স্পিড এবং মেমোরির কথা চিন্তা করে সরাসরি `stirng.Concat()` মেথড ব্যবহার করা হয়। এটি যেকোনো সংখ্যক স্ট্রিং বা শব্দকে অত্যন্ত নিখুঁতভাবে এবং দ্রুত পাশাপাশি বসিয়ে মালার মতো বিশাল একটি বাক্য বানিয়ে দিতে পারে।"
    }
  ]
};

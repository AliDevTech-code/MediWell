/* ============================================================
   MediWell — Content & Icons
   All article content is stored here so pages stay lightweight.
   ============================================================ */

const ICONS = {
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  apple: '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>',
  dumbbell: '<path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/>',
  brain: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
  salad: '<path d="M7 21h10"/><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"/><path d="m13 12 4-4"/><path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"/>',
  footprints: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
  pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  pin: '<path d="M20 10c0 4.99-5.54 10.19-7.4 11.79a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>'
};

const CATEGORIES = [
  { name: 'Nutrition', icon: 'apple', color: '#16a34a', tint: '#dcfce7' },
  { name: 'Fitness', icon: 'dumbbell', color: '#2563eb', tint: '#dbeafe' },
  { name: 'Mental Health', icon: 'brain', color: '#7c3aed', tint: '#ede9fe' },
  { name: 'Heart Health', icon: 'heart', color: '#e11d48', tint: '#ffe4e6' },
  { name: 'Sleep', icon: 'moon', color: '#4f46e5', tint: '#e0e7ff' },
  { name: 'Diabetes', icon: 'droplet', color: '#0891b2', tint: '#cffafe' },
  { name: 'Wellness', icon: 'shield', color: '#d97706', tint: '#fef3c7' }
];

const ARTICLES = [
  {
    id: 'heart-healthy-habits',
    title: '10 Everyday Habits That Quietly Improve Your Heart Health',
    category: 'Heart Health',
    icon: 'heart',
    excerpt: 'Small, repeatable choices — not dramatic overhauls — do most of the work when it comes to protecting your heart.',
    date: '2026-10-28',
    readTime: 7,
    featured: true,
    content: `
      <p>Heart disease remains one of the leading causes of death worldwide, yet a large share of the risk is influenced by daily habits. The encouraging part: you do not need a perfect lifestyle to make a meaningful difference. Consistency with small choices matters more than occasional grand gestures.</p>
      <h2>1. Move for a few minutes every hour</h2>
      <p>Long stretches of sitting are linked with poorer cardiovascular outcomes, even among people who exercise. Stand up, stretch, or take a two-minute walk every hour. Set a gentle reminder if you tend to lose track of time.</p>
      <h2>2. Add one extra serving of vegetables</h2>
      <p>Rather than removing foods you enjoy, start by adding something beneficial. A handful of spinach in an omelette or a side salad with lunch adds fibre, potassium and antioxidants that support healthy blood pressure.</p>
      <h2>3. Choose water more often</h2>
      <p>Sugary drinks are one of the easiest sources of hidden calories. Replacing even one sweetened beverage a day with water or unsweetened tea is a simple win.</p>
      <h2>4. Take the stairs</h2>
      <p>Short bursts of movement throughout the day — often called “exercise snacks” — can improve fitness and blood sugar control. Stairs are a free, convenient option.</p>
      <h2>5. Protect your sleep</h2>
      <p>Adults generally need seven to nine hours. Poor sleep is associated with higher blood pressure and increased appetite. A consistent bedtime is one of the most effective sleep habits.</p>
      <h2>6. Manage stress in small doses</h2>
      <p>Chronic stress can raise blood pressure and encourage unhealthy coping habits. Two minutes of slow breathing, a short walk, or a phone call with a friend can interrupt the cycle.</p>
      <h2>7. Know your numbers</h2>
      <p>Blood pressure, cholesterol, blood sugar and waist circumference tell you far more than how you feel. Check them at routine visits and track the trend over time.</p>
      <h2>8. Limit ultra-processed snacks</h2>
      <p>You do not need to avoid them completely. Keeping them out of sight and keeping fruit or nuts visible makes the better choice the easier one.</p>
      <h2>9. Do not ignore snoring and fatigue</h2>
      <p>Loud snoring combined with daytime tiredness can be a sign of sleep apnoea, which affects heart health. It is worth discussing with a doctor.</p>
      <h2>10. Stay connected</h2>
      <p>Social isolation is increasingly recognised as a cardiovascular risk factor. Regular contact with family, friends or community groups is genuinely good medicine.</p>
      <h2>The bottom line</h2>
      <p>Pick one or two habits to focus on this month. When they feel automatic, add another. Sustainable beats extreme — every time.</p>
    `,
    takeaways: [
      'Small, consistent habits beat dramatic short-term changes.',
      'Break up long sitting periods with short movement breaks.',
      'Know your blood pressure, cholesterol and blood sugar numbers.'
    ]
  },
  {
    id: 'how-much-water',
    title: 'How Much Water Do You Actually Need Each Day?',
    category: 'Nutrition',
    icon: 'droplet',
    excerpt: 'The “8 glasses a day” rule is a rough guide, not a law of nature. Here is what your body really needs — and how to tell.',
    date: '2026-10-24',
    readTime: 6,
    featured: true,
    content: `
      <p>Hydration advice is everywhere, but the familiar “eight glasses of water a day” has little scientific basis as a universal rule. Water needs vary with body size, activity, climate, diet and health status.</p>
      <h2>What the evidence says</h2>
      <p>Many health authorities suggest roughly 2.7 litres of total fluid per day for women and 3.7 litres for men, but that includes water from food and other drinks. Around 20% of our fluid intake typically comes from food, especially fruits and vegetables.</p>
      <h2>Signs you are well hydrated</h2>
      <ul>
        <li>Urine is pale yellow — not colourless, not dark amber.</li>
        <li>You rarely feel thirsty during the day.</li>
        <li>You urinate several times a day.</li>
        <li>Your mouth does not feel persistently dry.</li>
      </ul>
      <h2>When you need more</h2>
      <p>Increase fluid intake during hot weather, intense exercise, illness with fever or diarrhoea, and pregnancy or breastfeeding. Older adults often feel thirst less strongly, so scheduled drinks can help.</p>
      <h2>Do you need to count?</h2>
      <p>For most healthy people, no. Drinking with meals and keeping a bottle nearby is enough. People with kidney or heart conditions may need specific limits, so follow medical advice.</p>
      <h2>Can you drink too much?</h2>
      <p>Rarely, but yes. Drinking excessive water very quickly can dilute sodium in the blood — a dangerous condition called hyponatraemia. Spread intake across the day and do not force large volumes.</p>
      <h2>Practical tips</h2>
      <ul>
        <li>Start the morning with a glass of water.</li>
        <li>Keep a bottle where you work.</li>
        <li>Drink a glass before each meal.</li>
        <li>Use the water intake calculator on our tools page for a personalised estimate.</li>
      </ul>
    `,
    takeaways: [
      'Fluid needs vary by person, activity and climate.',
      'Food contributes about 20% of daily fluid intake.',
      'Pale-yellow urine is a good practical hydration check.'
    ]
  },
  {
    id: 'beginner-strength-training',
    title: "The Beginner's Guide to Strength Training at Home",
    category: 'Fitness',
    icon: 'dumbbell',
    excerpt: 'You do not need a gym membership or fancy equipment to build strength. Start with these five movements and a simple plan.',
    date: '2026-10-19',
    readTime: 9,
    featured: true,
    content: `
      <p>Strength training supports bone density, metabolism, posture and everyday function. It is also one of the most effective ways to stay independent as you age. The good news is that bodyweight training at home can deliver real results.</p>
      <h2>The five foundational movements</h2>
      <h3>1. Squat</h3>
      <p>Stand with feet shoulder-width apart. Sit back as if lowering onto a chair, keeping your chest tall. Use a chair for support if needed. This trains the legs and hips.</p>
      <h3>2. Push-up</h3>
      <p>Start with hands against a wall or on a sturdy table. Keep your body in a straight line and lower until your chest nears the surface. This trains the chest, shoulders and triceps.</p>
      <h3>3. Hip hinge</h3>
      <p>With soft knees, push your hips back while keeping your back flat. A broomstick held across your shoulders helps you feel the movement. This trains the glutes and hamstrings.</p>
      <h3>4. Row</h3>
      <p>Use a sturdy table, a resistance band, or a backpack filled with books. Pull your shoulder blades together, then bend your elbows. This trains the upper back and biceps.</p>
      <h3>5. Plank</h3>
      <p>Hold a straight line from head to heels for 10–30 seconds. This trains the core, which protects your lower back.</p>
      <h2>A simple weekly plan</h2>
      <p>Train two to three days per week with at least one rest day between sessions.</p>
      <ul>
        <li>Warm up: 5 minutes of walking or marching in place.</li>
        <li>Each movement: 2–3 sets of 8–12 repetitions (or 10–30 seconds for the plank).</li>
        <li>Rest 60–90 seconds between sets.</li>
        <li>Cool down: gentle stretching for 5 minutes.</li>
      </ul>
      <h2>How to progress</h2>
      <p>When the last repetition of a set feels easy with good form, make the movement harder: slow the tempo, increase range of motion, add a loaded backpack, or add one more set. Do not rush to add weight before your form is solid.</p>
      <h2>Safety notes</h2>
      <p>Stop if you feel sharp pain. Muscle soreness for a day or two is normal; joint pain is not. If you have a medical condition, are pregnant, or are returning from injury, speak with a healthcare professional before starting.</p>
    `,
    takeaways: [
      'Bodyweight training can build genuine strength at home.',
      'Master squat, hinge, push, row and plank first.',
      'Progress by adding reps, sets or difficulty — not by rushing.'
    ]
  },
  {
    id: 'sleep-your-best-medicine',
    title: "Why Sleep Is Your Body's Best Medicine",
    category: 'Sleep',
    icon: 'moon',
    excerpt: 'Sleep is not idle time. While you rest, your brain consolidates memories and your body repairs tissue, hormones and immunity.',
    date: '2026-10-15',
    readTime: 7,
    featured: true,
    content: `
      <p>Sleep affects nearly every system in the body: mood, memory, metabolism, immunity and heart health. Yet it is often the first thing we sacrifice when life gets busy. Understanding what sleep does can motivate you to protect it.</p>
      <h2>What happens while you sleep</h2>
      <ul>
        <li><strong>Brain:</strong> Memories are consolidated and waste products are cleared.</li>
        <li><strong>Hormones:</strong> Growth hormone peaks, supporting repair and growth.</li>
        <li><strong>Immunity:</strong> Immune cells are produced and strengthened.</li>
        <li><strong>Metabolism:</strong> Appetite hormones are regulated.</li>
        <li><strong>Heart:</strong> Blood pressure typically dips, giving the cardiovascular system a rest.</li>
      </ul>
      <h2>How much do you need?</h2>
      <p>Most adults need seven to nine hours. Teenagers need eight to ten, and children need more. Needs vary between individuals, but consistently sleeping under six hours is linked with poorer health outcomes.</p>
      <h2>Signs of poor sleep quality</h2>
      <ul>
        <li>Waking unrefreshed most mornings</li>
        <li>Falling asleep within minutes during the day</li>
        <li>Frequent night-time awakenings</li>
        <li>Reliance on caffeine to function</li>
      </ul>
      <h2>Build a better sleep routine</h2>
      <ol>
        <li><strong>Keep a consistent schedule.</strong> Wake at roughly the same time every day, including weekends.</li>
        <li><strong>Get morning light.</strong> Ten to twenty minutes outdoors helps set your body clock.</li>
        <li><strong>Create a wind-down.</strong> Dim lights and switch to calm activities 30–60 minutes before bed.</li>
        <li><strong>Keep the bedroom cool and dark.</strong> A quiet, dark room supports deeper sleep.</li>
        <li><strong>Watch caffeine and alcohol.</strong> Caffeine can linger for six hours or more; alcohol fragments sleep even if it makes you drowsy.</li>
        <li><strong>Get out of bed if you cannot sleep.</strong> After about 20 minutes, do something quiet in dim light, then return.</li>
      </ol>
      <h2>When to seek help</h2>
      <p>If you snore loudly, gasp during sleep, feel extremely sleepy during the day, or have struggled with insomnia for more than three months, speak to a doctor. Effective treatments exist.</p>
    `,
    takeaways: [
      'Sleep supports memory, immunity, hormones and heart health.',
      'Adults generally need 7–9 hours per night.',
      'Consistent wake times are more powerful than perfect bedtime routines.'
    ]
  },
  {
    id: 'understanding-blood-sugar',
    title: 'Understanding Blood Sugar: A Simple Guide for Everyone',
    category: 'Diabetes',
    icon: 'droplet',
    excerpt: 'Blood sugar numbers can feel confusing. This plain-language guide explains what they mean and which habits help keep them steady.',
    date: '2026-10-10',
    readTime: 8,
    featured: false,
    content: `
      <p>Blood sugar, or blood glucose, is the main sugar circulating in your blood. It comes from the food you eat and is also produced by your liver. Your body uses it for energy — but too much over time can damage blood vessels, nerves and organs.</p>
      <h2>Key numbers at a glance</h2>
      <ul>
        <li><strong>Fasting glucose (after 8 hours without food):</strong> normal is below 100 mg/dL; 100–125 mg/dL suggests prediabetes; 126 mg/dL or higher on repeat testing suggests diabetes.</li>
        <li><strong>HbA1c (three-month average):</strong> below 5.7% is normal; 5.7–6.4% suggests prediabetes; 6.5% or higher suggests diabetes.</li>
      </ul>
      <p>These thresholds are widely used, but diagnosis should always be confirmed by a clinician.</p>
      <h2>Why steady matters</h2>
      <p>Large spikes and crashes can cause fatigue, hunger and irritability. Over years, consistently high blood sugar is what drives complications. The goal is not perfection — it is a stable trend.</p>
      <h2>Habits that support healthy blood sugar</h2>
      <h3>Pair carbohydrates with protein or fat</h3>
      <p>Eating bread with eggs, or fruit with yoghurt, slows digestion and blunts the rise in glucose.</p>
      <h3>Choose fibre-rich foods</h3>
      <p>Whole grains, beans, vegetables and nuts slow sugar absorption and support gut health.</p>
      <h3>Move after meals</h3>
      <p>A 10–15 minute walk after eating can meaningfully lower post-meal glucose.</p>
      <h3>Do not skip sleep</h3>
      <p>Even a few nights of poor sleep can reduce insulin sensitivity.</p>
      <h3>Manage stress</h3>
      <p>Stress hormones raise glucose. Breathing exercises and regular activity help.</p>
      <h2>Prediabetes is a window of opportunity</h2>
      <p>Modest weight loss (5–7% of body weight), regular activity and improved diet can significantly reduce the risk of progressing to type 2 diabetes.</p>
      <h2>Important</h2>
      <p>If you take diabetes medication, never change your routine or diet without medical advice — some combinations can cause low blood sugar. Speak to your doctor or pharmacist.</p>
    `,
    takeaways: [
      'HbA1c reflects average blood sugar over about three months.',
      'Pair carbs with protein, fat or fibre to reduce spikes.',
      'A short walk after meals helps lower post-meal glucose.'
    ]
  },
  {
    id: 'manage-everyday-stress',
    title: '5 Science-Backed Ways to Manage Everyday Stress',
    category: 'Mental Health',
    icon: 'brain',
    excerpt: 'Stress is part of life, but it does not have to run your life. These evidence-based techniques are quick enough for a busy day.',
    date: '2026-10-06',
    readTime: 6,
    featured: false,
    content: `
      <p>Stress is a normal response to pressure. In short bursts it can sharpen focus. The problem is chronic stress — the kind that lingers for weeks and wears down sleep, digestion, mood and immunity.</p>
      <h2>1. Slow your breathing</h2>
      <p>Slow breathing activates the parasympathetic nervous system, which helps the body calm down. Try inhaling for four seconds, exhaling for six, for two minutes. A longer exhale is the key.</p>
      <h2>2. Move your body</h2>
      <p>Exercise reduces stress hormones and releases endorphins. It does not need to be intense: a brisk 20-minute walk, a short cycle, or even dancing to a few songs counts.</p>
      <h2>3. Write it down</h2>
      <p>Expressive writing can help untangle racing thoughts. Spend five minutes writing whatever is on your mind, without editing. Then note one small action you can take.</p>
      <h2>4. Reduce input, not just output</h2>
      <p>Constant notifications and news scrolling keep the nervous system on alert. Try phone-free meals, notification-free mornings, or a 30-minute daily break from screens.</p>
      <h2>5. Connect with someone</h2>
      <p>Social support is one of the strongest buffers against stress. A short call or a walk with a friend can shift how you feel and how you cope.</p>
      <h2>What not to do</h2>
      <p>Alcohol, excessive caffeine and doom-scrolling may feel soothing in the moment but tend to worsen stress over time.</p>
      <h2>When stress becomes too much</h2>
      <p>If stress is affecting sleep, work, relationships or appetite for more than a few weeks, consider speaking with a mental health professional. Therapy is effective and seeking help is a sign of strength, not weakness.</p>
    `,
    takeaways: [
      'A longer exhale than inhale calms the nervous system quickly.',
      'Exercise and social connection are powerful stress buffers.',
      'Persistent stress that affects daily life deserves professional support.'
    ]
  },
  {
    id: 'balanced-plate',
    title: 'Building a Balanced Plate: The Half-Quarter-Quarter Rule',
    category: 'Nutrition',
    icon: 'salad',
    excerpt: 'Forget calorie counting for a moment. A simple visual framework can make healthier meals almost automatic.',
    date: '2026-10-01',
    readTime: 5,
    featured: false,
    content: `
      <p>Nutrition advice often sounds complicated. A practical alternative is to think about proportions on your plate rather than numbers in an app.</p>
      <h2>The framework</h2>
      <ul>
        <li><strong>Half the plate:</strong> vegetables and fruit — colour and variety matter.</li>
        <li><strong>One quarter:</strong> protein — fish, poultry, eggs, beans, lentils, tofu or dairy.</li>
        <li><strong>One quarter:</strong> whole grains or starchy carbohydrates — brown rice, whole wheat, oats, potatoes.</li>
        <li><strong>Plus:</strong> a small amount of healthy fat — olive oil, nuts, seeds or avocado.</li>
      </ul>
      <h2>Why it works</h2>
      <p>This approach naturally increases fibre and nutrients while keeping portions reasonable. It does not require weighing food or eliminating entire food groups.</p>
      <h2>Examples</h2>
      <ul>
        <li>Grilled chicken, roasted vegetables, quinoa and a drizzle of olive oil.</li>
        <li>Lentil curry, spinach, brown rice and yoghurt.</li>
        <li>Baked fish, salad, sweet potato and a handful of walnuts.</li>
      </ul>
      <h2>Make it realistic</h2>
      <p>Not every meal will look perfect, and that is fine. Aim for the framework most of the time, and enjoy celebrations and treats without guilt. Consistency across weeks matters far more than any single meal.</p>
      <h2>A note on snacks</h2>
      <p>If you snack, try pairing a carbohydrate with a protein or fat — apple with peanut butter, or yoghurt with seeds — to stay satisfied longer.</p>
    `,
    takeaways: [
      'Fill half your plate with vegetables and fruit.',
      'Reserve a quarter each for protein and whole-grain carbs.',
      'Consistency across weeks matters more than single meals.'
    ]
  },
  {
    id: 'walking-vs-running',
    title: 'Walking vs Running: Which Is Better for You?',
    category: 'Fitness',
    icon: 'footprints',
    excerpt: 'Both are excellent. The best choice depends on your joints, goals, fitness and — most importantly — what you will actually keep doing.',
    date: '2026-09-26',
    readTime: 6,
    featured: false,
    content: `
      <p>Walking and running are the two most accessible forms of cardio. Both improve heart health, mood and longevity. The question is not which is universally better, but which suits you.</p>
      <h2>Calories and time</h2>
      <p>Running burns more calories per minute, but walking for longer can match total energy expenditure. If time is limited, running is more efficient; if joint comfort is a concern, walking wins.</p>
      <h2>Joint impact</h2>
      <p>Running places more load on knees and ankles. Most healthy people tolerate it well, but those with existing joint problems, higher body weight or previous injuries may prefer walking, swimming or cycling.</p>
      <h2>Cardiovascular benefits</h2>
      <p>Vigorous activity such as running offers strong cardiovascular benefits in less time. Brisk walking still counts as moderate activity and delivers substantial benefit, especially when done consistently.</p>
      <h2>A practical hybrid</h2>
      <p>You do not have to choose. Many people do well with a mix: brisk walks most days, plus one or two runs or hill walks per week. This balances load and variety.</p>
      <h2>Getting started safely</h2>
      <ul>
        <li>Start with 15–20 minutes and build gradually.</li>
        <li>Wear supportive shoes.</li>
        <li>Warm up with a slow five minutes.</li>
        <li>Increase weekly volume by no more than about 10%.</li>
        <li>Include rest days.</li>
      </ul>
      <h2>The best workout</h2>
      <p>The one you will repeat. Enjoyment predicts consistency, and consistency predicts results.</p>
    `,
    takeaways: [
      'Running is faster; walking is gentler on the joints.',
      'Cardiovascular benefits come from consistency, not speed.',
      'A mix of walking and running works well for most people.'
    ]
  },
  {
    id: 'ten-thousand-steps',
    title: 'Do You Really Need 10,000 Steps a Day?',
    category: 'Wellness',
    icon: 'activity',
    excerpt: 'The famous 10,000-step target started as a marketing campaign. Modern research tells a more encouraging story.',
    date: '2026-09-21',
    readTime: 5,
    featured: false,
    content: `
      <p>The 10,000-step goal is one of the most recognisable health targets in the world. It originated from a Japanese pedometer marketing campaign in the 1960s — not from medical research.</p>
      <h2>What studies show</h2>
      <p>Large observational studies suggest that health benefits increase with step count up to a point, then plateau. For many adults, benefits appear to level off somewhere around 7,000–9,000 steps per day. Importantly, moving from very low step counts to moderate counts delivers the biggest relative gain.</p>
      <h2>Why the first steps matter most</h2>
      <p>People who walk fewer than 4,000 steps daily have the most to gain. Adding 2,000–3,000 steps can meaningfully reduce mortality risk. You do not need to jump straight to 10,000.</p>
      <h2>Quality matters too</h2>
      <p>A brisk walk — where you can talk but not sing — counts as moderate-intensity activity. Thirty minutes of brisk walking on most days meets common physical activity guidelines.</p>
      <h2>Realistic ways to add steps</h2>
      <ul>
        <li>Take a 10-minute walk after lunch and dinner.</li>
        <li>Park further away or get off one stop earlier.</li>
        <li>Take phone calls standing or walking.</li>
        <li>Use the stairs when practical.</li>
      </ul>
      <h2>The takeaway</h2>
      <p>Do not let a big number discourage you. Any increase from your current baseline is worthwhile, and consistency beats intensity for long-term health.</p>
    `,
    takeaways: [
      'The 10,000-step target came from marketing, not medicine.',
      'Benefits plateau around 7,000–9,000 steps for many adults.',
      'Adding steps to a low baseline delivers the biggest gains.'
    ]
  },
  {
    id: 'headache-triggers',
    title: 'Headaches: Common Triggers and When to See a Doctor',
    category: 'Wellness',
    icon: 'activity',
    excerpt: 'Most headaches are harmless and manageable. But some warning signs need urgent medical attention — here is how to tell the difference.',
    date: '2026-09-16',
    readTime: 7,
    featured: false,
    content: `
      <p>Headaches are among the most common health complaints. Most are tension-type headaches or migraines, and they can usually be managed with lifestyle adjustments and simple pain relief.</p>
      <h2>Common triggers</h2>
      <ul>
        <li>Dehydration and skipped meals</li>
        <li>Poor sleep or changes in sleep schedule</li>
        <li>Stress and muscle tension</li>
        <li>Caffeine withdrawal or excess</li>
        <li>Screen strain and poor posture</li>
        <li>Certain foods, alcohol or strong smells (especially for migraines)</li>
        <li>Hormonal changes</li>
      </ul>
      <h2>Everyday strategies</h2>
      <ul>
        <li>Drink water regularly and eat at consistent times.</li>
        <li>Keep a headache diary to identify patterns.</li>
        <li>Take screen breaks and adjust your workstation.</li>
        <li>Prioritise sleep and regular physical activity.</li>
        <li>Limit painkillers to avoid medication-overuse headaches.</li>
      </ul>
      <h2>Red flags — seek urgent care</h2>
      <p>Contact a doctor promptly if you experience:</p>
      <ul>
        <li>A sudden, severe “thunderclap” headache</li>
        <li>Headache with fever, stiff neck, confusion or rash</li>
        <li>Headache after a head injury</li>
        <li>New weakness, numbness, vision loss or difficulty speaking</li>
        <li>Headaches that are progressively worsening</li>
        <li>A new headache pattern after age 50</li>
      </ul>
      <h2>Treatment</h2>
      <p>Over-the-counter pain relievers can help occasional headaches. Migraine-specific treatments are available but should be guided by a clinician, especially if attacks are frequent. Preventive treatment can reduce how often migraines occur.</p>
      <p>This article is educational and does not replace a medical assessment.</p>
    `,
    takeaways: [
      'Hydration, sleep and regular meals prevent many headaches.',
      'A headache diary helps identify personal triggers.',
      'Sudden severe headache or neurological symptoms need urgent care.'
    ]
  },
  {
    id: 'reading-nutrition-labels',
    title: 'A Simple Guide to Reading Nutrition Labels',
    category: 'Nutrition',
    icon: 'apple',
    excerpt: 'Front-of-pack claims can mislead. Learning to read the label in three quick steps helps you compare products honestly.',
    date: '2026-09-11',
    readTime: 6,
    featured: false,
    content: `
      <p>Nutrition labels are a practical tool, but they can feel overwhelming. You do not need to analyse every number — a few key checks will tell you most of what matters.</p>
      <h2>Step 1: Check the serving size</h2>
      <p>All values on the label refer to a specific serving. A small packet may contain two or three servings, so multiply accordingly. This is the most common source of confusion.</p>
      <h2>Step 2: Look at the four key numbers</h2>
      <ul>
        <li><strong>Added sugar:</strong> lower is generally better. Aim for products with little or none.</li>
        <li><strong>Fibre:</strong> higher is better. More than 3 g per serving is a good sign.</li>
        <li><strong>Sodium:</strong> lower is better. Under 120 mg per 100 g is considered low.</li>
        <li><strong>Protein:</strong> helpful for satiety, especially in snacks and breakfast foods.</li>
      </ul>
      <h2>Step 3: Scan the ingredient list</h2>
      <p>Ingredients are listed by weight, largest first. If sugar, syrup or refined flour appears near the top, the product is likely highly processed. Long lists of unfamiliar additives are a signal too, though not automatically harmful.</p>
      <h2>Watch the marketing</h2>
      <p>Terms like “natural”, “light”, “no added sugar” and “high protein” have specific meanings — or sometimes very little meaning. Always check the actual numbers rather than the front of the pack.</p>
      <h2>Comparing products</h2>
      <p>Compare per 100 g rather than per serving, since serving sizes differ between brands. This gives you a fair apples-to-apples comparison.</p>
      <h2>The bottom line</h2>
      <p>Whole foods rarely need labels. When you buy packaged foods, focus on added sugar, fibre, sodium and the first few ingredients.</p>
    `,
    takeaways: [
      'Always check the serving size before reading the numbers.',
      'Compare products per 100 g for a fair comparison.',
      'Prioritise low added sugar, higher fibre and lower sodium.'
    ]
  },
  {
    id: 'womens-screening-guide',
    title: "Women's Health: Screening Tests by Age",
    category: 'Wellness',
    icon: 'shield',
    excerpt: 'Screening catches problems early, when treatment works best. Here is a general age-based guide — always confirm what is right for you.',
    date: '2026-09-05',
    readTime: 7,
    featured: false,
    content: `
      <p>Screening tests look for health problems before symptoms appear. Recommendations vary by country, family history and personal risk, so use this as a conversation starter with your clinician — not a replacement for individual advice.</p>
      <h2>In your 20s and 30s</h2>
      <ul>
        <li><strong>Blood pressure:</strong> check at least every 1–2 years.</li>
        <li><strong>Cervical screening:</strong> typically starts around age 21–25, then every 3–5 years depending on the test used.</li>
        <li><strong>STI screening:</strong> discuss with your doctor based on risk factors.</li>
        <li><strong>Vaccinations:</strong> keep up to date, including HPV and tetanus.</li>
      </ul>
      <h2>In your 40s</h2>
      <ul>
        <li><strong>Breast screening:</strong> many guidelines begin mammography at 40–50; discuss your family history.</li>
        <li><strong>Blood sugar and cholesterol:</strong> check every 3–5 years, or more often with risk factors.</li>
        <li><strong>Eye checks:</strong> every 2–4 years.</li>
      </ul>
      <h2>In your 50s and beyond</h2>
      <ul>
        <li><strong>Bowel cancer screening:</strong> commonly starts at 45–50.</li>
        <li><strong>Bone density:</strong> discuss around menopause or age 65.</li>
        <li><strong>Hearing and vision:</strong> regular checks.</li>
        <li><strong>Cardiovascular risk:</strong> review annually with your doctor.</li>
      </ul>
      <h2>Regardless of age</h2>
      <p>Pay attention to persistent changes: unusual lumps, unexplained weight loss, bleeding between periods, chronic fatigue or changes in bowel habits. Most are not cancer, but they deserve assessment.</p>
      <h2>Mental health counts</h2>
      <p>Screening for depression and anxiety is part of good preventive care. If you are struggling, tell your clinician.</p>
      <p>Guidelines differ between organisations. Your doctor can tailor a plan based on your history.</p>
    `,
    takeaways: [
      'Screening recommendations vary by country and personal risk.',
      'Blood pressure should be checked at least every 1–2 years.',
      'Persistent unexplained changes always deserve medical assessment.'
    ]
  }
];

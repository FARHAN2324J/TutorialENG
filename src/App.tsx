type Topic = {
  id: string;
  title: string;
  content: string;
};

const topics: Topic[] = [
  {
    id: "present-simple",
    title: "حال ساده (Present Simple)",
    content: `subject + verb(s/ es)

I/ You/ We/ They work.

He/ She/ It works.`,
  },
  {
    id: "past-simple",
    title: "گذشته ساده (Past Simple)",
    content: `توضیح: در گذشته مشخصی شروع شده اند و تمام شده اند.
اگر زمان گذشته(دیروز. هفته پیش . سال پیش) از گذشته ساده استفاده میکنیم

subject + verb(Past form)

I/ You/ He/ She/ It/ We/ They  worked/went

I finished my project.

قاعده دار = -ed

بی قاعده= do -> did  see-> saw  go -> went  have->had`,
  },
  {
    id: "present-continuous",
    title: "حال استمراری (Present Continuous)",
    content: `subject + am/ is/ are + verb(-ing)

He/ She/ It is working
You/ We/ They are working.`,
  },
  {
    id: "present-perfect",
    title: "حال کامل (Present Perfect)",
    content: `توضیح: در گذشته اتفاق افتادن ولی زمان دقیقش مهم نیست مهم خود اتفاق یا نتیجه است.

I/ You/ We/ They have verb3.
He/ She/ It has verb3.

I have built three project.
he has fixed the bug.`,
  },
  {
    id: "past-continuous",
    title: "گذشته استمراری (Past Continuous)",
    content: `توضیح: گذشته استمراری طولانی تر گذسته ساده کوتاه و قطع شونده
گذشته ساده و گذشته استمراری اغلب با هم میاد تا باهم یک جمله رو کامل کنن

subject + was / were + verb(-ing)

I/ He/ She/ It   was working.

You/ We/ They were working.

i was deploying the website when i found a bug. داشته ام سایت رو دپلوی میکردم که یه باگ پیدا کردم`,
  },
  {
    id: "summary",
    title: "خلاصه (Summary)",
    content: `حال ساده -> کار های همیشگی: I work

حال استمراری -> برای کارهایی که همین الان انجام میدی: I am working

گذشته ساده -> برای کاری که شروع شد و تموم شد: I worked

گذشته استمراری -> برای توصیف کاری که در گذشته در حال انجامش بودی: I was working

حال کامل -> زمانش مهم نیست، مهم اون نتیجه است: I have worked`,
  },
  {
    id: "present-perfect-continuous",
    title: "حال کامل استمراری (Present Perfect Continuous)",
    content: `برای کارهایی که در گذشته شروع شده اند، ادامه دار بوده اند و احتمالاً همین الان هم در جریان هستند.

I/ You/ We/ They have been verb(-ing)

He/ She/ It has been verb(-ing)

He has been studying english since last year.
اون از پارسال داره انگلیسی میخونه.`,
  },
  {
    id: "present-perfect-2",
    title: "حال کامل (تجربیات) — Present Perfect (2)",
    content: `زمان دقیقش مهم نیست خود اتفاق مهمه. صحبت در مورد تجربیات گذشته.

برای پرسش:
have / has + subject + ever + verb(past) + ?

have you ever seen a real server?

برای پاسخ منفی:
subject + have / has + never + verb(past)

i have never seen a real server.

برای پاسخ مثبت:
subject + have / has + verb(past)

yes, i've deployed many projects.`,
  },
  {
    id: "conditional-0-1",
    title: "Conditional (0, 1)",
    content: `برای شرط هایی که واقعاً ممکنه رخ بده استفاده کن

0: if + present simple, present simple
if you heat ice, it melts.

1: if + present simple, will + verb
if i have time, i will study english tonight.`,
  },
  {
    id: "conditional-2",
    title: "Conditional 2",
    content: `برای موقعیت های خیلی بعید یا غیرواقعی یا فرضی

if + past simple, would + base verb

if i won the lottery, i would buy a tesla.`,
  },
  {
    id: "conditional-3",
    title: "Conditional 3",
    content: `برای گذشته ای که دیگه تغییر نمیکنه — پشیمونی و حسرت

if + past perfect + would have + past verb.

if i had studied, i would have passed the exam.
اگه میخوندم قبول میشدم.`,
  },
  {
    id: "modal-verbs",
    title: "Modal Verbs",
    content: `1. can: توانایی — i can code in js
2. may/ might/ could: احتمال
3. can/ may: اجازه
4. must/ have to: اجبار
5. should: توصیه
6. would/ could/ shall: فرض غیرواقعی یا مودبانه — i would help you if i had more time.`,
  },
  {
    id: "at-on-in",
    title: "at / on / in",
    content: `at: دقیق — at night, at 5.
on: مشخص — on monday
in: کلی — in 2025, in july.

مکان:
at: at the bus, at home.
on: on the table, on the box.
in: in new york, in the box.

to: حرکت یا جهت — i'm going to the gym.`,
  },
  {
    id: "phrasal-verbs",
    title: "Phrasal Verbs",
    content: `مثال: give up, look after, ...`,
  },
  {
    id: "do-does",
    title: "Do / Does",
    content: `I/ You/ We/ They -> Do + base verb.
He/ She/ It -> Does + base verb.

Do you like js?
Does he work at google?`,
  },
  {
    id: "negatives",
    title: "منفی (Negatives)",
    content: `I/ You/ We/ They -> don't
He/ She/ It -> doesn't

i don't like c++ / he doesn't eat meat.`,
  },
  {
    id: "did",
    title: "Did (گذشته ساده سوالی)",
    content: `did + base verb + subject

did you fix the bug yesterday?

منفی: I didn't test the new doc.`,
  },
  {
    id: "wish-if-only",
    title: "wish / if only",
    content: `wish: ای کاش — i wish i knew more js.

i wish i had fixed the bug yesterday.

if only: مثل wish ولی تاکید و حالت احساسی قوی تر

if only i had started coding earlier.
کاش زودتر کد زدن رو شروع کرده بودم.`,
  },
  {
    id: "of",
    title: "of",
    content: `of: از

the color of the sky.
رنگی از آسمون.`,
  },
  {
    id: "wh-questions",
    title: "سوال کردن - WH questions",
    content: `(what, where, why, ...) + do/ does/ did + subject + verb.

وقتی میخوای تایید بگیری یا مودبانه صحبت کنی:

you are a dev, aren't you?
he didn't commit, did he?`,
  },
  {
    id: "articles",
    title: "a / an / the",
    content: `an / a = وقتی اسم اولین بار ذکر میشه

i bought a laptop.

the = وقتی اسم قبلا ذکر شده/ وقتی اسم مشخصه

i bought a laptop, the laptop is very fast.

im in the gym.`,
  },
  {
    id: "relative-clauses",
    title: "who / which / that (جملات توضیحی)",
    content: `اسم + who/ which/ that + فعل + بقیه جمله

the dev who fixed the bug is my colleague.

who: برای افراد
which: برای اشیا و حیوانات
that: برای افراد و اشیا`,
  },
  {
    id: "comparatives",
    title: "as ... as / than / adjectives",
    content: `as ... as => به اندازه
this func is as fast as the old one.

than => مقایسه
React is faster than angular in this case.

small -> smaller -> smallest`,
  },
];

export default function GrammarCards(): JSX.Element {
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
       style={{
  background: `
    radial-gradient(ellipse 85% 65% at 8% 8%, rgba(84, 40, 126, 0.25), transparent 60%),
    radial-gradient(ellipse 75% 60% at 75% 35%, rgba(157, 100, 31, 0.2), transparent 62%),
    radial-gradient(ellipse 70% 60% at 15% 80%, rgba(101, 50, 47, 0.18), transparent 62%),
    radial-gradient(ellipse 70% 60% at 92% 92%, rgba(47, 49, 98, 0.3), transparent 62%),
    linear-gradient(180deg, #151021 0%, #0c0812 100%)
  `,
}}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">
              آموزش گرامر — کارت‌ها
            </h1>
            <p className="text-gray-600">
              تمام مبحث‌ها در همین صفحه و داخل یک کامپوننت قرار گرفته‌اند —
              React + TypeScript + Tailwind
            </p>
          </header>

          <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {topics.map((t) => (
              <article
                key={t.id}
                className="bg-[#30303033] backdrop-blur-xl border border-[#3030306a] rounded-4xl p-6 shadow-lg hover:shadow-2xl transition-shadow sec-div flex flex-col gap-8"
              >
                <h2 className="text-xl text-[#f8f8f8ef] font-semibold mb-3">
                  {t.title}
                </h2>
                <div className="prose text-[#f8f8f8be] max-w-none text-sm whitespace-pre-wrap">
                  {t.content}
                </div>
              </article>
            ))}
          </section>

          <footer className="mt-10 text-sm text-gray-500">
            کامپوننت تک‌فایلی — میتوانی این فایل را داخل پروژهٔ پراجکت React خود
            (مثلاً در مسیر <code>src/components/GrammarCards.tsx</code>) قرار
            بدی و در صفحهٔ اصلی ایمپورت کنی.
          </footer>
        </div>
      </main>
    </div>
  );
}

<!--
  WORKS IN PROGRESS — the one file to edit for every interstitial page
  and for the pills on the homepage.

  HOW THIS FILE WORKS
  • Each "# Heading" below is one project. Its order here is the pill
    order on the homepage and the previous/next order on the pages.
  • Delete a whole "# Heading" section to remove a project.
    Copy one to add a project.
  • The "key: value" lines right under a heading are settings.
    The "## Subheading" blocks are page copy (plain markdown: paragraphs,
    "- " bullet lists, **bold**, *italic*, [links](https://…)).
  • Anything in [square brackets] is a placeholder for something only
    you know. The build script lists every one still left.
  • These <!-- comments --> never appear on the site.

  REBUILD AFTER EDITING (from the repo root):
      python3 scripts/build_work_pages.py
-->

# Shared copy

<!-- Words used on every page. {name} and {domain} get filled in. -->
section_label: Works in progress
cta: Go to {name}
leaving_note: You're leaving travelinreid.com for {domain}.
on_site_note: {name} lives right here on travelinreid.com.
closing_heading: Check it out!
closing_note: {name} lives on its own site. This button takes you there.
not_open_heading: Almost ready
not_open_cta: Not open yet
not_open_note: {name} doesn't have a public home yet. Check back soon.
others_heading: More works in progress
back_link: Back to the homepage

# NowKalamazoo

slug: nowkalamazoo
pill: NowKalamazoo
url: https://nowkalamazoo.org
status: Hanging Tough
role: Director, Audience & Civic Engagement
started: 2021
built_with: Community, Intention, Kick-Ass Team
visual: loop

## Summary

A nonprofit community news service for Kalamazoo County that shows up every Monday through Friday by email, built around a simple question: What do people here need to know to take part in local life?

## What it is

NowKalamazoo is a daily, email-first, nonprofit newsroom. It covers local government, civic life and the practical business of living here: what's happening, what's changing, who's deciding and how to have a say.

It's supported by donors and sponsors rather than paywalls, and it's operated by [The Local Journalism Foundation of Kalamazoo County](../local-journalism-foundation/).

## Why I work on it

More news gets published now than ever, and local news keeps declining anyway. I don't think the fix is only better supply. People also have to feel connected, capable and heard enough to want local information in the first place, and they need to know how to use it.

NowKalamazoo is where we're testing this idea. The goal isn't more stories. It's more residents who know where to show up and what to ask once they get there.

## What's different

- **A service, not a product.** We start from the jobs residents need done (feeling connected to their community and knowing what's on the agenda around our county) and work backward to the journalism.
- **Email first.** It arrives where people already are, every morning, with no algorithm in between. 
- **Measured by civic outcomes.** Opens and clicks matter less than whether someone found a connection and felt more capable through us. Repeat visits to the school board meeting matter more than repeat visits to our website.
- **Neighborly on purpose.** Useful and rigorous without being negative, elite or extractive. We're in constant conversation through email replies, text messages, and IRL gathering.

## Visual

<!-- loop: 3–5 steps drawn as a cycle, in order. -->
- Useful, local, civic information
- Residents who know how to take part
- More people showing up, participating in civic life
- A community that values and supports local news

## Caption

The civic capacity loop: good local journalism builds the capacity that, in turn, sustains good local journalism.

## Before you go

If you're not already subscribed, be sure to sign up for NowKalamazoo's daily newsletter when you get there.

# Local Journalism Foundation

slug: local-journalism-foundation
pill: Local Journalism Foundation
url: https://localjournalismfoundation.org
status: On mission
role: Co-founder, Board Secretary
started: 2023
built_with: Ben Lando, Jim Stephanak, Kristanitie May
visual: tree

## Summary

The parent nonprofit public charity behind NowKalamazoo, with a new vision for civic media and the role of local journalism.

## What it is

The Local Journalism Foundation of Kalamazoo County treats local journalism as public infrastructure, like libraries or parks. It operates NowKalamazoo and runs programs in civic engagement, public education about local government, and widening who gets to make media here.

## Why I work on it

A newsroom alone can't fix the conditions upstream of it. If residents don't trust one another, don't know how local decisions get made or don't believe their voice counts, even great journalism goes unread.

The foundation is where we work on that demand side: building the confidence, connection and civic know-how that make local news worth seeking out.

## What's different

- **An institution, not just a publisher.** Journalism is one program among several, organized around a theory of change.
- **Civics by doing.** We operate programs that grow residents' capacity for participating in local governance and community decision-making, including election forums for voters, workshops on FOIA, and field trips to observe public meetings.
- **Widening the bench.** Diversifying Media aims to increase representation and inclusion among our local media professionals and supports new local media ventures.
- **Accountable to the community.** Success means more residents able to take part, and improvement across a range of civic health and community well-being measures.

## Visual

<!-- tree: the first bullet is the top box; the rest sit beneath it. Use " — " to add a short description. -->
- The Local Journalism Foundation of Kalamazoo County
- NowKalamazoo — Daily civic news and information
- Civic Engagement — Public education and capacity-building
- Diversifying Media — Support for new voices and ventures

## Caption

One nonprofit, three core programs. Each program works on a different part of the same problem, mutually reinforcing each other.

## Before you go

Please consider making a donation to support our mission and Kalamazoo County when you visit.

# Shared Meaning

slug: shared-meaning
pill: Shared Meaning
url: https://shared-meaning.travelinreid.com
status: Testing
role: Product Owner
started: 2014
built_with: Python, Postgres
visual: screenshot
image: images/work/shared-meaning.png

## Summary

A linguistic curiosity turned into sociological data-gathering, this application explores whether you and your acquaintances are speaking the same language.

## What it is

Users evaluate the quantified probability they associate with words and phrases, and then find out how their evaluation compares to others', including a longitudinal average of all participants. 

## Why I work on it

I challenged my colleague Eric Bower to build the original version of this app as a presentation ice-breaker. Re-imagining it in 2025 was a great test and introduction to Claude Code.
I have yet to *not* be surprised and intrigued by a group's results when taking this survey. It's an excellent, vivid reminder that though we might speak the same language, we are often imprecisely communicating with each other. 

## What's different

- **Pure Python** Eric built the original with Python and Jinja templating — a choice I honored in the re-boot.
- **Run your own group** It's built so that anyone can use it as a group exercise.
- **Long-term data** The app is designed to amass more and more data for real significance.

## Caption

Homepage of the application. Don't miss the full background on CIA involvement in the project.

## Before you go

Take the survey yourself. Then start a group session and have friends and family try it with you.

# FizzBuzz

slug: fizzbuzz
pill: FizzBuzz
url: https://fizzbuzz.travelinreid.com
status: Play it!
role: Product Owner
started: 2026
built_with: Codex/ChatGPT
visual: screenshot
image: images/work/fizzbuzz.png

## Summary

A celebration of the classic coding challenge, this app offers a playable game and showcase for solutions in different programming languages.

## What it is

FizzBuzz has been used by math teachers to teach factors and division for a long time, and tech companies have used it to assess programmers' skills. This app turns it into a game — playable alone, or in real-time with friends.
Solo players compete against the clock and see how far they can get without making a mistake. Top performers get their initials on a high-score leaderboard, like classic video games. Group-play is a round robin, until the last player standing wins.

## Why I work on it

In my half-hearted efforts to learn programming and web development, the FizzBuzz problem was a major "light-bulb moment" and an exercise I really enjoyed. I wanted to celebrate that, while learning agentic coding.

## What's different

- **Winners never finish** How high can you get in the FizzBuzz sequence?
- **Retro game feel** Designed for fans of Atari-era games.
- **Real-time with friends** Start a multi-player session and compete against friends.

## Caption

The homepage of the FizzBuzz game. Comes with instructions included.

## Before you go

For the young people in your life, inviting them to play is a sneaky way to improve their math skills!

# Sweep

slug: sweep
pill: Sweep
url: https://sweep.travelinreid.com
status: Live Web Beta
role: Product Owner
started: 2026
built_with: Claude Code, TypeScript
visual: screenshot
image: images/work/sweep.png

## Summary

A card game built to stay connected to my daughter while I'm traveling.

## What it is

Sweep is a card game in the "fishing" family, more popular outside the U.S. than inside. Players compete to amass the most cards by matching and summing cards from a common pool on the table with cards in their hand.
The mathematical elegance of the game allows it to be played by two, three, or four players, while the strategy changes with each player combo.
This version of the game can be played solo against the computer, or in real-time with friends on their devices.

## Why I work on it

Sweep has been a self-assigned homework project for learning about card game engines, UX animation, TypeScript, and longer product development cycles with agentic coding. I also wanted a tool to help me interact with my daughter while I was away completing a Knight-Wallace Fellowship for Journalists at the University of Michigan.

## What's different

- **A rare game type in the U.S.** Odds are, you've never played a game quite like this. It's addictive!
- **Beginner friendly** In-game help offers strategy tips for new players, and computer players offer basic or "shark" skill levels.
- **Real-time play with friends** Players can create private sessions and invite others via a custom link.

## Caption

The Sweep start screen: pick how many players, how many points to play to, and how tough your computer opponents are.

## Before you go

Be sure to use the "help" settings to learn the game if you're a new player.

# Election Never-Land

slug: election-never-land
pill: Election Never-Land
url: https://travelinreid.com/election-never-land
status: Under construction
role: Product Owner
started: 2026
built_with: Claude.ai
visual: timeline
timeline_start: 1789

## Summary

An interactive game and data timeline about how long it has taken (and is still taking) to reach diversity and inclusion milestones in U.S. electoral politics.

## What it is

Election Never-Land pairs a game with a map and timeline. Through play and interaction, visitors can better understand and appreciate the U.S. journey toward inclusion in electoral representation.

## Why I work on it

When the team built the first version of this in 2018, the facts we gathered stunned me. While circumstances have improved, there's still room for more, and I resurrected this project to help communicate that.

## What's different

- **It counts the wait, not just the win.** Every milestone is measured in years since 1789.
- **Some bars don't end.** The "Never-Land" is the milestones that haven't been reached yet.
- **A game, not just a chart** Wouldn't we all prefer play to a lecture?
- **Make your own version** All sources and original data are available for download.

## Visual

<!-- timeline: "YEAR | label", one per line. Use "never | label" for milestones not yet reached.
     These are SAMPLE rows (year first elected) to show the layout. Swap in the project's own data. -->
- 1870 | First Black member of Congress
- 1916 | First woman elected to Congress
- 1956 | First Asian American elected to Congress
- 1968 | First Black woman elected to Congress
- 2008 | First Black president
- 2020 | First woman elected vice president
- never | First woman president

## Caption

Years from the first Congress to each first. Sample milestones shown; the full project includes many more.

## Before you go

Don't miss the interactive map showing all the "never-been" data across the country.

# Samizdat

slug: samizdat
pill: Samizdat
url: https://samizdat.travelinreid.com
status: Mac alpha
role: Product Owner
started: 2026
built_with: Codex/ChatGPT, Electron, React, TypeScript
visual: imposition

## Summary

A private, local-first desktop studio for making zines. You write ordinary pages; Samizdat does the folding math.

## What it is

Samizdat is a desktop app for making zines, the little publications you print on a single sheet of paper, then cut, fold and pass along.
You design upright pages in reading order. Samizdat works out where each page lands on the sheet, which ones print upside down, and where to cut and fold, so what comes out of the printer folds into a finished zine.
It handles Letter, Legal, Tabloid and A-series paper, text, images and shapes, and a growing set of templates beyond the classic eight-pager. Everything runs on your own computer: no account, no uploads, no cloud.

## Why I work on it

I want to make zines, all kinds of them: little physical stories and ideas to cast out into our community. And I want the tools of creation never to get in the way of the act of creation.
The zine makers I found were web-based and stopped at one or two templates. I have a printer in the basement that takes all kinds of paper, and a lot of things to say. Maybe.
It's also a small argument I keep making in my day job: publishing doesn't have to begin with a platform. Sometimes it begins with one person making a thing for another.

## What's different

- **It does the folding math.** Write pages in order. Samizdat arranges them on the sheet, flips the ones that print upside down, and marks every cut and fold.
- **More than the eight-pager.** Alongside the classic one-sheet zine are a five-page poster fold, a sixteen-page window fold, and more formats in the lab.
- **Private by default.** Projects and images stay on your machine. No account, no uploads, no password to remember.
- **A real studio.** Linked text that flows across pages, images that span a spread, a folded preview, print checks and print-ready PDFs.

## Visual

<!-- imposition: bullet 1 = left label, bullet 2 = right label, then one bullet per row of the printed sheet. The first row prints upside down. -->
- You write pages in order
- Samizdat prints them on one sheet
- 5 4 3 2
- 6 7 8 1

## Caption

The classic eight-page zine. Pages 1–8 land on one sheet, top row upside down; cut the slit across the middle, fold, and the pages fall into order.

## Before you go

The Mac alpha is open to testers. Email me from the Samizdat page to get a copy.

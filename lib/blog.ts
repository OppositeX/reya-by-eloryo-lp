/**
 * The Reya Journal: all thirteen posts, copy verbatim from the client's
 * "Reya blog series" PDF. Images in /public/blog are the PDF's own embedded
 * photographs (sRGB, full 2000px), saved as WebP like the rest of public/.
 *
 * Inline markup understood by components/RichText: **bold** and
 * [label](post:slug) for links to another post.
 */

/** The landing page lives at /preview while / serves the holding page. */
export const HOME_PATH = '/preview';
export const BLOG_PATH = `${HOME_PATH}/blog`;
export const postHref = (slug: string) => `${BLOG_PATH}/${slug}`;

export type Block =
  | { t: 'h'; text: string }
  | { t: 'p'; text: string }
  /** The short, direct answer to the title question, shown before the detail. */
  | { t: 'answer'; text: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'ul'; items: string[] };

export type Post = {
  n: number;
  slug: string;
  title: string;
  image: { src: string; width: number; height: number; alt: string };
  blocks: Block[];
};

const h = (text: string): Block => ({ t: 'h', text });
const p = (text: string): Block => ({ t: 'p', text });
const answer = (...text: string[]): Block => ({ t: 'answer', text });
const ol = (...items: string[]): Block => ({ t: 'ol', items });
const ul = (...items: string[]): Block => ({ t: 'ul', items });

const img = (n: number, alt: string, height = 1125) => ({
  src: `/blog/${String(n).padStart(2, '0')}.webp`,
  width: 2000,
  height,
  alt,
});

export const posts: Post[] = [
  {
    n: 1,
    slug: 'how-buying-property-in-cyprus-works',
    title: 'How does buying property in Cyprus actually work?',
    image: img(1, 'A single-storey modern building with timber decking under a clear blue sky'),
    blocks: [
      h('1. View & reserve'),
      p('Find a home you love and view it in person or remotely if you cannot travel. You then sign a reservation agreement and pay a reservation fee, which forms part of the price and takes the home off the market while your contract is prepared.'),
      p('At REYA you receive a 7 day cooling off period making signing your reservation agreement stress free. Nothing locks you into buying & your reservation fee is fully refundable within the cooling off period.'),
      h('2. Independent legal review'),
      p('You select your own lawyer ensuring un-biased legal opinion, review of documents and guidance through the process. Importantly they will run a title search, confirm the seller is entitled to sell, and check that nothing is registered against the property.'),
      p('Plenty of buyers reserve first and find a lawyer afterwards, which is completely normal, so don’t worry if that is the order you have done it in. Just make sure one is in place before you reach the SPA stage (Sale & Purchase Agreement).'),
      h('3. Sign the SPA & pay your deposit'),
      p('The Sale and Purchase Agreement is the real contract and it sets out your price, your payment schedule, the specification and the development roadmap. Take your time going through this document as it will list everything you are legally entitled to receive when the home is finished, so if something matters to you, make sure it appears there. If you have any questions or something is unclear it is important to raise it with your lawyer or the sales manager so they may provide clarity and make sure all are on the same page.'),
      p('Once both the seller and yourself have signed the SPA the sale becomes legally binding. A deposit, typically around 30% of the purchase price, becomes due and payable.'),
      h('4. Registration at the Land Registry'),
      p('This is the step that protects you, and it is something Cyprus does particularly well. Your lawyer registers the signed SPA at the Department of Lands and Surveys under what is called “Specific Performance law”. Once that is done, your claim is to that exact home rather than just to money back from a company. This registration means that the seller cannot sell the home to someone else or mortgage it out from under you. There is a legal deadline for lodging SPA, so it is worth asking your lawyer to confirm when it has been done. A good one will have done it without being asked.'),
      h('5. Pay in stages'),
      p('If you are buying off-plan you do not hand over the full purchase price upfront. Payments follow the construction programme, so your money flows as your home progresses. You will have the payment schedule before you sign the SPA, so you can plan around it.'),
      h('6. Receive your title deed'),
      p('Your deed does not arrive the day you collect your keys.'),
      p("Once your home is finished it has to be certified as complete, your plot must be surveyed and registered before the Land Registry can issue a separate deed in your name. This works to the Land Registry's timescale and can take several years, which is why no honest developer will give you a fixed date for it."),
      p('Waiting for the deed however does not leave you in limbo. Your SPA is already registered at the Land Registry, so your right to that specific home is secured and enforceable from the day it is registered. On the standard 19% VAT rate you can move in, let it out, and if your plans change before the deed has been issued you can sell by assigning your contract to the incoming buyer, where your contract allows. If you bought at the reduced 5% rate, letting or selling within ten years has a cost, which we explain in our [post on purchase costs](post:cost-of-buying-in-cyprus).'),
      p('When the deed is issued, ownership transfers into your name. On a new build where VAT has been paid there are no transfer fees at that point, which tends to be a welcomed surprise to anyone who has bought elsewhere.'),
      h('You can purchase without physically being in Cyprus'),
      p('If you cannot travel, or would simply rather not fly out, you can give your Cyprus lawyer power of attorney and they will sign and complete on your behalf. Buyers do this all the time, and it changes nothing about what you own at the end of it.'),
      p('If you are not an EU national you will also need permission to acquire property. Your lawyer applies for it on your behalf. It is paperwork rather than a hurdle, though it does add a little time, so it is worth starting early.'),
      h('A word on title deeds, since everyone asks'),
      p('This is the question we hear more than any other, so here is the straight answer.'),
      p("The deed itself arrives on the Land Registry's timetable. No developer in Cyprus controls that part, and you should be wary of any who suggests they do."),
      p('What a developer does control is whether the land was divided into separate plots in the first place, and that is where the stories you have heard actually come from. On those schemes the whole site sat under one undivided title, so no individual deed could be issued until somebody untangled it, sometimes years after people had moved in.'),
      p("Reya's plots are divided upfront. There is nothing waiting to be untangled. And in the meantime your ownership is registered at the Land Registry so you are protected long before the deed itself arrives."),
    ],
  },
  {
    n: 2,
    slug: 'cyprus-residency-by-buying-property',
    title: 'Can I get residency in Cyprus by buying property & what are the thresholds?',
    image: img(2, 'A calm bay at dusk with the coastline and hills beyond'),
    blocks: [
      answer('Yes, buying can open the residency route, and the qualifying threshold is €300,000 net of VAT on a new build bought directly from a developer. Importantly, residency through this route does not apply to resale properties.'),
      h('What you actually get, which is the part people ask about last'),
      p('Cyprus permanent residency is granted for life. There is no renewal to diarise and no annual paperwork to keep on top of. The only thing asked of you afterwards is that you set foot in Cyprus at least once every 24 months.'),
      p('You do not have to live here. There is no minimum number of days, no requirement to move your family, and nothing that forces you to give up where you live now. For buyers who want a base in the EU rather than a whole new country, this is usually the fact that settles it.'),
      p('The application generally covers your spouse and your dependent children alongside you, and processing typically runs two to four months once your file is complete.'),
      h('What you need to qualify'),
      p('Beyond the property itself the requirements are specific, which helps when you are working out whether this is realistic for you.'),
      ul(
        'A property of €300,000 or more, net of VAT, new build, bought from a developer',
        'Secured annual income of €50,000 from sources outside Cyprus',
        'A further €15,000 for a spouse, and €10,000 for each dependent child',
        'Health insurance',
        'A clean criminal record',
      ),
      p('Since 01 Jan 2026 you prove that income once, at application. The old requirement to re-prove it every single year no longer exists.'),
      h('Two things people get wrong, and both of them cost money'),
      p('The first is VAT. The €300,000 is the value of the property before VAT is added. It is not the total you will pay and is a common misconception buyers encounter.'),
      p('The second is assuming the threshold is the whole story. Clearing it makes an application possible, it does not make approval automatic. The programme sits under government policy which has changed before and can change again.'),
      h('What it does not give you'),
      p('Permanent residency is not citizenship and it does not come with an EU passport. It is the right to live in Cyprus for as long as you want to. For most buyers that is exactly what they were looking for, but it is worth being clear which of the two is on offer.'),
      h('On VAT, briefly'),
      p('The standard rate on new build property in Cyprus is 19%, and a reduced rate of 5% may apply where the home will be your primary and permanent residence here. The reduced rate ties the home to being your primary residence for ten years, so it is not a decision to take lightly if you might want to let the home out. Whether you qualify depends on your circumstances and should be confirmed by your own tax adviser. We go through the full cost picture properly in [a separate post](post:cost-of-buying-in-cyprus).'),
      h('A last practical note'),
      p('Start the residency conversation early rather than after you have signed. Lining the paperwork up alongside the purchase is far easier than retrofitting it afterwards, and your lawyer can run the two in parallel.'),
      h('Who should be advising you'),
      p('A Cyprus immigration lawyer, not an estate agent and not a developer. The requirements beyond the property purchase are where applications succeed or fail, and they depend entirely on your own situation and nationality.'),
      p('Every home at Reya clears the €300,000 net of VAT threshold.'),
    ],
  },
  {
    n: 3,
    slug: 'title-deeds-in-cyprus',
    title: 'What does a title deed mean in Cyprus, and why does it matter?',
    image: img(3, 'Aerial view of open farmland at the edge of a village, hills on the horizon'),
    blocks: [
      answer('A title deed is the Land Registry document that proves you own a specific piece of land and the home standing on it.'),
      p('In Cyprus there are two questions worth asking about it:'),
      ol('Does this home have its own separate deed', 'When will you actually receive it.'),
      h('Why this matters more in Cyprus than elsewhere'),
      p('Cyprus has a well documented history of delayed title deeds. Buyers paid in full and then waited 10 years, sometimes because the plots were not divided before construction began other times a developer may have had a mortgage sitting over the entire site.'),
      p('Thankfully the rules have tightened a great deal since, but that history is why experienced buyers here ask about title before they ask about kitchens, and you should too.'),
      h('Separate title versus shared title'),
      p('In a development, homes either sit on their own individually titled plots, or the whole site holds one collective title and the owners each hold a share of it. These are very different things to own. With a separate title deed you own a defined plot with defined boundaries. With shared arrangements you own a proportion of something, with shared decisions and shared costs.'),
      p('Neither is wrong, and plenty of good schemes use shared title. You simply need to know which one you are buying before you sign, and you should have that answer in writing.'),
      h('What protects you while you wait'),
      p('Registering your Sale and Purchase Agreement at the Department of Lands and Surveys under Specific Performance law secures your right to that exact home from the day it is registered. This is the mechanism that makes buying before completion reasonably safe.'),
    ],
  },
  {
    n: 4,
    slug: 'cost-of-buying-in-cyprus',
    title: 'What does it actually cost to buy in Cyprus, beyond the price?',
    image: img(4, 'A meeting room with floor-to-ceiling glass and a timber table', 1204),
    blocks: [
      p('Beyond the purchase price there are three things to budget for:'),
      ol('VAT', 'Your own legal fees', 'Land Registry registration.'),
      answer('Two costs people still expect, no longer apply on a new build: stamp duty was abolished from 01 Jan 2026, and transfer fees are zero where VAT has been paid.'),
      h('VAT'),
      p('This is the largest of the three and the one that varies most. The standard rate on new build property is 19%.'),
      p('A reduced rate of 5% may apply where the home will be your primary and permanent residence in Cyprus. Whether you qualify depends on your own circumstances.'),
      p('The reduced rate carries a condition that is worth understanding before you count on it. It ties the home to being your primary residence for ten years. Letting it out inside that period counts as a change of use, and you repay the difference between the two rates for the years remaining.'),
      p('Get this answered in writing before you commit to anything. On a purchase of this size the gap between the two rates is large enough to change what you can afford. Ask us, and more importantly ask your own lawyer or accountant.'),
      h('Legal fees'),
      p("Your own lawyer will quote you for the title search, contract review, SPA registration and completion. This is not the place to economise, and it is not the place to use the developer's lawyer. Trusted independent legal advice & assistance is crucial and the way forward here."),
      h('Land Registry registration'),
      p('Registering your SPA carries a fee of approximately €50. It is small relative to everything else and it is the step that protects you'),
      h('How to budget properly'),
      p('Take the property price, add VAT at the rate that applies to you, then add an allowance for legal fees and registration. On a new build that is close to the whole of it. Ask your lawyer for a written estimate specific to your purchase before you sign anything.'),
    ],
  },
  {
    n: 5,
    slug: 'larnaca-limassol-or-paphos',
    title: 'Larnaca, Limassol or Paphos? An honest comparison',
    image: img(5, 'A beach with parasols and loungers beside a calm blue sea'),
    blocks: [
      answer("For most buyers it comes down to what you want your days to look like. Limassol is the busy international city. Paphos is the island's holiday coast. Larnaca is the calmer, more authentically Cypriot base, with the rest of the island within easy reach in every direction."),
      h('Limassol'),
      p('The commercial heart of Cyprus, with a large international business community, a polished marina and the strongest rental market on the island. It is also the most expensive place to buy, and the pace shows it. High rise building has changed long stretches of the seafront, and traffic on the coast road and into the centre at rush hour is simply part of daily life for many residents.'),
      p('If you want city energy and corporate networks on your doorstep, and do not mind paying for it, Limassol is the obvious answer.'),
      h('Paphos'),
      p('Beautiful, historic and first and foremost a holiday destination. It has its own airport, a long established British community and a harbour lined with restaurants. The flip side of being a resort town is the seasons. From spring through to autumn the coast fills with visitors, the roads and beaches get crowded, and much of the town is geared to tourism. It also sits at the far western end of the island, so Nicosia and the east coast are a long drive away.'),
      h('Larnaca'),
      p('A real, working Cypriot city with a palm lined seafront, an old town, a marina, hospitals and international schools, at a noticeably lower price point than Limassol. Its greatest strength is where it sits. Nicosia and Limassol are both about 45 minutes away as well as the beaches around Ayia Napa. The Troodos mountains and Paphos are an easy day out. Few places on the island put so much of Cyprus within reach, and the city itself still feels unhurried.'),
      h('Pervolia and Kiti'),
      p('A short drive along the coast from Larnaca, these two neighbouring villages are where many Cypriot families have peacefully lived for generations. Pervolia has a seafront promenade out to the old Faros lighthouse, a calm beach and tavernas that cook for locals rather than coach parties. Kiti, five minutes away, takes care of everyday life with supermarkets, schools and services, and is home to Panagia Angeloktisti, a Byzantine church whose mosaic is among the finest on the island. It is the stretch of coast that people who know Cyprus well tend to keep to themselves.'),
      h('Honest summary'),
      p('Most buyers arrive thinking about Limassol or Paphos, because those are the names they know from holidays. The Larnaca coast is less marketed internationally, which is precisely why the value is better and why the villages still feel lived in rather than visited. If you want a quiet coastal home with a working city twenty minutes away and the whole island within reach, this coast deserves a proper look before you decide.'),
      p('If city life and corporate networks come first, we would genuinely point you towards Limassol.'),
      h('What to actually do'),
      p('Spend a day in each. Not a viewing day, an ordinary one. Have lunch, walk around in the afternoon, drive back through the rush hour and see what is still open in the evening. The differences that matter never show up on a website or marketing listing.'),
      p('Reya is in Pervolia on the Larnaca coast, twenty minutes by car from Larnaca. Our sales suite is open by appointment, and you are very welcome to make it part of that day.'),
    ],
  },
  {
    n: 6,
    slug: 'cyprus-non-dom-status',
    title: 'What is Cyprus non-dom status, and who is it for?',
    image: img(6, 'A café terrace among palms and stone buildings'),
    blocks: [
      h('What it means in plain English'),
      answer('If you live off company dividends, investments or savings interest, Cyprus will not take a cut of that income for 17 years. That is the headline'),
      p('Non-dom status is a Cyprus tax status that means, for up to 17 years, you pay no Cyprus tax on your dividends and interest, apart from a small health contribution. It is open to people who become tax resident in Cyprus but whose roots are somewhere else, which describes most people moving here.'),
      h('Who it helps most'),
      ul(
        'Business owners who pay themselves through dividends',
        'Retirees living on investment income',
        'Anyone with savings or a portfolio outside Cyprus',
      ),
      h('How do you get it?'),
      p('There are two parts:'),
      p('First you become tax resident in Cyprus, either by spending more than 183 days a year here or through the 60 day route, which we explain in [its own post](post:cyprus-60-day-tax-residency).'),
      p('Second, your permanent roots need to be elsewhere, which for most people simply means the country they were born and grew up in. The 17 years start from the year you become tax resident.'),
      h('The part people forget'),
      p('Non-dom only changes how Cyprus taxes you. Your home country may still have a say, especially in the year you leave. Some countries keep taxing their citizens wherever they live, and some charge an exit tax when you go. So it is worth checking both sides before you make the move.'),
      h('A bonus worth knowing'),
      p('Cyprus has no inheritance tax, no gift tax and no wealth tax. For families thinking about passing things on, that can matter even more than the 17 years.'),
      h('What to do next'),
      p('Speak to a tax adviser who knows both Cyprus and your current country, ideally before you buy.'),
    ],
  },
  {
    n: 7,
    slug: 'living-in-pervolia',
    title: 'Pervolia: what living here is actually like',
    image: img(7, 'A palm-lined coastal promenade and cycle path'),
    blocks: [
      answer('Pervolia is a small coastal village ten kilometres from Larnaca city, where Cypriot families have lived for generations. For those seeking a calm, unhurried and wholesome existence, it is a lovely place to call home.'),
      p("The name comes from the Greek for orchards, and the land around the village is still farmed. Driving in from Larnaca you pass fields of wheat, watermelon and artichoke depending on the season, with the mountains' silhouettes as a backdrop and the Mediterranean stretching out to the horizon."),
      p('Most days here begin and end by the sea.'),
      p('A coastal promenade runs along the water out to the Faros lighthouse, a nineteenth century landmark on the point, and people really do use it: a walk in the morning before the heat, a bike ride or a slow stroll home after dinner.'),
      p('The beach is calm with a beach club, SUP boarding & kayak rental, open water, and enough room that even in the height of summer you won’t be hunting for a spot.'),
      p('And then there is the food. The tavernas serve proper Cypriot menus that leave your tastebuds satisfied & spirits high.'),
      p('The area has numerous authentic restaurants that hit the mark for most palates, whether looking for Souvlaki or sumptuous small plates.'),
      h('Is Pervolia right for you?'),
      p('Pervolia is a quiet community. If bustling bars & clubs within walking distance is what you’re after then this may not be your ideal.'),
      p('If you however are in search of somewhere calm & unhurried, with local charm & genuinely lived in rather than seasonal, Pervolia is hard to beat.'),
      p('Honestly the best thing is to come spend an afternoon on the coast, in the village and see how it feels.'),
    ],
  },
  {
    n: 8,
    slug: 'buying-off-plan-in-cyprus',
    title: 'Buying off-plan in Cyprus - What protects you?',
    image: img(8, 'Aerial view of construction work beside a modern single-storey building'),
    blocks: [
      p('Four things protect an off-plan buyer in Cyprus:'),
      h('Registration at the Land Registry'),
      p('Under Specific Performance law, depositing your SPA at the Department of Lands and Surveys secures your interest in that specific property. The developer cannot sell it to someone else or mortgage it out from under you.'),
      h('Your own independent lawyer'),
      p("Appointed by you, paid by you, acting only for you. Not the developer's lawyer, and not one the developer recommends and pays for. This is the single most valuable protection you have and it is the one buyers most often economise on."),
      h('Staged payments'),
      p('Payments tied to construction milestones rather than paid up front. You should know the schedule before signing, and each stage should correspond to verifiable progress. Ask whether the project architect has to certify a stage as complete before it becomes payable, because that is what turns a payment schedule into a genuine check on progress.'),
      h('Track record'),
      p('The least formal protection, and arguably the most predictive. Has the developer built other projects before, have they delivered, where, when, and can you go and look at them or see them online? Completed projects are checkable in a way that promises are not.'),
      h('Questions worth asking before you sign'),
      ol(
        'Is there a mortgage or charge over the site, and what is the release mechanism?',
        'What is the payment schedule and what triggers each stage?',
        'What happens if completion is delayed, and what does the contract give me if it is?',
        'What exactly is in the specification schedule?',
        'Who is the company behind this development, and what else have they delivered?',
      ),
      h('One honest caution'),
      p('Off-plan carries risks that a finished home does not. The build can run late. What is delivered can differ from what the renders showed. Your own circumstances can change over several years. And in rare cases a developer does not finish at all.'),
      p("Timing is the one you are most likely to meet, and the one buyers check least. Ask how the contract actually handles it: is there a defined delivery date, what grace period sits around it, what counts as a delay outside the developer's control, and what are you owed if it runs past that. A developer who can answer all four from the document has thought about it."),
      p('These protections reduce all of this substantially. They do not eliminate it.'),
      p('Reya is developed by Eloryo, building since 2011 with roots back to 1998, across five countries including Cyprus, Spain, Greece and the United Kingdom, with its first completed Cyprus project completed & handed over in Limassol.'),
    ],
  },
  {
    n: 9,
    slug: 'cyprus-60-day-tax-residency',
    title: 'Do you have to live in Cyprus to be tax resident?',
    image: img(9, 'Thatched parasols along a beach above a bright blue sea'),
    blocks: [
      answer('No. Sixty days in Cyprus in a calendar year can be enough, provided you meet several additional conditions.'),
      h('The conditions, and they all have to be met'),
      ol(
        'You must spend at least sixty days in Cyprus in the tax year.',
        'You must not spend more than one hundred and eighty three days in any single other country.',
        'You must have defined ties to Cyprus: carrying on a business, being employed, or holding an office in a Cyprus tax resident company, together with maintaining a permanent home in Cyprus that you own or rent.',
      ),
      p('That last requirement is where property ownership becomes directly relevant'),
      h('Who this actually suits'),
      p('People who genuinely split their time between countries and are not firmly tax resident in any one of them. Business owners, consultants, anyone whose work travels with them, and people with interests in more than one country.'),
      h('Who it does not suit'),
      p('Anyone still substantially resident somewhere else. You can satisfy every Cyprus condition and still be treated as resident by your home country on ties such as family, home and business, in which case the treaty tie-breaker decides, and it usually lands where your real life is.'),
      h('Why it matters alongside non-domicile status'),
      p('Becoming Cyprus tax resident is the gateway to non-dom, which exempts dividends and interest for seventeen years. The sixty day rule is what makes that accessible without fully relocating.'),
      h('The warning worth repeating'),
      p('Tax residency is not a unilateral decision. Your existing country of residence has its own rules for when you cease to be resident there, and those rules can be strict, involving day counts, ties, family location and available accommodation. Some countries apply exit taxes. Leaving is often harder than arriving.'),
      p('Do not plan a purchase around a tax position you have not had confirmed by someone who understands both jurisdictions. This is the mistake that costs people most.'),
      h('What to do'),
      p('Speak to a tax adviser covering both Cyprus and your current country before buying, not after.'),
    ],
  },
  {
    n: 10,
    slug: 'british-buyers-after-brexit',
    title: 'What British buyers need to know post-Brexit',
    image: img(10, 'The Pyrgos family taverna'),
    blocks: [
      answer('Yes, you can still buy in Cyprus, and plenty of British buyers still do.'),
      p('Since Brexit you do it as a non-EU national, which changes three things:'),
      ol(
        'You need permission to acquire property',
        'There is a limit on how long you can stay without a residence permit',
        'The permanent residency route now genuinely matters',
      ),
      h('Buying is still straightforward'),
      p('Permission to acquire property sounds more daunting than it is. Your lawyer applies for it on your behalf as part of the purchase. Paperwork rather than a hurdle, though it does add a little time, so it is worth starting early.'),
      p('There have also been limits on how many properties a non-EU national can own and how large they can be, so ask your lawyer where that stands for your own situation.'),
      h('Staying is what actually changed'),
      p('As a visitor you now get roughly 90 days in any 180. If you are coming out for a few weeks a year, this changes nothing at all. If you were picturing half the year here, it is the whole issue, and it is the thing British buyers most often miss until late in the process.'),
      h('Why permanent residency became relevant'),
      p('Before Brexit you had freedom of movement and none of the above was required.'),
      p('Now the €300,000 net of VAT threshold is genuinely useful, because it is the route to staying longer than a visitor can. Clearing it makes an application possible however it does not make approval automatic, and there are further requirements:'),
      ul(
        'Secured annual income from outside Cyprus of €50,000, plus €15,000 for a spouse and €10,000 for each dependent child',
        'Health insurance',
        'A clean criminal record',
      ),
      p('Once granted it holds for life, provided you set foot in Cyprus at least once every 24 months. There is no requirement to live here.'),
      h('What has not changed'),
      p('Quite a lot, and it is the reassuring part.'),
      p('English is widely spoken. The legal system is based on English common law, so contracts and conveyancing feel familiar in a way they often do not elsewhere in the Mediterranean. Driving is on the left. Direct UK flights run year round into Larnaca, and there is a long established British community already here.'),
      h('One practical point worth planning for'),
      p('You likely earn in Great British Pounds (GBP) and Cyprus prices are in euros meaning the exchange rate is a live part of your budget between reservation and final payment so build in a margin. It is also worth checking your UK pension position and double taxation with a UK adviser before you assume anything about the tax side.'),
      h('Take advice from both sides'),
      p('A Cyprus lawyer for the purchase and the residency application, and a UK adviser for the tax and pension side. They are two very different conversations and both are crucial.'),
    ],
  },
  {
    n: 11,
    slug: 'israeli-buyers-in-cyprus',
    title: 'Israeli buyers in Cyprus - The practical questions',
    image: img(11, 'Aerial view over a coastal village to the sea at golden hour'),
    blocks: [
      p('Two things bring most Israeli buyers to Cyprus:'),
      ol(
        'It is the closest EU country, roughly a forty minute flight from Tel Aviv to Larnaca.',
        'Here, the price of a Tel Aviv apartment buys a house, a garden and the land it stands on.',
      ),
      h('Distance and flights'),
      p('Multiple daily flights connect Tel Aviv and Larnaca year round, and Reya is twenty minutes by car from Larnaca.'),
      p('In practical terms, a home in the Larnaca district is more accessible from central Israel than parts of Israel are.'),
      h('EU membership'),
      p('Cyprus is an EU member state. For Israeli buyers, this is generally the point of interest rather than the residency route in isolation: an EU jurisdiction, EU legal framework, and euro denominated assets, within an hour of home.'),
      h('Buying as a non-EU national'),
      p('Non-EU buyers need permission to acquire property, which your lawyer applies for. It is procedural but it adds time. Historic limits on the number and size of properties acquirable by non-EU nationals should be confirmed with your lawyer based on your circumstances.'),
      h('What the same budget actually buys'),
      p('At Reya, an entry level home is a two bedroom of 95 m² on its own individual plot, with its own title deed, a private garden, a covered veranda and parking, twenty minutes from Larnaca and 750 m from the beach.'),
      p('Anyone who has looked at the market in central Israel recently will know how far that budget goes there by comparison.'),
      h('Transaction costs, which are the part people do not expect'),
      p('Stamp duty was abolished on 01 Jan 2026, and transfer fees are zero on a new build where VAT has been paid.'),
      p('Israeli purchase tax on a second home, starts at 8% from the first shekel. The difference on a purchase around €300,000 is roughly €24,000. Check your own position with an Israeli adviser, but the math is worth doing early.'),
      h('Tax'),
      p('Three things decide the outcome,'),
      ul(
        '**Israeli residency.** Israel looks at where your centre of life sits, not simply at days counted. Buying here does not change that on its own.',
        '**The treaty.** The Israel and Cyprus double taxation treaty is in force, and is designed so the same income is not taxed twice.',
        '**Reporting.** Israeli residents report worldwide income and foreign assets. A home in Cyprus is not invisible, and should never be treated as though it is.',
      ),
      p('On the Cyprus side, non-dom status gives 17 years with no Cyprus tax on dividends and interest, and the 60 day route can make residency here workable without a full move. Whether either actually helps you depends entirely on your Israeli position, so speak to an Israeli adviser and a Cyprus adviser.'),
      h('Community'),
      p('There is a substantial and long established Israeli presence in Cyprus, concentrated in Limassol but growing in Larnaca. Hebrew is spoken more widely each year, and Larnaca has a functioning community infrastructure.'),
      h('A practical note on visiting'),
      p('Given the flight time, a genuine day trip to view property is realistic in a way it is not from most countries. Come on an ordinary weekday rather than a weekend and you will see the place as it actually is.'),
      p('Our sales suite in Pervolia is open by appointment and we would love to arrange a time for a personal tour highlighting the active site, Pervolia town and what the area has to offer.'),
    ],
  },
  {
    n: 12,
    slug: 'cyprus-mortgage-for-non-residents',
    title: 'Can you get a mortgage in Cyprus as a non-resident?',
    image: img(12, 'A modern building with a timber pergola at sunset, behind a gravel garden'),
    blocks: [
      answer(
        'Yes.',
        'Several Cyprus banks lend to non-residents on residential property. How much they lend and on what terms depends on your income, your country of residence and the property itself.',
      ),
      h('Consider the payment schedule'),
      p('On an off-plan purchase, payments are staged against construction rather than paid in full upfront. Plenty of buyers fund the early stages from savings and arrange lending closer to completion, and some find they do not need to borrow at all.'),
      h('What a Cyprus bank will want from you'),
      p('Proof of income, identification, tax residency, and a clear account of where the money comes from. The source of funds work is the part people underestimate, particularly where money has moved across several jurisdictions or sits in a company. Start it early. It is the most common reason a purchase runs late.'),
      h('One rule that catches people out'),
      p('If you are also applying for permanent residency, the qualifying funds must be transferred from abroad rather than paid from a Cyprus account funded locally. Tell your lawyer how you intend to fund the purchase at the beginning, because unwinding it later is difficult.'),
      h('Borrowing at home instead'),
      p('Some buyers release equity against a property in their own country rather than borrowing in Cyprus. It is often simpler, sometimes cheaper, and it removes a cross-border approval from the critical path. Price both before assuming a Cyprus mortgage is the answer.'),
      h('Currency, if you do not earn in euros'),
      p('Prices here are in euros. Between reservation and final payment the exchange rate is a live part of your budget so build in a margin and talk to a currency specialist rather than taking whatever rate your bank offers on the day.'),
    ],
  },
  {
    n: 13,
    slug: 'schools-and-healthcare-in-cyprus',
    title: 'How do schools and healthcare work if you move to Cyprus?',
    image: img(13, 'A quiet colonnaded street lined with palms and plants'),
    blocks: [
      answer('Cyprus has a national health system called GESY that residents pay into and use, alongside plenty of private clinics and hospitals. Schools split two ways: state schools are free and taught in Greek, while private and international schools charge fees and teach in English.'),
      p('The international schools are in the cities rather than the villages, so where you live and where your children go to school is really one decision rather than two.'),
      h('Healthcare'),
      p('Once you are tax resident here you pay into GESY and you can use it. The contribution is 2.65% of your income, capped at around €4,770 a year. Plenty of people keep private cover as well, not because GESY is poor but because it buys speed and a choice of consultant.'),
      p('Larnaca has the hospitals and the specialists, twenty minutes away. The village handles the everyday things, the pharmacy and the doctor.'),
      h('Schools'),
      p('State schools are free and taught in Greek. The private and international schools teach in English, follow a British or international curriculum, and are mostly in Larnaca and the other cities.'),
      p('Popular schools fill up early, so register well before you move. And the school run is a daily reality, so drive it once before you settle on a village.'),
      h('Language'),
      p('You can live here perfectly comfortably in English. It is widely spoken, and the legal system is based on English common law, so the paperwork tends to feel familiar rather than foreign. Greek is not necessary, though it is worth learning if you are here to stay. Russian is widely used too, and Larnaca has a growing Hebrew speaking community.'),
      h('Getting set up'),
      p('The practical list is shorter than people expect: a Cyprus bank account, tax registration, utilities in your name and a driving licence. Driving is on the left. Exactly what you need depends on your nationality and whether you are an EU national, so ask your lawyer to map it out before you arrive.'),
      h('The part worth doing before you decide'),
      p('Come outside the summer as well as in it, do a school run at eight in the morning, visit a pharmacy. The things that decide whether a move works are ordinary, and usually don’t show up on a viewing day.'),
    ],
  },
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);

/** Meta description: the answer box when there is one, else the first full paragraph. */
export function postDescription(post: Post): string {
  const box = post.blocks.find((b) => b.t === 'answer');
  if (box && box.t === 'answer') return box.text.join(' ');
  const para = post.blocks.find((b) => b.t === 'p' && !b.text.endsWith(':'));
  return para && para.t === 'p' ? para.text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') : post.title;
}

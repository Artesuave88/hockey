export interface Player {
	id: number;
	name: string;
	number?: number;
	position: string;
	joined?: string;
	bio?: string;
	stats?: Record<string, number>;
	photo?: string;
}

export interface Fixture {
	id: number;
	date: string;
	opponent: string;
	home: boolean;
	venue: string;
	result?: string;
	score?: string;
	type: 'league' | 'friendly' | 'tournament';
	reportUrl?: string;
}

export interface NewsItem {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	content: string;
	image?: string;
}

export interface Sponsor {
	name: string;
	logo: string;
	url?: string;
	tier: 'main' | 'partner' | 'supporter';
}

export const players: Player[] = [
	{
		id: 1,
		name: 'Alex Burton',
		number: 31,
		position: 'Goalie',
		joined: '2009-09-01',
		bio: 'Founding squad goaltender and one of the most vocal leaders on the bench.',
		stats: { games: 148, saves: 4272, shutouts: 9 },
		photo: '/images/players/alex-burton.jpg'
	},
	{
		id: 2,
		name: 'Mark Fielding',
		number: 4,
		position: 'Defense',
		joined: '2010-01-14',
		bio: 'Stay-at-home defenseman who anchors the first pairing.',
		stats: { games: 132, goals: 11, assists: 54 },
		photo: '/images/players/mark-fielding.jpg'
	},
	{
		id: 3,
		name: 'Tom Halley',
		number: 7,
		position: 'Defense',
		joined: '2011-09-02',
		stats: { games: 116, goals: 18, assists: 47 },
		photo: '/images/players/tom-halley.jpg'
	},
	{
		id: 4,
		name: 'Nathan Cross',
		number: 12,
		position: 'Center',
		joined: '2012-08-10',
		bio: 'Two-way center used heavily on faceoffs and penalty kill.',
		stats: { games: 121, goals: 42, assists: 63 },
		photo: '/images/players/nathan-cross.jpg'
	},
	{
		id: 5,
		name: 'Jamie Locke',
		number: 14,
		position: 'Wing',
		joined: '2014-03-01',
		stats: { games: 109, goals: 51, assists: 58 },
		photo: '/images/players/jamie-locke.jpg'
	},
	{
		id: 6,
		name: 'Liam Waller',
		number: 16,
		position: 'Wing',
		joined: '2015-09-06',
		stats: { games: 98, goals: 39, assists: 40 },
		photo: '/images/players/liam-waller.jpg'
	},
	{
		id: 7,
		name: 'Chris Dobson',
		number: 19,
		position: 'Center',
		joined: '2016-10-12',
		stats: { games: 94, goals: 33, assists: 52 },
		photo: '/images/players/chris-dobson.jpg'
	},
	{
		id: 8,
		name: 'Owen Brigg',
		number: 22,
		position: 'Defense',
		joined: '2018-08-20',
		stats: { games: 71, goals: 9, assists: 25 },
		photo: '/images/players/owen-brigg.jpg'
	},
	{
		id: 9,
		name: 'Daniel Kerr',
		number: 27,
		position: 'Wing',
		joined: '2019-09-15',
		stats: { games: 64, goals: 31, assists: 22 },
		photo: '/images/players/daniel-kerr.jpg'
	},
	{
		id: 10,
		name: 'Sam Broadhurst',
		number: 35,
		position: 'Goalie',
		joined: '2021-01-09',
		stats: { games: 40, saves: 1108, shutouts: 2 },
		photo: '/images/players/sam-broadhurst.jpg'
	},
	{
		id: 11,
		name: 'Will Mercer',
		number: 44,
		position: 'Defense',
		joined: '2022-09-01',
		stats: { games: 39, goals: 5, assists: 18 },
		photo: '/images/players/will-mercer.jpg'
	},
	{
		id: 12,
		name: 'Ben Sutton',
		number: 88,
		position: 'Wing',
		joined: '2024-09-03',
		bio: 'New pacey winger developing quickly in transition play.',
		stats: { games: 22, goals: 12, assists: 9 },
		photo: '/images/players/ben-sutton.jpg'
	}
];

export const fixtures: Fixture[] = [
	{
		id: 1,
		date: '2026-03-14T19:30:00Z',
		opponent: 'Coventry Night Owls',
		home: true,
		venue: 'National Ice Centre, Nottingham',
		type: 'league'
	},
	{
		id: 2,
		date: '2026-03-28T18:15:00Z',
		opponent: 'Leicester Foxes B',
		home: false,
		venue: 'Leicester Ice Arena',
		type: 'league'
	},
	{
		id: 3,
		date: '2026-04-11T17:00:00Z',
		opponent: 'Derby Polar Bears',
		home: true,
		venue: 'National Ice Centre, Nottingham',
		type: 'friendly'
	},
	{
		id: 4,
		date: '2012-11-18T18:30:00Z',
		opponent: 'Sheffield Squeelers',
		home: false,
		venue: 'IceSheffield',
		result: 'L',
		score: '3-4',
		type: 'league',
		reportUrl: '/news/sheffield-squeelers-4-3-nottingham-phantoms'
	},
	{
		id: 5,
		date: '2012-10-07T17:15:00Z',
		opponent: 'Derby Rams',
		home: true,
		venue: 'National Ice Centre, Nottingham',
		result: 'W',
		score: '6-2',
		type: 'league',
		reportUrl: '/news/phantoms-start-season-with-home-win'
	},
	{
		id: 6,
		date: '2012-12-02T19:00:00Z',
		opponent: 'Leeds Knights Rec',
		home: false,
		venue: 'Planet Ice Leeds',
		result: 'W',
		score: '5-1',
		type: 'friendly',
		reportUrl: '/news/four-goal-second-period-seals-leeds-win'
	},
	{
		id: 7,
		date: '2012-12-16T18:00:00Z',
		opponent: 'Nottingham Mavericks',
		home: true,
		venue: 'National Ice Centre, Nottingham',
		result: 'L',
		score: '2-3',
		type: 'league',
		reportUrl: '/news/mavericks-edge-tight-city-derby'
	},
	{
		id: 8,
		date: '2012-09-23T16:45:00Z',
		opponent: 'Hull Hawks Rec',
		home: false,
		venue: 'Hull Arena',
		result: 'D',
		score: '4-4',
		type: 'tournament',
		reportUrl: '/news/phantoms-open-tournament-with-draw'
	}
];

export const newsItems: NewsItem[] = [
	{
		slug: 'sheffield-squeelers-4-3-nottingham-phantoms',
		title: 'Sheffield Squeelers 4-3 Nottingham Phantoms',
		date: '2012-11-18',
		excerpt: 'A late goal settled a tight away game after the Phantoms fought back from two down.',
		content:
			'The Phantoms trailed 0-2 early but levelled through disciplined forechecking and quick puck movement. A narrow third period decided it, with Sheffield finding the winner in the final five minutes.',
		image: '/images/news/sheffield-away-2012.jpg'
	},
	{
		slug: 'phantoms-start-season-with-home-win',
		title: 'Phantoms Start Season With Home Win',
		date: '2012-10-07',
		excerpt: 'Nottingham opened the campaign with a confident 6-2 performance at the NIC.',
		content:
			'Balanced scoring across three lines gave the team a strong start to the season. The coaching group highlighted defensive structure and discipline as key positives.',
		image: '/images/news/home-opener-2012.jpg'
	},
	{
		slug: 'four-goal-second-period-seals-leeds-win',
		title: 'Four-Goal Second Period Seals Leeds Win',
		date: '2012-12-02',
		excerpt: 'A fast middle period pushed the Phantoms clear on the road.',
		content:
			'After a level first frame, Nottingham scored four unanswered goals in the second period. Special teams and puck support were the difference.',
		image: '/images/news/leeds-friendly-2012.jpg'
	},
	{
		slug: 'mavericks-edge-tight-city-derby',
		title: 'Mavericks Edge Tight City Derby',
		date: '2012-12-16',
		excerpt: 'A close Nottingham derby ended 3-2 despite a late Phantoms push.',
		content:
			'The home side created chances in the closing minutes but could not find an equaliser. Players and supporters were praised for a high-tempo local derby atmosphere.',
		image: '/images/news/city-derby-2012.jpg'
	},
	{
		slug: 'training-block-confirmed-for-spring',
		title: 'Spring Training Block Confirmed',
		date: '2026-02-01',
		excerpt: 'Weekly sessions are now locked in ahead of the final league fixtures.',
		content:
			'The club has confirmed a structured spring training block with dedicated skating, systems work, and small-area drills for all registered players.',
		image: '/images/news/training-2026.jpg'
	},
	{
		slug: 'new-player-intro-night-announced',
		title: 'New Player Intro Night Announced',
		date: '2026-01-15',
		excerpt: 'Prospective players are invited to an informal on-ice introduction evening.',
		content:
			'The session will include skate assessment, safety briefing, and a short coached scrimmage. Interested players can register via the contact section.',
		image: '/images/news/intro-night-2026.jpg'
	}
];

export const sponsors: Sponsor[] = [
	{
		name: 'Nottingham Ice Centre',
		logo: '/images/sponsors/nic-logo.svg',
		url: 'https://www.national-ice-centre.com',
		tier: 'main'
	},
	{
		name: 'Blade & Tape Co.',
		logo: '/images/sponsors/blade-tape.svg',
		tier: 'partner'
	},
	{
		name: 'Trent Sports Therapy',
		logo: '/images/sponsors/trent-therapy.svg',
		url: 'https://example.com/trent-sports-therapy',
		tier: 'partner'
	},
	{
		name: 'City Print Nottingham',
		logo: '/images/sponsors/city-print.svg',
		tier: 'supporter'
	},
	{
		name: 'Rinkside Cafe',
		logo: '/images/sponsors/rinkside-cafe.svg',
		tier: 'supporter'
	}
];

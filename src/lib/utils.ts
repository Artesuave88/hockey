import { format, isFuture, isValid, parseISO } from 'date-fns';

import type { Fixture } from '$lib/data';

function parseDate(value: string): Date | null {
	const parsed = parseISO(value);
	return isValid(parsed) ? parsed : null;
}

export function formatDisplayDate(value: string, pattern = 'd MMM yyyy'): string {
	const parsed = parseDate(value);
	return parsed ? format(parsed, pattern) : value;
}

export function formatDisplayDateTime(value: string): string {
	return formatDisplayDate(value, 'd MMM yyyy, HH:mm');
}

export function isUpcomingFixture(fixture: Fixture): boolean {
	const parsed = parseDate(fixture.date);
	return parsed ? isFuture(parsed) : false;
}

export function sortFixturesByDate(
	fixtures: Fixture[],
	direction: 'asc' | 'desc' = 'asc'
): Fixture[] {
	const copy = [...fixtures];

	copy.sort((a, b) => {
		const aTime = parseDate(a.date)?.getTime() ?? 0;
		const bTime = parseDate(b.date)?.getTime() ?? 0;
		return direction === 'asc' ? aTime - bTime : bTime - aTime;
	});

	return copy;
}

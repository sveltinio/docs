import dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
	monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
});

export function padTo2Digits(num: number) {
	return num.toString().padStart(2, '0');
}
export function formatDate(date: Date) {
	return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join(
		'/'
	);
}

export function dayInMonthFromDate(dateStr: string): number {
	return dayjs(dateStr, 'DD/MM/YYYY').daysInMonth();
}

export function monthShortFromDate(dateStr: string): dayjs.MonthNames {
	const instanceDate = dayjs().localeData();
	return instanceDate.monthsShort(dayjs(dateStr, 'DD/MM/YYYY'));
}

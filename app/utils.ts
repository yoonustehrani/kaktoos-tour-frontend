import moment from 'moment-jalaali';
import { TOUR_RESULT } from './utils/types';
moment.loadPersian({ dialect: 'persian-modern' });
// moment.locale('fa')

export function getJMoment() {
    return moment;
}

export function getCalendar(year: number, month: number) {

    const startOfMonth = moment(`${year}-${month}-01`, 'jYYYY-jMM-jDD');
    const endOfMonth = startOfMonth.clone().endOf('jMonth');

    // Get the number of days in the month
    const daysInMonth = endOfMonth.jDate();

    // Get the starting weekday of the month (0 = Shanbe, 6 = Jome)
    const startWeekday = startOfMonth.weekday();

    // Initialize the calendar grid
    const calendar = [];
    let week = [];

    // Fill the first week with empty days if necessary
    for (let i = 0; i < startWeekday; i++) {
        week.push(null); // Empty days before the start of the month
    }

    // Fill the calendar with days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        week.push(day);

        // If the week is complete (7 days), add it to the calendar and start a new week
        if (week.length === 7) {
            calendar.push(week);
            week = [];
        }
    }

    // Fill the last week with empty days if necessary
    if (week.length > 0) {
        while (week.length < 7) {
            week.push(null); // Empty days after the end of the month
        }
        calendar.push(week);
    }
    return calendar;
}

export function getJalaliMonthNames(): {id: number, name: string}[] {
    return (moment.localeData()._jMonths as string[]).map((x, i) => ({id: i, name: x}));
}

const formatter = new Intl.NumberFormat('fa', {style: 'decimal'})

export function farsiNumber(number: number | string): string {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (digit) => persianDigits[Number(digit)]);
}

export function convertToJalali(date: string)
{
    return farsiNumber(getJalaliMomentOf(date).format('jYYYY/jMM/jDD'))
}

export function getJalaliMomentOf(date: string)
{
    return moment(date, 'YYYY-MM-DD');   
}

export function getTourHref(tour: TOUR_RESULT) {
    return `/tours/${tour.id}/${tour.slug}`
}
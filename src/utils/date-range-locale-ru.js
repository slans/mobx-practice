const dateRangeLocaleRu = {
	// months list by order
	months: [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	],

	// week days by order
	weekDays: [
		{
			name: 'Понедельник',
			short: 'П',
		},
		{
			name: 'Вторник',
			short: 'В',
		},
		{
			name: 'Среда',
			short: 'С',
		},
		{
			name: 'Четверг',
			short: 'Ч',
		},
		{
			name: 'Пятница',
			short: 'П',
		},
		{
			name: 'Суббота',
			short: 'С',
			isWeekend: true,
		},
		{
			name: 'Воскресенье', // used for accessibility
			short: 'В', // displayed at the top of days' rows
			isWeekend: true, // is it a formal weekend or not?
		},
	],

	// just play around with this number between 0 and 6
	weekStartingIndex: 6,

	// return a { year: number, month: number, day: number } object
	getToday(gregorainTodayObject) {
		return gregorainTodayObject;
	},

	// return a native JavaScript date here
	toNativeDate(date) {
		return new Date(date.year, date.month - 1, date.day);
	},

	// return a number for date's month length
	getMonthLength(date) {
		return new Date(date.year, date.month, 0).getDate();
	},

	// return a transformed digit to your locale
	transformDigit(digit) {
		return digit;
	},

	// texts in the date picker
	nextMonth: 'Следующий месяц',
	previousMonth: 'Предыдущий месяц',
	openMonthSelector: 'Open Month Selector',
	openYearSelector: 'Open Year Selector',
	closeMonthSelector: 'Close Month Selector',
	closeYearSelector: 'Close Year Selector',
	defaultPlaceholder: 'Выбор...',

	// for input range value
	from: 'От',
	to: 'До',

	// used for input value when multi dates are selected
	digitSeparator: ',',

	// if your provide -2 for example, year will be 2 digited
	yearLetterSkip: 0,

	// is your language rtl or ltr?
	isRtl: false,
};

export default dateRangeLocaleRu;

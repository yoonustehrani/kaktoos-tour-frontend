export function PricingRoomType() {
    const cases = {
        '1': 'یک تخته', // 'Single',
        '2': 'دو تخته', // 'Double',
        '3': 'کودک با تخت', // 'ChildWithBed',
        '4': 'کودک بدون تخت', // 'ChildWithoutBed',
        '5': 'نوزاد', // 'Infant',
        '6': 'پنت هاوس', // 'Penthouse',
        '7': 'پرزیدنت', // 'President',
        '8': 'سه تخته', // 'Triple',
        '9': 'چهار تخته', // 'Quadruple',
    }
    return {
        cases,
        getValue(key: keyof typeof cases) {
            return cases[key]
        }
    }
}


export function CurrencyType() {
    const cases = {
        'USD': 'دلار',
        'EUR': 'یورو',
        'IRT': 'تومان',
        'IRR': 'ریال'
    }
    return {
        cases,
        getValue(key: keyof typeof cases) {
            return cases[key]
        }
    }
}
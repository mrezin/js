class CalendarDay {
    // private fields
    #month;
    #day;
    #year;
    // constructor
    constructor(month, day, year) {
        this.month = month;
        this.day = day;
        this.year = year;
    }
    // public method
    toString() {
        return `${this.year}-${this.#month+1}-${this.day}`;
    }
}
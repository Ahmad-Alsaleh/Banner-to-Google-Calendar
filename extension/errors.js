export class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class CalendarCreationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class EventError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class ParsingError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

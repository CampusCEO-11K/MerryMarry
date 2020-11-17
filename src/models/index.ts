export interface User {
  userId: number;
  username?: string;
  name?: string;
  phone?: string;
  addDate: string;
  regDate?: string;
}

export interface Marriage {
  marriageId: number;
  male: User;
  lady: User;
  location: string;
  account: string;
  bank: string;
}

export interface Transaction {
  transactionId: number;
  amount: number;
  date: string;
}

export interface Ticket {
  ticketId: number;
  marriage: Marriage;
  isUsed: boolean;
}

export interface GuestbookForUser {
  guestbookId: number;
  marriage: Marriage;
  transaction?: Transaction;
  belong?: string;
  msg?: string;
  isOnline: boolean;
}

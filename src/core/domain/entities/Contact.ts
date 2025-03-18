export interface Contact {
  id: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export class ContactEntity implements Contact {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly phone?: string,
    public readonly linkedin?: string,
    public readonly github?: string,
    public readonly twitter?: string
  ) {}
} 
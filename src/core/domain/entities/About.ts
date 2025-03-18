export interface About {
  id: string;
  name: string;
  title: string;
  description: string;
  photo?: string;
  resume?: string;
}

export class AboutEntity implements About {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly title: string,
    public readonly description: string,
    public readonly photo?: string,
    public readonly resume?: string
  ) {}
} 